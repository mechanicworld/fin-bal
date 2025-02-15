<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      id="modal-background"
      class="fixed inset-0 bg-black/50 flex justify-center items-center"
    >
      <div id="modal" class="h-[80vh] md:w-[30rem] bg-white rounded-lg shadow-lg flex flex-col">
        <div id="modal-header" class="flex justify-between items-center p-4">
          <h2>{{ props.title }}</h2>
          <BaseButton variant="danger" @click="closeModal" size="sm">
            <CancelIcon class="w-5 h-5" />
          </BaseButton>
        </div>
        <div id="modal-body" class="overflow-auto w-full h-full p-8 flex-1">
          <slot></slot>
        </div>
        <div id="modal-footer" class="flex justify-end p-4">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import CancelIcon from '@/assets/icons/cancel-icon.svg'
interface BaseModalProps {
  title: string
  modelValue: boolean
}
const props = withDefaults(defineProps<BaseModalProps>(), {
  title: 'Modal Title',
})
const emit = defineEmits<{
  'update:modelValue': [boolean]
}>()
const closeModal = () => {
  emit('update:modelValue', false)
}
</script>
