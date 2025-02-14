<template>
  <nav class="sidebar h-[80vh] sticky top-0 bg-teal-950/45 text-white w-64 rounded shadow-xl">
    <p class="text-2xl text-center py-4">FinBal</p>
    <ul>
      <router-link :to="route.path" v-for="route in dashboardRoutes" :key="route.path">
        <li
          class="h-16 px-4 text-xl hover:bg-teal-500 duration-300 transform ease-in-out cursor-pointer flex items-center gap-4 bg-white/15 border-b border-white/10"
        >
          <component :is="route.meta.icon" class="w-6 h-6" />
          {{ route.name }}
        </li>
      </router-link>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { dashboardRoutes } from '@/router'

</script>
