import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'
import { generateToken } from '@/lib/auth'
import { registerSchema } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, password } = registerSchema.parse(body)

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { phone }]
      }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists with this email or phone' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user with wallet
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        wallet: {
          create: {
            balance: 0,
            currency: 'INR',
            status: 'ACTIVE'
          }
        }
      },
      include: { wallet: true }
    })

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      phone: user.phone
    })

    return NextResponse.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        kycStatus: user.kycStatus,
        wallet: user.wallet
      }
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
