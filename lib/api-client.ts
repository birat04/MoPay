// API client for frontend to backend communication
const API_BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

class ApiClient {
  private baseURL: string
  private token: string | null = null

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL
  }

  setToken(token: string) {
    this.token = token
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}/api${endpoint}`
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    }

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`
    }

    const response = await fetch(url, {
      ...options,
      headers,
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'API request failed')
    }

    return response.json()
  }

  // Auth methods
  async login(email: string, password: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
  }

  async register(userData: {
    name: string
    email: string
    phone: string
    password: string
  }) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    })
  }

  // Wallet methods
  async getWalletBalance() {
    return this.request('/wallet/balance')
  }

  async addMoney(amount: number, paymentMethod: string) {
    return this.request('/wallet/add-money', {
      method: 'POST',
      body: JSON.stringify({ amount, paymentMethod }),
    })
  }

  async transferMoney(toUserId: string, amount: number, description?: string) {
    return this.request('/wallet/transfer', {
      method: 'POST',
      body: JSON.stringify({ toUserId, amount, description }),
    })
  }

  // UPI methods
  async createVPA(vpa: string) {
    return this.request('/upi/create-vpa', {
      method: 'POST',
      body: JSON.stringify({ vpa }),
    })
  }

  async sendUPI(vpa: string, amount: number, description?: string) {
    return this.request('/upi/send-money', {
      method: 'POST',
      body: JSON.stringify({ vpa, amount, description }),
    })
  }

  // Payment methods
  async mobileRecharge(phoneNumber: string, amount: number, operator: string) {
    return this.request('/payments/mobile-recharge', {
      method: 'POST',
      body: JSON.stringify({ phoneNumber, amount, operator }),
    })
  }

  async payBill(billType: string, customerId: string, amount: number, operator: string) {
    return this.request('/payments/bill-payment', {
      method: 'POST',
      body: JSON.stringify({ billType, customerId, amount, operator }),
    })
  }

  // Bank methods
  async getBankAccounts() {
    return this.request('/bank/accounts')
  }

  async addBankAccount(accountNumber: string, ifscCode: string, bankName: string) {
    return this.request('/bank/accounts', {
      method: 'POST',
      body: JSON.stringify({ accountNumber, ifscCode, bankName }),
    })
  }

  async bankTransfer(accountId: string, amount: number, description?: string) {
    return this.request('/bank/transfer', {
      method: 'POST',
      body: JSON.stringify({ accountId, amount, description }),
    })
  }

  // Postpaid methods
  async getPostpaidCreditLimit() {
    return this.request('/postpaid/credit-limit')
  }

  async createPostpaidAccount(creditLimit: number) {
    return this.request('/postpaid/credit-limit', {
      method: 'POST',
      body: JSON.stringify({ creditLimit }),
    })
  }

  async payPostpaidBill(amount: number, paymentMethod: string) {
    return this.request('/postpaid/pay-bill', {
      method: 'POST',
      body: JSON.stringify({ amount, paymentMethod }),
    })
  }

  // Notification methods
  async getNotifications() {
    return this.request('/notifications/preferences')
  }

  async markNotificationAsRead(notificationId: string) {
    return this.request('/notifications/preferences', {
      method: 'PUT',
      body: JSON.stringify({ notificationId, isRead: true }),
    })
  }

  async markAllNotificationsAsRead() {
    return this.request('/notifications/preferences', {
      method: 'PUT',
      body: JSON.stringify({ isRead: true }),
    })
  }

  async sendNotification(title: string, message: string, type?: string) {
    return this.request('/notifications/send', {
      method: 'POST',
      body: JSON.stringify({ title, message, type }),
    })
  }
}

export const apiClient = new ApiClient()
export default ApiClient
