<template>
  <button :type="type" :class="buttonClasses" :disabled="props.disabled || props.loading">
    <svg v-if="loading" class="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24"></svg>
    <div v-else class="flex items-center justify-center gap-2 ">
      <slot name="left-icon" :iconClasses="iconClasses"></slot>
      <slot></slot>
      <slot name="right-icon" :iconClasses="iconClasses"></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
  disabled?: boolean
  loading?: boolean
}
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  size: 'md',
  variant: 'primary',
  block: false,
  disabled: false,
  loading: false,
})

const iconClasses = computed(() => {
  const classes = {
    'fill-white': props.variant === 'primary',
    'fill-gray-800': props.variant === 'secondary',
    'size-4': props.size === 'sm',
    'size-5': props.size === 'md',
    'size-6': props.size === 'lg',
  }
  return classes
})
const buttonClasses = computed(() => {
  const classes = {
    'rounded-lg font-semibold cursor-pointer h-fit': true,
    'flex items-center justify-center': props.loading,
    'opacity-50 !cursor-not-allowed ': props.disabled,
    'w-full': props.block,
    'bg-teal-500 text-white ': props.variant === 'primary',
    'bg-gray-300 text-gray-800  ': props.variant === 'secondary',
    'bg-rose-500 text-white ': props.variant === 'danger',
    'hover:bg-teal-700': props.variant === 'primary' && !props.disabled,
    'hover:bg-gray-500 hover:text-white': props.variant === 'secondary' && !props.disabled,
    'hover:bg-rose-700': props.variant === 'danger' && !props.disabled,
    'px-4 py-2 text-sm ': props.size === 'sm',
    'px-6 py-3 ': props.size === 'md',
    'px-8 py-4 text-lg': props.size === 'lg',
  }
  return classes
})
</script>
