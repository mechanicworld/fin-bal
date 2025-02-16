<template>
  <div class=" relative w-45 h-45 flex justify-center items-center rounded-lg bg-white shadow-lg" :class="cardClass">
    <div class="absolute top-2 left-2">
      <span class="text-sm text-gray-500">{{ title }}</span>
    </div>
    <div class="text-4xl flex gap-2">
      <span v-if="valueType==='percentage'">%</span>
      <span>{{ value }}</span>
      <span v-if="valueType==='currency'">TL</span>
    </div>
    <div class="absolute bottom-2 ">
      <span class="text-sm text-gray-500">{{ description }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

interface SummaryCardProps {
  title: string
  description: string
  value: number
  variant: 'info' | 'success' | 'danger' | 'warning'
  valueType: 'currency' | 'percentage'
  desripion?: string
}
const props = withDefaults(defineProps<SummaryCardProps>(), {
  variant: 'info',
  valueType: 'currency',
})
const cardClass = computed(() => {
  return {
    'text-green-400': props.variant === 'success',
    'text-rose-400': props.variant === 'danger',
    'text-yellow-400': props.variant === 'info',
  }
})

</script>
