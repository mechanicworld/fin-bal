<template>
  <nav
    class="h-[80vh] sticky top-8 text-white rounded shadow-xl flex flex-col shrink-0"
    :class="[darkModeClasses.background, miniSidebar ? 'w-16' : 'w-64']"
  >
    <div class="flex p-4" :class="[miniSidebar ? 'justify-center' : 'justify-end']">
      <BaseButton @click="toggleSidebar" size="sm">
        <SidebarToggleIcon class="w-6 min-w-6" />
      </BaseButton>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex items-center justify-center pb-4">
        <div
          class="rounded-full bg-gray-800 flex items-center justify-center"
          :class="[miniSidebar ? 'w-12 h-12' : 'w-20 h-20 ']"
        >
          <p :class="[miniSidebar ? 'text-sm' : 'text-xl']">{{ authStore.getUserTile }}</p>
        </div>
        <div class="text-lg bg-gray-900"></div>
      </div>
      <ul>
        <router-link :to="route.path" v-for="route in dashboardRoutes" :key="route.path">
          <li
            class="py-4 px-4 cursor-pointer flex items-center gap-4 h-12 text-lg"
            :class="darkModeClasses.subMenuItem"
          >
            <component :key="route.name" :is="route.meta.icon" class="w-6 min-w-6" />

            <p v-show="!miniSidebar">
              {{ route.name }}
            </p>
          </li>
        </router-link>
      </ul>
    </div>
    <div class="flex p-4" :class="[miniSidebar ? 'justify-center' : 'justify-end']">
      <BaseButton @click="handleLogout" size="sm">
        <LogoutIcon class="w-6 min-w-6" />
      </BaseButton>
    </div>
  </nav>
</template>
<script setup lang="ts">
import router, { dashboardRoutes } from '@/router'
import { computed, ref, watchEffect } from 'vue'
import { useSettingsStore, useAuthStore } from '@/stores'
import BaseButton from './ui/BaseButton.vue'
import SidebarToggleIcon from '@/assets/icons/sidebar-toggle.svg'
import LogoutIcon from '@/assets/icons/logout.svg'
import { useDeviceType } from '@/composables'
const settingsStore = useSettingsStore()
const authStore = useAuthStore()
const useDevice = useDeviceType()
const miniSidebar = ref(false)
const toggleSidebar = () => {
  miniSidebar.value = !miniSidebar.value
}
watchEffect(() => {
  miniSidebar.value = !useDevice.isDesktop.value
})
const darkModeClasses = computed(() => {
  return {
    background: settingsStore.isDarkMode ? 'bg-teal-100/15' : 'bg-teal-800',
    subMenuItem: settingsStore.isDarkMode
      ? 'hover:bg-teal-500  bg-gray-900/15 border-b border-white/10'
      : 'hover:bg-teal-500  bg-white/15 border-b border-white/10',
  }
})
const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>
