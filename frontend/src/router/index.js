import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/admin/Dashboard.vue';
import UserAccount from '../views/admin/UserAccount.vue';
import UserDetails from '../views/admin/UserDetails.vue';
import ReviseDocuments from '../views/admin/ReviseDocuments.vue';
import Logs from '../views/admin/Logs.vue';
import AccountRecover from '../views/admin/AccountRecover.vue';
import LandingPage from '../views/homepage/LandingPage.vue';
import Registration from '../views/main/Registration.vue';
import LoginMain from '../views/main/Login-main.vue';
import Login from '../views/admin/Login.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import ClientAccount from '../views/admin/ClientAccount.vue';
import ClientBooking from '../views/admin/ClientBooking.vue';
import HelperAccount from '../views/admin/HelperAccount.vue';
import HelperBooking from '../views/admin/HelperBooking.vue';
import HelperLogs from '../views/admin/HelperLogs.vue';
import HelperRatings from '../views/admin/HelperRatings.vue';

const routes = [
  {   
    path: '/landing-page',
    component: LandingPage,
    meta: { requiresAuth: false, sidebar: false },
    name: 'LandingPage',
  },
  {
    path: '/login',
    component: LoginMain,
    meta: { sidebar: true },
    name: 'LoginMain',
  },
  {
    path: '/registration',
    component: Registration,
    meta: { sidebar: true },
    name: 'Registration',
  },
  {
    path: '/loginadmin',
    component: Login,
    meta: { sidebar: false },
    name: 'LoginAdmin',
  },
  {   
    path: '/admin',
    component: DefaultLayout,
    children:[
      {
        path: '/dashboard',
        component: Dashboard,
        name: 'Dashboard',
        meta: { requiresAuth: true, sidebar: true },
      },
      {
        path: '/useraccount',
        component: UserAccount,
        name: 'UserAccount',
        meta: { requiresAuth: true, sidebar: true },
      },
      {
        path: '/logs',
        component: Logs,
        name: 'Logs',
        meta: { requiresAuth: true, sidebar: true },
      },
      {
        path: '/userdetails/:id',
        component: UserDetails,
        name: 'UserDetails',
        props: true,
        meta: { requiresAuth: true, sidebar: true },
      },
      {
        path: '/revisedocuments',
        component: ReviseDocuments,
        name: 'ReviseDocuments',
        meta: { requiresAuth: true, sidebar: true },
      },
      {
        path: '/accountrecover',
        component: AccountRecover,
        name: 'AccountRecover',
        meta: { requiresAuth: true, sidebar: true },
      },
      {
        path: '/clientaccount',
        component: ClientAccount,
        name: 'ClientAccount',
        meta: { requiresAuth: true, sidebar: true },
      },
      {
        path: '/clientbooking',
        component: ClientBooking,
        name: 'ClientBooking',
        meta: { requiresAuth: true, sidebar: true },
      },
      {
        path: '/helperaccount',
        component: HelperAccount,
        name: 'HelperAccount',
        meta: { requiresAuth: false, sidebar: true },
      },
      {
        path: '/helperlogs',
        component: HelperLogs,
        name: 'HelperLogs',
        meta: { requiresAuth: false, sidebar: true },
      },
      {
        path: '/helperratings',
        component: HelperRatings,
        name: 'HelperRatings',
        meta: { requiresAuth: false, sidebar: true },
      },
      {
        path: '/helperbooking',
        component: HelperBooking,
        name: 'HelperBooking',
        meta: { requiresAuth: false, sidebar: true },
      },
      
    ],
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  // const userType = localStorage.getItem('userType'); // Assuming userType is stored in localStorage

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      console.log("This triggers");
      next({ name: 'Login' });
    } else {
      console.log("So it did match something")
      next();
    }
  } else {
    console.log("What")
    next();
  }
});

export default router;
