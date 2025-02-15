import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardLayout from '../layout/DashboardLayout.vue'
import SummaryIcon from '../assets/icons/summary-icon.svg'
import AnalyticsIcon from '../assets/icons/analytics-icon.svg'
import TransactionsIcon from '../assets/icons/transactions-icon.svg'

import { useAuthStore } from '@/stores'

export const dashboardRoutes = [
  {
    path: 'summary',
    name: 'Summary',
    component: () => import('@/views/Dashboard/SummaryView.vue'),
    meta: {
      icon: SummaryIcon,
    },
  },
  {
    path: 'analytics',
    name: 'Analytics',
    component: () => import('@/views/Dashboard/AnalyticsView.vue'),
    meta: {
      icon: AnalyticsIcon,
    },
  },
  {
    path: 'transactions',
    name: 'Transactions',
    component: () => import('@/views/Dashboard/TransactionsView.vue'),
    meta: {
      icon: TransactionsIcon,
    },
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      redirect: '/dashboard/summary',
      component: DashboardLayout,
      children: dashboardRoutes,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/auth/:authType',
      name: 'Auth',
      component: () => import('@/views/AuthView.vue'),
      props: true,
    },
    {
      path: '/auth',
      redirect: '/auth/login',
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  if (to.name === 'Auth' && authStore.isAuthenticated) {
    next({ name: 'Dashboard' })
  }
  if (!authStore.isAuthenticated && to.meta.requiresAuth) {
    next({ name: 'Auth', params: { authType: 'login' } })
  } else {
    next()
  }
})

export default router
