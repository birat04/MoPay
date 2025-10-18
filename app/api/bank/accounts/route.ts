import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const user = getCurrentUser(request)
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const bankAccounts = await prisma.bankAccount.findMany({
      where: { userId: user.userId },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({
      success: true,
      accounts: bankAccounts
    })
  } catch (error) {
    console.error('Get bank accounts error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

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
    const { accountNumber, ifscCode, bankName } = body

    // Check if account already exists
    const existingAccount = await prisma.bankAccount.findFirst({
      where: {
        userId: user.userId,
        accountNumber
      }
    })

    if (existingAccount) {
      return NextResponse.json(
        { error: 'Bank account already exists' },
        { status: 400 }
      )
    }

    const bankAccount = await prisma.bankAccount.create({
      data: {
        userId: user.userId,
        accountNumber,
        ifscCode,
        bankName,
        isVerified: false
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Bank account added successfully',
      account: bankAccount
    })
  } catch (error) {
    console.error('Add bank account error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
