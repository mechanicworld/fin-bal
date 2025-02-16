<template>
  <div class="flex flex-col gap-2 w-full">
    <label class=" font-semibold">{{ label }}</label>
    <input
      :value="modelValue"
      @change="handleDateSelect"
      type="date"
      class="w-full h-12 border border-gray-300 rounded-lg px-4 focus:outline-none  focus:rounded-md"
      :max="new Date().toISOString().split('T')[0]"
    />
  </div>
</template>
<script setup lang="ts">
interface BaseDatePickerProps {
  modelValue: string
  label: string
}
withDefaults(defineProps<BaseDatePickerProps>(), {
  modelValue: '',
})
const emit = defineEmits<{
  'update:modelValue': [string]
}>()
const handleDateSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target?.value)
}
</script>
