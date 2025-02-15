import type {
  Transaction,
  BaseResponse,
  TransactionResponse,
  TransactionsResponse,
} from '@/constants'

export class TransactionService {
  static async addTransaction(transaction: Transaction): Promise<BaseResponse> {
    const data = JSON.parse(localStorage.getItem('transactions') || '[]')
    data.push(transaction)
    localStorage.setItem('transactions', JSON.stringify(data))
    return Promise.resolve({ message: 'Transaction added successfully', success: true })
  }
  static async getTransactions(): Promise<TransactionsResponse> {
    const data = JSON.parse(localStorage.getItem('transactions') || '[]')
    return Promise.resolve({ data, success: true })
  }
  static async getTransaction(id: string): Promise<TransactionResponse> {
    const data = JSON.parse(localStorage.getItem('transactions') || '[]')
    const transaction = data.find((t: Transaction) => t.id === id)
    return Promise.resolve(transaction)
  }
  static async updateTransaction(transaction: Transaction): Promise<BaseResponse> {
    const data = JSON.parse(localStorage.getItem('transactions') || '[]')
    const index = data.findIndex((t: Transaction) => t.id === transaction.id)
    data[index] = transaction
    localStorage.setItem('transactions', JSON.stringify(data))
    return Promise.resolve({ message: 'Transaction updated successfully', success: true })
  }
  static async deleteTransaction(id: string): Promise<BaseResponse> {
    const data = JSON.parse(localStorage.getItem('transactions') || '[]')
    const index = data.findIndex((t: Transaction) => t.id === id)
    data.splice(index, 1)
    localStorage.setItem('transactions', JSON.stringify(data))
    return Promise.resolve({ message: 'Transaction deleted successfully', success: true })
  }
}
