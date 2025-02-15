<template>
  <div v-if='toastStore.toasts.length' ref="toastContainer"  class="absolute top-0 right-0 p-4 flex flex-col items-center gap-4 h-screen overflow-hidden">
    <div v-for="toast in toastStore.toasts" :key="toast.id" class=" min-h-24 w-64 shadow-xl rounded-lg p-4 border-2 flex bg-white "
    :class="toastClass.container[toast.type]">
    <div class="flex flex-col flex-1 gap-2">
      <div class="w-fit font-bold " :class="toastClass.title[toast.type]" >
        {{toast.type}}     
      </div>      
      <div class="text-sm ">
        {{ toast.message }}
      </div>   
    </div>
    <div class="flex items-center justify-center">
      <CancelIcon class="w-6 h-6 cursor-pointer" @click="toastStore.removeMessage(toast.id)" />
    </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useToastStore } from '@/stores/toast';
import { computed, ref } from 'vue';
import CancelIcon from '@/assets/icons/cancel-icon.svg';
const toastStore = useToastStore();
const toastContainer = ref<HTMLDivElement | null>(null)



const toastClass = computed(() => {
  return{
    container:{
      warning: 'border-yellow-300',
      error: ' border-rose-300 bg-rose-100',
      success: 'border-green-300',
      info: ' border-blue-30'
    },
    title: {
      warning: 'text-yellow-500 ',
      error: 'text-rose-500 ',
      success: 'text-green-500 ',
      info: 'text-blue-500 '
    }
  }
})

</script>
