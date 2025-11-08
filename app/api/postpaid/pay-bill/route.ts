import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const user = getCurrentUser(request)
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { amount, paymentMethod } = body

    // Get postpaid account
    const postpaidAccount = await prisma.postpaidAccount.findUnique({
      where: { userId: user.userId }
    })

    if (!postpaidAccount) {
      return NextResponse.json(
        { error: 'Postpaid account not found' },
        { status: 404 }
      )
    }

    if (postpaidAccount.usedAmount.toNumber() <= 0) {
      return NextResponse.json(
        { error: 'No outstanding amount to pay' },
        { status: 400 }
      )
    }

    // Get user's wallet
    const wallet = await prisma.wallet.findUnique({
      where: { userId: user.userId }
    })

    if (!wallet) {
      return NextResponse.json(
        { error: 'Wallet not found' },
        { status: 404 }
      )
    }

    if (wallet.balance < amount) {
      return NextResponse.json(
        { error: 'Insufficient balance' },
        { status: 400 }
      )
    }

    // Process postpaid bill payment
    const transaction = await prisma.$transaction(async (tx) => {
      // Create transaction record
      const newTransaction = await tx.transaction.create({
        data: {
          userId: user.userId,
          walletId: wallet.id,
          type: 'POSTPAID_PAYMENT',
          amount: -amount,
          status: 'PENDING',
          description: 'Postpaid bill payment',
          metadata: {
            paymentMethod,
            postpaidAccountId: postpaidAccount.id
          }
        }
      })

      // Update wallet balance
      await tx.wallet.update({
        where: { id: wallet.id },
        data: { balance: { decrement: amount } }
      })

      // Update postpaid account
      await tx.postpaidAccount.update({
        where: { id: postpaidAccount.id },
        data: { 
          usedAmount: { decrement: amount },
          dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // Reset due date
        }
      })

      // Update transaction status
      const updatedTransaction = await tx.transaction.update({
        where: { id: newTransaction.id },
        data: { 
          status: 'SUCCESS',
          referenceId: `POSTPAID${Date.now()}`
        }
      })

      return updatedTransaction
    })

    return NextResponse.json({
      success: true,
      message: 'Postpaid bill payment successful',
      transaction: {
        id: transaction.id,
        amount: amount,
        status: 'SUCCESS',
        referenceId: transaction.referenceId
      }
    })
  } catch (error) {
    console.error('Postpaid bill payment error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
