<template>
  <div class="flex h-12 border border-gray-300 rounded-lg">
    <input
      :modelValue="modelValue"
      @input="handleInput"
      :type="type === 'password' && showPassword ? 'text' : type"
      class="flex-1"
      :class="inputClasses"
      :placeholder="props.placeholder"
    />
    <div
      v-if="props.type === 'password'"
      class="rounded-r-md w-12 h-12 flex items-center justify-center bg-teal-700"
    >
      <button @click="showPassword = !showPassword"  class="rounded-r-md w-12 h-12 flex items-center justify-center bg-teal-700">
        <component :is="!showPassword ? Eye : EyeSlash" />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import EyeSlash from '@/assets/icons/eye-slash.svg'
import Eye from '@/assets/icons/eye.svg'
interface BaseInputProps {
  modelValue: string
  type: 'text' | 'password' | 'email' | 'number'
  placeholder?: string
}
const props = withDefaults(defineProps<BaseInputProps>(), {
  type: 'text',
})
const emit = defineEmits<{
  'update:modelValue': [string]
}>()
const showPassword = ref(false)

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target?.value)
}

const inputClasses = computed(() => {
  return {
    'focus:outline-none': true,
    'focus:border-tale-500': true,
    'focus:rounded-md': true,
    'p-2': true,
  }
})
</script>
