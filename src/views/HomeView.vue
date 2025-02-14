<template>
  <main class="container mx-auto flex flex-col items-center justify-center h-screen gap-14">
    <div class="flex items-center gap-4">
      <div>
        <p class="text-teal-950 text-9xl">
          Fin<span class="text-teal-300 text-9xl animate-hide-seek-reverse">ance</span>
        </p>
        <p class="text-teal-950 text-9xl">
          Bal<span class="text-teal-300 text-9xl animate-hide-seek">ance</span>
        </p>
      </div>
      <div>
        <span class="text-teal-300 text-9xl">&</span>
      </div>
    </div>
    <BaseDivider />
    <div class="flex flex-col items-center gap-14 ">
      <h1 class="text-3xl">Welcome to your Personal Finance Tracker</h1>
      <BaseButton variant="primary" size="lg" @click="() => $router.push('/auth/login')">
        Get Started
        <template #right-icon="{ iconClasses }">
          <ArrowRight :class="iconClasses" />
        </template>
      </BaseButton>
    </div>
  </main>
</template>
<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import BaseDivider from '@/components/ui/BaseDivider.vue'
</script>
