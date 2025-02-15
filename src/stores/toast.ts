import { defineStore } from 'pinia'

interface ToastMessage {
  id: number
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
}
interface ToastStore {
  toasts: ToastMessage[]
  autoRemove: boolean
}
export const useToastStore = defineStore('toast', {
  state: (): ToastStore => ({
    toasts: [],
    autoRemove: true,
  }),
  getters: {
    getToasts(): ToastMessage[] {
      return this.toasts
    },
    toastListLength(): number {
      return this.toasts.length
    },
  },
  actions: {
    addMessage(message: Omit<ToastMessage, 'id'>) {
      const newMessage: ToastMessage = {
        id: Date.now() + Math.random(),
        ...message,
      }
      this.toasts.push(newMessage)
    },
    removeMessage(id: number) {
      this.toasts = this.toasts.filter((message) => message.id !== id)
    },
  shiftMessage(){
    this.toasts.shift()
  }

  },
})
