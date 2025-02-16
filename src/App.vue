<template>
  <main
    class=" min-h-screen flex justify-center items-center relative "
    :class="darkModeClass"
  >
    <div v-if="false" class="absolute top-0 right-0 p-4">
      <DarkModeSwitch />
    </div>
    <AppToast />
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useSettingsStore } from '@/stores'
import DarkModeSwitch from './components/DarkModeSwitch.vue'
import { computed } from 'vue'
import AppToast from './components/AppToast.vue'
const setingsStore = useSettingsStore()

const darkModeClass = computed(() => {
  return setingsStore.isDarkMode ? '!bg-gray-900' : '!bg-teal-100'
})
</script>
<style scoped></style>
