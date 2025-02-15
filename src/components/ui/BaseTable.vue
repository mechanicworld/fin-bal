<template>
  <div class="w-full overflow-auto max-h-[30rem]">
    <table class="w-full bg-white rounded-lg h-60 relative border-collapse ">
      <thead >
        <tr >
          <th v-for="column in columns" :key="column.key" class="min-w-30 h-16 font-bold text-lg !sticky !top-0 bg-teal-500 text-white ">
            {{ column.label }}
          </th>
          <th class="min-w-30 h-16 font-bold text-lg !sticky !top-0  bg-teal-500 text-white">Actions</th>
        </tr>
      </thead>
      <tbody class="rounded-lg">
        <tr v-if="!data.length">
          <td :colspan="columns.length">
            {{ props.noDataText }}
          </td>
        </tr>
        <tr
          v-else
          v-for="(row, i) in data"
          :key="i"
          class="border-b border-teal-400 even:bg-white odd:bg-gray-200"
        >
          <td v-for="each in columns" :key="each.key" class="text-center h-14">
            <p>{{ row[each.key] }}</p>
          </td>
          <td class="flex justify-center gap-2 h-14">
            <slot name="actions" :row="row"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts" generic="T">
type BaseTableProps<T = unknown> = {
  data: Record<string, T>[]
  columns: { label: string; key: string }[]
  noDataText?: string
}
const props = withDefaults(defineProps<BaseTableProps>(), {
  noDataText: 'No data available',
})
</script>
