import { z } from 'zod'

// Auth schemas
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid phone number'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

// Wallet schemas
export const addMoneySchema = z.object({
  amount: z.number().positive('Amount must be positive'),
  paymentMethod: z.enum(['UPI', 'CARD', 'NET_BANKING']),
})

export const transferSchema = z.object({
  toUserId: z.string().min(1, 'Recipient is required'),
  amount: z.number().positive('Amount must be positive'),
  description: z.string().optional(),
})

// UPI schemas
export const createVpaSchema = z.object({
  vpa: z.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/, 'Invalid VPA format'),
})

export const upiSendSchema = z.object({
  vpa: z.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/, 'Invalid VPA format'),
  amount: z.number().positive('Amount must be positive'),
  description: z.string().optional(),
})

// Payment schemas
export const mobileRechargeSchema = z.object({
  phoneNumber: z.string().regex(/^[6-9]\d{9}$/, 'Invalid phone number'),
  amount: z.number().positive('Amount must be positive'),
  operator: z.string().min(1, 'Operator is required'),
})

export const billPaymentSchema = z.object({
  billType: z.enum(['ELECTRICITY', 'GAS', 'DTH', 'BROADBAND']),
  customerId: z.string().min(1, 'Customer ID is required'),
  amount: z.number().positive('Amount must be positive'),
  operator: z.string().min(1, 'Operator is required'),
})

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
export type AddMoneyInput = z.infer<typeof addMoneySchema>
export type TransferInput = z.infer<typeof transferSchema>
export type CreateVpaInput = z.infer<typeof createVpaSchema>
export type UpiSendInput = z.infer<typeof upiSendSchema>
export type MobileRechargeInput = z.infer<typeof mobileRechargeSchema>
export type BillPaymentInput = z.infer<typeof billPaymentSchema>
