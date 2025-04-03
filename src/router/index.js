import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Манго | Главная' } // заголовок для главной страницы
  },
  {
      path: '/shops',
      name: 'shops',
      component: () => import('../views/ShopsView.vue'),
      meta: { title: 'Манго | Магазины' } // Заголовок для страницы "Магазины"
  },
  {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue'),
      meta: { title: 'Манго | Контакты' } // Заголовок для страницы "Контакты"
  },
  {
      path: '/arenda',
      name: 'arenda',
      component: () => import('../views/ArendaView.vue'),
      meta: { title: 'Манго | Арендаторам' } // Заголовок для страницы "Арендаторам"
  },
  {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { title: 'Манго | Вход' } // Заголовок для страницы "Вход"
  },
  {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/RegistrationView.vue'),
      meta: { title: 'Манго | Регистрация' } // Заголовок для страницы "Регистрация"
  },
  {
    path: '/lk',
    name: 'lk',
    component: () => import('../views/LkView.vue'),
    meta: { title: 'Манго | Личный кабинет' } // Заголовок для страницы "Личного кабинета"
}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;