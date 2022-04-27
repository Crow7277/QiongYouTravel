import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';
import Layout from '../views/Layout.vue';

// 异步组件
const News = () => import('@/views/News/News.vue');
const Travel = () => import('@/views/Travel/Travel.vue');
const About = () => import('@/views/About/About.vue');
const Login = () => import('@/views/Login/Login.vue');

Vue.use(VueRouter);

const routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
            },
            {
                path: '/travel',
                name: 'Travel',
                component: Travel,
            },
            {
                path: '/about',
                name: 'About',
                component: About,
            },
            {
                path: '/news',
                name: 'News',
                component: News,
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
