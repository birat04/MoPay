import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'
import { createVpaSchema } from '@/lib/validation'

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
    const { vpa } = createVpaSchema.parse(body)

    // Check if VPA already exists
    const existingVpa = await prisma.upiProfile.findUnique({
      where: { vpa }
    })

    if (existingVpa) {
      return NextResponse.json(
        { error: 'VPA already exists' },
        { status: 400 }
      )
    }

    // Check if user already has a UPI profile
    const existingProfile = await prisma.upiProfile.findUnique({
      where: { userId: user.userId }
    })

    if (existingProfile) {
      return NextResponse.json(
        { error: 'User already has a UPI profile' },
        { status: 400 }
      )
    }

    // Create UPI profile
    const upiProfile = await prisma.upiProfile.create({
      data: {
        userId: user.userId,
        vpa,
        upiId: vpa.split('@')[0],
        isVerified: false
      }
    })

    return NextResponse.json({
      success: true,
      message: 'VPA created successfully',
      upiProfile: {
        id: upiProfile.id,
        vpa: upiProfile.vpa,
        upiId: upiProfile.upiId,
        isVerified: upiProfile.isVerified
      }
    })
  } catch (error) {
    console.error('Create VPA error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
