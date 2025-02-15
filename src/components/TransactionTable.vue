<template>
  <BaseTable
    :data="userStore.transactions"
    :columns="columns"
    noDataText="No transactions available"
  >
    <template #actions="slotProps">
      <BaseButton size="sm" @click="handleDeleteTransaction(slotProps.row.id)" variant="danger"
        >Delete</BaseButton
      >
    </template>
  </BaseTable>
</template>

<script setup lang="ts">
import { TransactionTableHeaders } from '@/constants'
import BaseTable from './ui/BaseTable.vue'
import { useUserStore } from '@/stores'
import BaseButton from '@/components/ui/BaseButton.vue'
const userStore = useUserStore()
const columns = [...TransactionTableHeaders]

const handleDeleteTransaction = (id: string) => {
  userStore.deleteTransaction(id)
}
</script>
