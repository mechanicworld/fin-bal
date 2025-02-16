<template>
  <div class="relative flex flex-col gap-4">
    <div class="flex justify-end items-center mb-4 gap-2">
      <BaseButton variant="primary" @click="showAddTransactionModal = true">
        <template #left-icon>
          <PlusIcon class="w-5 h-5" />
        </template>
        New Transaction</BaseButton
      >
      <BaseButton variant="secondary" @click="handleSeedData">
        <template #left-icon>
          <PlusIcon class="w-5 h-5" />
        </template>
        Add Seed Data</BaseButton
      >
    </div>
    <TransactionTable />
    <AddTransactionModal v-model="showAddTransactionModal" />

  </div>
</template>
<script setup lang="ts">
import TransactionTable from '@/components/TransactionTable.vue'
import { useUserStore } from '@/stores'
import BaseButton from '@/components/ui/BaseButton.vue'
import { seedTransactionData } from '@/utils/creators'
import { ref } from 'vue'
import AddTransactionModal from '@/components/AddTransactionModal.vue'
import PlusIcon from '@/assets/icons/plus-icon.svg'

const userStore = useUserStore()
const showAddTransactionModal = ref(false)

const handleSeedData = (() => {
  const mockTransactions = seedTransactionData()
  mockTransactions.forEach((transaction) => {
    userStore.addTransaction(transaction)
  })
})
</script>
