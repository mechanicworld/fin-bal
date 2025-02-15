export const TransactionTableHeaders = [
  { label: 'Date', key: 'date' },
  { label: 'Amount', key: 'amount' },
  { label: 'Currency', key: 'currency' },
  { label: 'Type', key: 'type' },
  { label: 'Category', key: 'category' },
  { label: 'Description', key: 'description' },
] as const

export const SelectTransactionTypes = [
  { label: 'Expense', value: 'EXPENSE' },
  { label: 'Income', value: 'INCOME' },
]
export const SelectTransactionCategories = {
  EXPENSE: [
    { label: 'Rent', value: 'RENT' },
    { label: 'Utilities', value: 'UTILITIES' },
    { label: 'Food', value: 'FOOD' },
    { label: 'Transport', value: 'TRANSPORT' },
    { label: 'Health', value: 'HEALTH' },
    { label: 'Shopping', value: 'SHOPPING' },
    { label: 'Entertainment', value: 'ENTERTAINMENT' },
    { label: 'Savings', value: 'SAVINGS' },
    { label: 'Debt', value: 'DEBT' },
    { label: 'Other', value: 'OTHER' },
  ],
  INCOME: [
    { label: 'Salary', value: 'SALARY' },
    { label: 'Side Hustle', value: 'SIDE_HUSTLE' },
    { label: 'Other', value: 'OTHER' },
  ],
}
