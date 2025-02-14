<template>
  <component :is="props.icon" />
</template>
<script setup lang="ts">

interface SVGProps {
  fill?: string
  height?: string
  width?: string
  icon: object
}
const props = defineProps<SVGProps>()
</script>