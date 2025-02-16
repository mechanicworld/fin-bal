import {
  DateMarkFilterTime,
  type NewTransactionValues,
  type Transaction,
  TransactionCategories,
} from '@/constants'
import { defineStore } from 'pinia'
import { TransactionService } from '@/services'
import { createTransaction } from '@/utils/creators'
interface UserState {
  transactions: Transaction[]
  filteredTransactions: Transaction[]
  summaryPageFilters: {
    categoriesFilter: Record<keyof typeof TransactionCategories, boolean>
    dateMarkFilter: keyof typeof DateMarkFilterTime
  }
}

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    const transactions = localStorage.getItem('transactions')
    if (transactions?.length) {
      return {
        transactions: JSON.parse(transactions),
        filteredTransactions: [],
        summaryPageFilters: {
          dateMarkFilter: 'LAST_30_DAYS',
          categoriesFilter: {
            RENT: true,
            UTILITIES: true,
            FOOD: true,
            TRANSPORT: true,
            HEALTH: true,
            SHOPPING: true,
            ENTERTAINMENT: true,
            SAVINGS: true,
            DEBT: true,
            SALARY: true,
            SIDE_HUSTLE: true,
            OTHER: true,
          },
        },
      }
    }
    return {
      transactions: [],
      filteredTransactions: [],
      summaryPageFilters: {
        dateMarkFilter: 'LAST_30_DAYS',
        categoriesFilter: {
          RENT: true,
          UTILITIES: true,
          FOOD: true,
          TRANSPORT: true,
          HEALTH: true,
          SHOPPING: true,
          ENTERTAINMENT: true,
          SAVINGS: true,
          DEBT: true,
          SALARY: true,
          SIDE_HUSTLE: true,
          OTHER: true,
        },
      },
    }
  },
  getters: {
    getSummaryCalculations(state) {
      const filteredTransactions = state.transactions.filter((transaction) => {
        const allTime = DateMarkFilterTime[state.summaryPageFilters.dateMarkFilter] === 0
        const dateMark = allTime ? 0 :  Date.now() - DateMarkFilterTime[state.summaryPageFilters.dateMarkFilter]
        const dateFilter = new Date(transaction.date).getTime() >= dateMark
        const categoryFilter = state.summaryPageFilters.categoriesFilter[transaction.category]
        return dateFilter && categoryFilter
      })
      const summaryAmountMap = filteredTransactions.reduce(
        (acc, { type, amount }) => {
          if (!acc[type]) acc[type] = 0
          acc[type] += amount
          return acc
        },
        {'EXPENSE':0, 'INCOME':0} as Record<Transaction['type'], number>,
      )
      
      const balance = summaryAmountMap.INCOME - summaryAmountMap.EXPENSE

      return {
        income: {
          value: summaryAmountMap.INCOME,
          category: '',
        },
        expenses: {
          value: summaryAmountMap.EXPENSE,
          category: '',
        },
        balance: {
          value: balance,
          category: '',
        },
      }
    },
    getCategoryFilter(state) {
      return Object.keys(state.summaryPageFilters.categoriesFilter) as Array<
        keyof typeof TransactionCategories
      >
    },
    getTableTransactions(state) {
      const orderedTransactions = state.transactions.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
      return orderedTransactions
    },
  },
  actions: {
    async addTransaction(args: NewTransactionValues) {
      const newTransaction = createTransaction(args)
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
