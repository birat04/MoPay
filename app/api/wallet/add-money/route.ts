import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'
import { addMoneySchema } from '@/lib/validation'

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
    const { amount, paymentMethod } = addMoneySchema.parse(body)

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

    // Create transaction record
    const transaction = await prisma.transaction.create({
      data: {
        userId: user.userId,
        walletId: wallet.id,
        type: 'WALLET_TOPUP',
        amount: amount,
        status: 'PENDING',
        description: `Add money via ${paymentMethod}`,
        metadata: {
          paymentMethod,
          amount,
          timestamp: new Date().toISOString()
        }
      }
    })

    // In a real app, you'd integrate with payment gateway here
    // For demo, we'll simulate successful payment
    await prisma.$transaction(async (tx) => {
      // Update wallet balance
      await tx.wallet.update({
        where: { id: wallet.id },
        data: { balance: { increment: amount } }
      })

      // Update transaction status
      await tx.transaction.update({
        where: { id: transaction.id },
        data: { 
          status: 'SUCCESS',
          referenceId: `TXN${Date.now()}`
        }
      })
    })

    return NextResponse.json({
      success: true,
      message: 'Money added successfully',
      transaction: {
        id: transaction.id,
        amount: amount,
        status: 'SUCCESS',
        referenceId: `TXN${Date.now()}`
      }
    })
  } catch (error) {
    console.error('Add money error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
