import {defineStore} from 'pinia'

interface SettingsState {
  darkMode: boolean
  currency: 'USD' | 'TL'
}


export const useSettingsStore = defineStore('settings', {
  state:():SettingsState => ({
    darkMode: false,
    currency: 'USD'
  }),
  getters:{
    isDarkMode: (state) => state.darkMode,
    currency: (state) => state.currency
  },
  actions:{
    toggleDarkMode(){
      this.darkMode = !this.darkMode
    },
    setCurrency(currency: 'USD' | 'TL'){
      this.currency = currency
    }
  }
})