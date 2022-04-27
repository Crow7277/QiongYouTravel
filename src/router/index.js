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
                // 路由元信息
                meta: {
                    isLogin: false,
                },
            },
            {
                path: '/travel',
                name: 'Travel',
                component: Travel,
                meta: {
                    isLogin: true,
                },
            },
            {
                path: '/about',
                name: 'About',
                component: About,
                meta: {
                    isLogin: true,
                },
            },
            {
                path: '/news',
                name: 'News',
                component: News,
                meta: {
                    isLogin: true,
                },
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
    routes,
});

export default router;
