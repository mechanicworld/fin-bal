<template>
  <div class="flex flex-col gap-4">
    <div id="filters" class="flex flex-col gap-4">
      <p class="text-2xl font-bold">Filters</p>
      <div class="flex gap-4 w-fit bg-white/30 p-4 rounded-lg">
        <BaseSelect
          v-model="userStore.summaryPageFilters.dateMarkFilter"
          :options="DateFilterOptions"
          label="Date Filter"
          size="sm"
        />
        <MultipleCategoryFilter direction="horizontal" />
      </div>
    </div>
    <div id="summary-charts" class="w-full flex gap-4 h-full">
      <div class="flex flex-col bg-white/30 gap-4 p-4 rounded-lg h-fit">
        <SummaryCalculationCard
          title="Total Income"
          :value="userStore.getSummaryCalculations.income.value"
          variant="success"
          valueType="currency"
          :description="DateMarkFilterLabel[userStore.summaryPageFilters.dateMarkFilter]"
        />
        <SummaryCalculationCard
          title="Total Expense"
          :value="userStore.getSummaryCalculations.expenses.value"
          variant="danger"
          valueType="currency"
          :description="DateMarkFilterLabel[userStore.summaryPageFilters.dateMarkFilter]"
        />
        <SummaryCalculationCard
          title="Total Balance"
          :value="userStore.getSummaryCalculations.balance.value"
          variant="info"
          valueType="currency"
          :description="DateMarkFilterLabel[userStore.summaryPageFilters.dateMarkFilter]"
        />
      </div>
      <div class="grid   xl:grid-cols-2 2xl:grid-cols-3 grid-cols-1 flex-1 bg-white/30 gap-4 p-4 rounded-lg">
        <div class="">
          <Bar
            :data="{
              labels: ['January', 'February', 'March'],
              datasets: [
                {
                  type: 'bar',
                  label: 'Bar Dataset',
                  data: [10, 20, 30, 40],
                },
                {
                  type: 'bar',
                  label: 'Line Dataset',
                  data: [50, 50, 50, 50],
                },
              ],
            }"
            :options="{
              maintainAspectRatio: false,
            }"
          />
        </div>
        <div class="">
          <Doughnut
            :data="{
              labels: ['Income', 'Expense', 'Balance'],
              datasets: [              
                {
                  data: [
                    userStore.getSummaryCalculations.income.value,
                    userStore.getSummaryCalculations.expenses.value,
                    userStore.getSummaryCalculations.balance.value,
                  ],
                  backgroundColor: ['oklch(0.792 0.209 151.711)', 'oklch(0.712 0.194 13.428)', 'oklch(0.852 0.199 91.936)'],
                },
              ],
            }"
            :options="{
              responsive: true,              
              maintainAspectRatio: false,
            }"
          />
        </div>
        <div class="">
          <PolarArea
            :data="{
              labels: ['January', 'February', 'March'],
              datasets: [{ data: [40, 20, 12] }],
            }"
            :options="{
              responsive: true,              
              maintainAspectRatio: false,
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import MultipleCategoryFilter from '@/components/MultipleCategoryFilter.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import SummaryCalculationCard from '@/components/SummaryCalculationCard.vue'
import { DateFilterOptions, DateMarkFilterLabel } from '@/constants'
import { useUserStore } from '@/stores'
import { onMounted } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  RadialLinearScale,
} from 'chart.js'
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  RadialLinearScale,
)
import { Bar, Doughnut, PolarArea } from 'vue-chartjs'
const userStore = useUserStore()

onMounted(() => {
  // userStore.fetchSummaryData();
})
</script>
