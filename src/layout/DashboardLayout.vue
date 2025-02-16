<template>
  <div class=" w-full py-8">
    <div class=" w-full flex gap-4 px-4 m-auto">
      <AppSidebar />
      <div class="flex-1 bg-teal-500/20 p-4 rounded-lg min-h-[80vh] overflow-auto">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
</script>
