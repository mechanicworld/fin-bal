<template>
  <div class="flex flex-col gap-2 ">
    <label class="font-semibold">Category Filter</label>
    <div class="flex" :class="filterContainerClass">
      <BaseSwitch
        v-model="userStore.summaryPageFilters.categoriesFilter[category]"
        v-for="category in userStore.getCategoryFilter"
        :key="category"
        :label="TransactionCategories[category]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseSwitch from './ui/BaseSwitch.vue'
import { useUserStore } from '@/stores'
import { TransactionCategories } from '@/constants'
const userStore = useUserStore()
interface MultipleCategoryFilterProps {
  direction?: 'horizontal' | 'vertical'
  transactionType?: 'expense' | 'income' | 'all'
}
const props = withDefaults(defineProps<MultipleCategoryFilterProps>(), {
  direction: 'vertical',
  transactionType:'all'
})

const filterContainerClass = computed(() => {
  return {
    'flex-wrap gap-2': props.direction === 'horizontal',
    'flex-col gap-2': props.direction === 'vertical',
  }
})

</script>
