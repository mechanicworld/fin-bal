import { TransactionCategories, TransactionType } from '@/constants'

export type Transaction = {
  id: string
  date: string
  amount: number
  currency: string
  type: keyof typeof TransactionType
  category: keyof typeof TransactionCategories
  description: string
}
export type NewTransactionValues = Omit<Transaction, 'id' | 'currency'>
export type BaseResponse<T = unknown> = {
  data?: T
  message?: string
  success: boolean
}
export type AuthResponse = BaseResponse<{
  email: string
  name: string
  surname: string
}>
export type TransactionResponse = BaseResponse<Transaction>
export type TransactionsResponse = BaseResponse<Transaction[]>
