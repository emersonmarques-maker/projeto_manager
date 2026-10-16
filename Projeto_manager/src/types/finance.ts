export interface FinanceRecord {
  id: string
  teamId: string
  type: 'INCOME' | 'EXPENSE'
  category: 'SPONSORSHIP' | 'TICKETS' | 'TV_RIGHTS' | 'TRANSFER_IN' | 'SALARY' | 'TRANSFER_OUT' | 'FACILITY' | 'OTHER'
  amount: number
  description: string
  date: string
  createdAt: string
}

export interface TeamFinance {
  teamId: string
  balance: number
  income: number
  expenses: number
}