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
    const { accountId, amount, description } = body

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

    // Get bank account
    const bankAccount = await prisma.bankAccount.findFirst({
      where: {
        id: accountId,
        userId: user.userId
      }
    })

    if (!bankAccount) {
      return NextResponse.json(
        { error: 'Bank account not found' },
        { status: 404 }
      )
    }

    // Process bank transfer
    const transaction = await prisma.$transaction(async (tx) => {
      // Create transaction record
      const newTransaction = await tx.transaction.create({
        data: {
          userId: user.userId,
          walletId: wallet.id,
          type: 'BANK_TRANSFER',
          amount: -amount,
          status: 'PENDING',
          description: description || `Bank transfer to ${bankAccount.bankName}`,
          metadata: {
            accountNumber: bankAccount.accountNumber,
            ifscCode: bankAccount.ifscCode,
            bankName: bankAccount.bankName
          }
        }
      })

      // Update wallet balance
      await tx.wallet.update({
        where: { id: wallet.id },
        data: { balance: { decrement: amount } }
      })

      // Update transaction status (simulate successful transfer)
      const updatedTransaction = await tx.transaction.update({
        where: { id: newTransaction.id },
        data: { 
          status: 'SUCCESS',
          referenceId: `BANK${Date.now()}`
        }
      })

      return updatedTransaction
    })

    return NextResponse.json({
      success: true,
      message: 'Bank transfer successful',
      transaction: {
        id: transaction.id,
        amount: amount,
        status: 'SUCCESS',
        referenceId: transaction.referenceId
      }
    })
  } catch (error) {
    console.error('Bank transfer error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
