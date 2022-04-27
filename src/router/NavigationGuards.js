import router from './index.js';
// 使用路由守卫做路由拦截
// 拦截业务：除了home页面，其他页面访问需要登录
// 使用路由前置守卫
router.beforeEach((to, from, next) => {
    console.log('cek');
    // 判断是否需要校验
    if (to.meta.isLogin) {
        let token = '';
        // 如果存在token，表名已经登录
        if (token) {
            next();
        } else {
            // 如果未登录则让其进入登录页面
            next('/login');
        }
    } else {
        next();
    }
});
