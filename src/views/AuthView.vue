<template>
  <div class="flex justify-center items-center h-screen">
    <AuthForm :authType="props.authType" />
  </div>
</template>
<script lang="ts" setup>
import AuthForm from '@/components/AuthForm.vue'

interface AuthViewProps {
  authType: 'login' | 'register'
}
const props = defineProps<AuthViewProps>()
</script>
