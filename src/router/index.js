import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/views/Landing';
import About from '@/views/About';
import Services from '@/views/Services';
import Team from '@/views/Team';
import Blog from '@/views/Blog';
import Contact from '@/views/forms/Contact';
import Join from '@/views/Join';
import Login from '@/views/forms/Login';
import Account from '@/views/Account';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/team/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/me',
      name: 'Account',
      component: Account,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    const app = document.querySelector('.app');
    app.classList.remove('active-drawer');

    return { x: 0, y: 0 }
  },
});
