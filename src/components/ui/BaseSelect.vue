<template>
  <div class="relative flex flex-col gap-2" :class="[fluid ? 'w-full' : 'min-w-50']">
    <label class="font-semibold">{{ label }}</label>
    <div
      class="h-12 border border-gray-300 rounded-lg px-4 py-2 bg-white cursor-pointer flex justify-between items-center"
      @click="isOpen = !isOpen"
    >
      <span>{{ selectedOption }}</span>
      <ChevronDownIcon class="w-6 h-6 text-gray-500" />
    </div>
    <ul
      v-if="isOpen"
      class="absolute w-full bg-white border border-gray-300 rounded-lg shadow-md z-10"
    >
      <li
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        class="px-4 py-2 h-12 cursor-pointer hover:bg-gray-200 transition"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg'
interface Option {
  label: string
  value: string | number
}
interface BaseSelectProps {
  modelValue: string | number
  options: Option[]
  placeholder?: string
  label: string
  fluid: boolean
}
const props = withDefaults(defineProps<BaseSelectProps>(), {
  placeholder: 'Select an option',
  fluid: false,
})

const emit = defineEmits(['update:modelValue'])
const isOpen = ref(false)

const selectedOption = computed(() => {
  return props.options.find((opt) => opt.value === props.modelValue)?.label || props.placeholder
})

const selectOption = (option: Option) => {
  emit('update:modelValue', option.value)
  isOpen.value = false
}
</script>
