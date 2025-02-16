import { ref, computed, onUnmounted, onMounted } from 'vue'

export function useDeviceType(mobileBreakpoint = 768, desktopBreakpoint = 1024) {
  const width = ref(window.innerWidth)
  const updateWidth = () => {
    width.value = window.innerWidth
  }
  onMounted(() => {
    window.addEventListener('resize', updateWidth)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  const isMobile = computed(() => width.value < mobileBreakpoint)
  const isDesktop = computed(() => width.value >= desktopBreakpoint)
  return { isMobile, isDesktop, width }
}
