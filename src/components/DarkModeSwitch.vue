<template>
  <BaseSwitch v-model="store.darkMode" />
</template>

<script setup lang="ts">
import BaseSwitch from './ui/BaseSwitch.vue'
import { useSettingsStore } from '../stores/settings'
const store = useSettingsStore()
</script>
