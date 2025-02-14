<template>
  <div class="h-screen w-screen px-4 py-16">
    <div class="flex ">
      <div class="">
        <AppSidebar />
      </div>
      <div class="flex-1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
</script>
