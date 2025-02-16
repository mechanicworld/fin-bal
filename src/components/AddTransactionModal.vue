<template>
  <BaseModal v-model="isOpen" ref="modalRef" title="Add New Transaction">
    <div class="flex flex-col gap-4">
      <BaseInput v-model="formInputs.description" label="Description" />
      <div class="flex gap-4">
        <BaseInput v-model="formInputs.amount" type="number" label="Amount" />
        <BaseDatePicker v-model="formInputs.date" label="Date" />
      </div>
      <div class="flex gap-4">
        <BaseSelect
          v-model="formInputs.type"
          :options="SelectTransactionTypes"
          label="Type"
          fluid
        />
        <BaseSelect
          v-model="formInputs.category"
          :options="FilteredSelectTransactionCategories"
          label="Category"
          fluid
        />
      </div>
    </div>
    <template #footer>
      <BaseButton :disabled="handleAddDisable" @click="handleAddTransaction"
        >Add Transaction</BaseButton
      >
    </template>
  </BaseModal>
</template>
<script setup lang="ts">
import BaseModal from '@/components/ui/BaseModal.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import BaseDatePicker from './ui/BaseDatePicker.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import {
  type NewTransactionValues,
  SelectTransactionCategories,
  SelectTransactionTypes,
} from '@/constants'
import { computed, reactive, ref } from 'vue'
import { useUserStore } from '@/stores'

const userStore = useUserStore()
const formInputs = reactive<NewTransactionValues>({
  description: '',
  amount: 0,
  type: 'EXPENSE',
  category: 'FOOD',
  date: new Date().toISOString().split('T')[0],
})
const isOpen = ref<boolean>(false)
const modalRef = ref<InstanceType<typeof BaseModal> | null>(null)

const FilteredSelectTransactionCategories = computed(() => {
  return formInputs.type === 'EXPENSE'
    ? SelectTransactionCategories.EXPENSE
    : SelectTransactionCategories.INCOME
})

const handleAddDisable = computed(() => {
  return !formInputs.description || !formInputs.amount || !formInputs.date || !formInputs.category || !formInputs.type
})


function handleAddTransaction() {
  userStore.addTransaction(formInputs)
  modalRef.value?.closeModal()
}

</script>
