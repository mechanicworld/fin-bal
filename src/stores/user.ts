import type { NewTransactionValues, Transaction } from '@/constants'
import { defineStore } from 'pinia'
import { TransactionService } from '@/services'
import { createTransaction } from '@/utils/creators'
interface UserState {
  transactions: Transaction[]
}

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    const transactions = localStorage.getItem('transactions')
    if (transactions?.length) {
      return {
        transactions: JSON.parse(transactions),
      }
    }
    return {
      transactions: [],
    }
  },
  actions: {
    async addTransaction(args: NewTransactionValues) {
     const newTransaction  = createTransaction(args)
      try {
        const response = await TransactionService.addTransaction(newTransaction)
        if (response.success) {
          this.transactions.push(newTransaction)
        }
      } catch (e) {
        console.error(e)
      }
    },
    async getTransactions() {
      try {
        const response = await TransactionService.getTransactions()
        if (response.success) {
          this.transactions = response.data || []
        }
      } catch (e) {
        console.error(e)
      }
    },
    async getTransaction(id: string) {
      try {
        const response = await TransactionService.getTransaction(id)
        if (response) {
          return response
        }
      } catch (e) {
        console.error(e)
      }
    },
    async updateTransaction(transaction: Transaction) {
      try {
        const response = await TransactionService.updateTransaction(transaction)
        if (response.success) {
          const index = this.transactions.findIndex((t) => t.id === transaction.id)
          this.transactions[index] = transaction
        }
      } catch (e) {
        console.error(e)
      }
    },
    async deleteTransaction(id: string) {
      try {
        const response = await TransactionService.deleteTransaction(id)
        if (response.success) {
          const index = this.transactions.findIndex((t) => t.id === id)
          this.transactions.splice(index, 1)
        }
      } catch (e) {
        console.error(e)
      }
    },
  },
})
