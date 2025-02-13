import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardLayout from '../layout/DashboardLayout.vue'

export const dashboardRoutes = [
  {
    path: 'summary',
    name: 'Summary',
    component: () => import('@/views/Dashboard/SummaryView.vue'),
  },
  {
    path: 'analytics',
    name: 'Analytics',
    component: () => import('@/views/Dashboard/AnalyticsView.vue'),
  },
  {
    path: 'transactions',
    name: 'Transactions',
    component: () => import('@/views/Dashboard/TransactionsView.vue'),
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
      path: '/dashoard',
      name: 'Dashboard',
      component: DashboardLayout,
      children: dashboardRoutes,
    },
  ],
})

export default router
