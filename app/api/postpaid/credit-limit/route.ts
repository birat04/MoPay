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

    const postpaidAccount = await prisma.postpaidAccount.findUnique({
      where: { userId: user.userId }
    })

    if (!postpaidAccount) {
      return NextResponse.json(
        { error: 'Postpaid account not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      postpaid: {
        id: postpaidAccount.id,
        creditLimit: postpaidAccount.creditLimit,
        usedAmount: postpaidAccount.usedAmount,
        availableLimit: postpaidAccount.creditLimit.toNumber() - postpaidAccount.usedAmount.toNumber(),
        dueDate: postpaidAccount.dueDate,
        status: postpaidAccount.status
      }
    })
  } catch (error) {
    console.error('Get postpaid credit limit error:', error)
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
    const { creditLimit } = body

    // Check if postpaid account already exists
    const existingAccount = await prisma.postpaidAccount.findUnique({
      where: { userId: user.userId }
    })

    if (existingAccount) {
      return NextResponse.json(
        { error: 'Postpaid account already exists' },
        { status: 400 }
      )
    }

    // Create postpaid account
    const postpaidAccount = await prisma.postpaidAccount.create({
      data: {
        userId: user.userId,
        creditLimit: creditLimit,
        usedAmount: 0,
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        status: 'ACTIVE'
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Postpaid account created successfully',
      postpaid: postpaidAccount
    })
  } catch (error) {
    console.error('Create postpaid account error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
