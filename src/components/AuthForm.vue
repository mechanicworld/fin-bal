<template>
  <div class="flex flex-col justify-between w-80 h-[22rem] rounded-2xl bg-white p-4 shadow-xl">
    <p class="text-2xl text-teal-500">{{ dynamicAuthObj.switchText }}</p>
    <div class="flex flex-col gap-4">
      <BaseInput v-model="authForm.email" type="email" placeholder="Email" />
      <BaseInput v-model="authForm.password" type="password" placeholder="Password" />
    </div>
    <div class="flex flex-col gap-4">
      <BaseButton @click="submitForm" class="w-full" :disabled="!authForm.email || !authForm.password">
        {{ dynamicAuthObj.switchText }}
      </BaseButton>
      <p class="text-teal-700 cursor-pointer hover:text-teal-800" @click="handleRedirect">
        {{ dynamicAuthObj.switchLinkValue }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const router = useRouter()
interface AuthViewProps {
  authType: 'login' | 'register'
}
const props = defineProps<AuthViewProps>()

const authForm = reactive({
  email: '',
  password: '',
})
const submitForm = () => {
  console.log(authForm)
  router.push('/dashboard')
}

const dynamicAuthObj = computed(() => {
  return {
    switchLinkValue:
      props.authType === 'login' ? "Don't have an account?" : 'Already have an account?',
    switchText: props.authType === 'login' ? 'Login' : 'Register',
    switchType: props.authType === 'login' ? 'register' : 'login',
  }
})
const handleRedirect = () => {
  router.push(`/auth/${dynamicAuthObj.value.switchType}`)
}
</script>
