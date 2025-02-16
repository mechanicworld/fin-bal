<template>
  <label class="flex items-center cursor-pointer gap-1 min-w-fit">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="handleCheck"
      class="sr-only"
    />
    <div
      class="relative inline-block w-10 h-6 bg-gray-300 rounded-full transition-colors duration-300"
      :class="[{ 'bg-teal-500': modelValue }, switchClasses.container]"
    >
      <div
        class="absolute left-1 top-1 bg-white rounded-full transition-transform duration-300 " 
        :class="[{ 'translate-x-4': modelValue }, switchClasses.ball]"
      ></div>
    </div>
    <span class="ml-3 text-gray-700" :class="switchClasses.label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import {computed} from 'vue'
interface BaseSwitchProps {
  modelValue: boolean
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<BaseSwitchProps>(), {
  size: 'md',
})
const emit = defineEmits<{ 'update:modelValue': [boolean] }>();
const handleCheck = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).checked);
};

const switchClasses = computed(() => {
  return {
    container:{
      'w-6 h-3': props.size === 'sm',
      'w-10 h-6': props.size === 'md',
      'w-14 h-8': props.size === 'lg',
    },
    ball:{
      'w-2 h-2': props.size === 'sm',
      'w-4 h-4': props.size === 'md',
      'w-6 h-6': props.size === 'lg',
    },
    label:{
      'text-sm': props.size === 'sm',
      'text-base': props.size === 'md',
      'text-lg': props.size === 'lg',
    }

  };
});
</script>
