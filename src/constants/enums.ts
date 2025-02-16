export enum TransactionType {
  INCOME = 1,
  EXPENSE = -1,
}

export enum TransactionCategories {
  RENT = "Rent",
  UTILITIES = "Utilities",
  FOOD = "Food",
  TRANSPORT = "Transport",
  HEALTH = "Health",
  SHOPPING = "Shopping",
  ENTERTAINMENT = "Entertainment",
  SAVINGS = "Savings",
  DEBT = "Debt",
  SALARY = "Salary",
  SIDE_HUSTLE = "Side Hustle",
  OTHER = "Other",
}
export enum DateMarkFilterTime{
  LAST_7_DAYS = 7 * 24 * 60 * 60 * 1000,
  LAST_30_DAYS = 30 * 24 * 60 * 60 * 1000,
  LAST_60_DAYS = 60 * 24 * 60 * 60 * 1000,
  LAST_90_DAYS = 90 * 24 * 60 * 60 * 1000,
  LAST_365_DAYS = 365 * 24 * 60 * 60 * 1000,
  ALL_TIME = 0,
}
export enum DateMarkFilterLabel {
  LAST_7_DAYS = "Last 7 Days",
  LAST_30_DAYS = "Last 30 Days",
  LAST_60_DAYS = "Last 60 Days",
  LAST_90_DAYS = "Last 90 Days",
  LAST_365_DAYS = "Last 365 Days",
  ALL_TIME = "All Time",
}
export enum ConfirmDialogMessages {
  DELETE_TRANSACTION = "Are you sure you want to delete this transaction?",
}