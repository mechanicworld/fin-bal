<template>
  <nav class="sidebar h-[80vh] sticky top-0 bg-gray-800 text-white w-40">
    SideBar
    <ul>
      <li v-for="route in dashboardRoutes" :key="route.path">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { dashboardRoutes } from '@/router'
</script>
