<template>
  <div class="flex justify-center items-center h-screen">
    <p class="text-4xl text-teal-500">
      We couldn't find what you were looking for redirecting home...
    </p>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/')
  }, 3000)
})
</script>
