<template>
  <div>
    <div class="container-fluid">
      <AppSidebar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
</script>
