<template>
  <div class="flex flex-col justify-between w-80 min-h-[22rem] rounded-2xl bg-white p-4 shadow-xl gap-4">
    <p class="text-2xl text-teal-500">{{ dynamicAuthObj.switchText }}</p>
    <div class="flex flex-col gap-4">
      <BaseInput
        v-if="props.authType === 'register'"
        v-model="authForm.name"
        placeholder="First Name"
        label="First Name"
      />
      <BaseInput v-if="props.authType === 'register'" v-model="authForm.surname" placeholder="Last Name" label='Last Name' />
      <BaseInput v-model="authForm.email" type="email" placeholder="Email" label="Email" />
      <BaseInput v-model="authForm.password" type="password" placeholder="Password" label="Password"/>
    </div>
    <div class="flex flex-col gap-4">
      <BaseButton
        @click="submitForm"
        class="w-full"
        :disabled="handleDisabled"
      >
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
import { useAuthStore } from '@/stores/auth'
const router = useRouter()
const authStore = useAuthStore()
interface AuthViewProps {
  authType: 'login' | 'register'
}
const props = defineProps<AuthViewProps>()

const authForm = reactive({
  email: '',
  password: '',
  name: '',
  surname: '',
})
const submitForm = () => {
  if (props.authType === 'login') {
    authStore.login(authForm.email, authForm.password)
    return
  }
  authStore.register({
    email: authForm.email,
    password: authForm.password,
    name: authForm.name,
    surname: authForm.surname,
  })
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
  authForm.email = ''
  authForm.password = ''
  authForm.name = ''
  authForm.surname = ''
  router.push(`/auth/${dynamicAuthObj.value.switchType}`)
}
const handleDisabled = computed(() => {
  if (props.authType === 'login') {
    return !authForm.email || !authForm.password
  }
  return !authForm.email || !authForm.password || !authForm.name || !authForm.surname
})
</script>
