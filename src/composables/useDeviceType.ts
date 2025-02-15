import { ref, computed, onUnmounted, onMounted } from 'vue'

export function useDeviceType(mobileBreakpoint = 768) {
  const width = ref(window.innerWidth)

  onMounted(() => {
    window.addEventListener('resize', () => {
      width.value = window.innerWidth
    })
  })
  onUnmounted(() => {
    window.removeEventListener('resize', () => {
      width.value = window.innerWidth
    })
  })
  const isMobile = computed(() => width.value < mobileBreakpoint)
  const isDesktop = computed(() => width.value >= mobileBreakpoint)
  return { isMobile, isDesktop }
}
