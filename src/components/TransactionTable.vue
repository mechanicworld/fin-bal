<template>
  <BaseTable
    :data="userStore.getTableTransactions"
    :columns="columns"
    noDataText="No transactions available"
  >
    <template #actions="slotProps">
      <BaseButton size="sm" @click="handleDeleteTransaction(slotProps.row.id as string)" variant="danger"
        >Delete</BaseButton
      >
    </template>
  </BaseTable>
  <ConfirmModal ref="confirmDeleteModal" :message="ConfirmDialogMessages.DELETE_TRANSACTION" confirm="danger" @confirmModal="handleDeleteSelectedTransaction"  />
</template>

<script setup lang="ts">
import { TransactionTableHeaders } from '@/constants'
import BaseTable from './ui/BaseTable.vue'
import { useUserStore } from '@/stores'
import BaseButton from '@/components/ui/BaseButton.vue'
import ConfirmModal from '@/components/ConfirmModal.vue'
import { ConfirmDialogMessages } from '@/constants'
import { ref } from 'vue'
const confirmDeleteModal = ref<InstanceType<typeof ConfirmModal>>()
const userStore = useUserStore()
const columns = [...TransactionTableHeaders]
const selectedTransaction = ref<string | null>(null)
const handleDeleteTransaction = (id: string) => {
  selectedTransaction.value = id
  confirmDeleteModal?.value?.openModal() 
}
const handleDeleteSelectedTransaction = (isConfirmed: boolean) => {
  if (isConfirmed && selectedTransaction.value) {
    userStore.deleteTransaction(selectedTransaction.value)
    selectedTransaction.value = null
  }
}
</script>
