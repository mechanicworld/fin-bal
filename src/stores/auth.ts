import { AuthService } from '@/services'
import { defineStore } from 'pinia'
import { useToastStore } from '@/stores'
import { getFromLocalStorage } from '@/utils/helpers'

interface AuthState {
  isAuthenticated: boolean
  user: {
    name: string
    surname: string
    email: string
  }
}
export const useAuthStore = defineStore('auth', {
  state: (): AuthState => {
    const storedData = getFromLocalStorage('currentUser')
    if (storedData && storedData.email && storedData.name && storedData.surname) {
      return {
        isAuthenticated: true,
        user: storedData,
      }
    }
    return {
      isAuthenticated: false,
      user: {
        name: '',
        surname: '',
        email: '',
      },
    }
  },
  getters: {
    getIsAuthenticated: (state) => state.isAuthenticated,
    getUser: (state) => state.user,
    getUserTile: (state) =>
      `${state.user?.name?.slice(0, 1).toLocaleUpperCase()}${state.user?.surname?.slice(0, 1).toLocaleUpperCase()}`,
  },
  actions: {
    async login(email: string, password: string) {
      const toastStore = useToastStore()
      try {
        const response = await AuthService.login(email, password)
        if (response.success) {
          this.user = response.data || { name: '', surname: '', email: '' }
          this.isAuthenticated = true
          toastStore.addMessage({ type: 'success', message: response.message || '' })
          localStorage.setItem('currentUser', JSON.stringify(response.data))
          this.router.push('/dashboard')
        }
      } catch (e) {
        toastStore.addMessage({ type: 'error', message: (e as Error).message })
        console.error(e)
      }
    },
    async register(user: { email: string; name: string; surname: string; password: string }) {
      const toastStore = useToastStore()
      try {
        const response = await AuthService.register(user)
        if (response.success) {
          toastStore.addMessage({ type: 'success', message: response.message || '' })
          this.login(user.email, user.password)
        }
      } catch (e) {
        toastStore.addMessage({ type: 'error', message: (e as Error).message })
        console.error(e)
      }
    },
    logout() {
      this.$patch({
        isAuthenticated: false,
        user: {
          name: '',
          surname: '',
          email: '',
        },
      })
      localStorage.removeItem('currentUser')
      this.router.push('/')
    },
  },
})
