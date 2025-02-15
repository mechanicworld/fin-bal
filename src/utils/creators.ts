import { type Transaction, type NewTransactionValues } from '@/constants'
import { isoDateFormatter } from './helpers'

export function createTransaction(args: NewTransactionValues): Transaction {
  return {
    id: randomIdGenerator(),
    currency: 'TL',
    ...args,
  }
}
export function seedTransactionData(): Transaction[] {
  return [
    createTransaction({
      description: 'My Salary',
      type: 'INCOME',
      amount: 1000,
      category: 'SALARY',
      date: randomDateGenerator(),
    }),
    createTransaction({
      description: 'Rent',
      type: 'EXPENSE',
      amount: 500,
      category: 'RENT',
      date: randomDateGenerator(),
    }),
    createTransaction({
      description: 'Groceries',
      type: 'EXPENSE',
      amount: randomAmountGenerator(),
      category: 'FOOD',
      date: randomDateGenerator(),
    }),
    createTransaction({
      description: 'Transportation',
      type: 'EXPENSE',
      amount: randomAmountGenerator(),
      category: 'TRANSPORT',
      date: randomDateGenerator(),
    }),
    createTransaction({
      description: 'Health',
      type: 'EXPENSE',
      amount: randomAmountGenerator(),
      category: 'HEALTH',
      date: randomDateGenerator(),
    }),
    createTransaction({
      description: 'Shopping',
      type: 'EXPENSE',
      amount: randomAmountGenerator(),
      category: 'SHOPPING',
      date: randomDateGenerator(),
    }),
    createTransaction({
      description: 'Entertainment',
      type: 'EXPENSE',
      amount: randomAmountGenerator(),
      category: 'ENTERTAINMENT',
      date: randomDateGenerator(),
    }),
    createTransaction({
      description: 'Savings',
      type: 'EXPENSE',
      amount: randomAmountGenerator(),
      category: 'SAVINGS',
      date: randomDateGenerator(),
    }),
  ]
}

export const randomIdGenerator = () => {
  return Math.random().toString(36).slice(2, 11)
}
export const randomAmountGenerator = () => {
  return Math.floor(Math.random() * 2500)
}
export const randomDateGenerator = () => {
  const start = new Date(2021, 0, 1)
  const end = new Date()
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  return isoDateFormatter(randomDate)
}
