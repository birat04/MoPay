import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'
import { mobileRechargeSchema } from '@/lib/validation'

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
    const { phoneNumber, amount, operator } = mobileRechargeSchema.parse(body)

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

    if (wallet.balance.toNumber() < amount) {
      return NextResponse.json(
        { error: 'Insufficient balance' },
        { status: 400 }
      )
    }

    // Create transaction and process payment
    const transaction = await prisma.$transaction(async (tx) => {
      // Create transaction record
      const newTransaction = await tx.transaction.create({
        data: {
          userId: user.userId,
          walletId: wallet.id,
          type: 'RECHARGE',
          amount: -amount, // Negative for outgoing
          status: 'PENDING',
          description: `Mobile recharge for ${phoneNumber}`,
          metadata: {
            phoneNumber,
            operator,
            service: 'MOBILE_RECHARGE'
          }
        }
      })

      // Update wallet balance
      await tx.wallet.update({
        where: { id: wallet.id },
        data: { balance: { decrement: amount } }
      })

      // Update transaction status (simulate successful recharge)
      const updatedTransaction = await tx.transaction.update({
        where: { id: newTransaction.id },
        data: { 
          status: 'SUCCESS',
          referenceId: `RCH${Date.now()}`
        }
      })

      return updatedTransaction
    })

    return NextResponse.json({
      success: true,
      message: 'Mobile recharge successful',
      transaction: {
        id: transaction.id,
        amount: amount,
        phoneNumber,
        operator,
        status: 'SUCCESS',
        referenceId: transaction.referenceId
      }
    })
  } catch (error) {
    console.error('Mobile recharge error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
