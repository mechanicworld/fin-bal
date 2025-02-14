<template>
  <div :class="dividerClasses"></div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

interface BaseDividerProps {
  direction?: 'horizontal' | 'vertical'
  variant?: 'solid' | 'dashed' | 'dotted'
  color?: 'primary' | 'secondary'
}
const props = withDefaults(defineProps<BaseDividerProps>(), {
  direction: 'horizontal',
  variant: 'solid',
  color: 'primary',
})

const dividerClasses = computed(() => {
  const classes = {
    'border': true,
    'w-full': props.direction === 'horizontal',
    'h-full': props.direction === 'vertical',
    'border-solid': props.variant === 'solid',
    'border-dashed': props.variant === 'dashed',
    'border-dotted': props.variant === 'dotted',
    'border-teal-500': props.color === 'primary',
    'border-gray-300': props.color === 'secondary',
  }
  return classes
})
</script>
