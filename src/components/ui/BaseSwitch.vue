<template>
  <div>
    <input type="checkbox" @change="handleSelect" :checked="props.modelValue" />
  </div>
</template>

<script setup lang="ts">
interface BaseSwitchProps {
  modelValue: boolean
}
const props = withDefaults(defineProps<BaseSwitchProps>(), {
  modelValue: false,
})
const emit = defineEmits<{
  'update:modelValue': [boolean]
}>()
const handleSelect = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>
