<template>
  <BaseModal v-model="isOpen" hideCloseButton :title="title" bodyContentClass="!h-fit" model-custom-class="!h-fit">
    <p class="text-center">{{ message }}</p>
    <template #footer>
      <BaseButton @click="handleConfirm" variant="danger">Confirm</BaseButton>
      <BaseButton variant="secondary" @click="closeModal">Cancel</BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/ui/BaseModal.vue'
import BaseButton, { type ButtonProps } from '@/components/ui/BaseButton.vue'
import { ref } from 'vue'

type ConfirmModalProps = {
  message: string
  confirm?: ButtonProps['variant']
  cancel?: ButtonProps['variant']
  title?: string
}
const isOpen = ref(false)

withDefaults(defineProps<ConfirmModalProps>(), {
  message: 'Are you sure you want to delete this transaction?',
  confirm: 'primary',
  cancel: 'secondary',
  title: 'Confirm',
})
const emit = defineEmits<{
  confirmModal: [boolean]
}>()
const openModal = () => {
  isOpen.value = true
}
const closeModal = () => {
  isOpen.value = false
  emit('confirmModal', false)
}
const handleConfirm = () => {
  emit('confirmModal', true)
  isOpen.value = false
}
defineExpose({
  openModal,
})
</script>
