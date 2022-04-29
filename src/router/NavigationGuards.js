import router from './index';
import store from '@/store';
// 路由拦截
router.beforeEach((to, from, next) => {
    // 判断
    // 需要登录
    if (to.meta.isLogin) {
        // 从Vuex里取token
        let token = store.state.Login.userInfo.token;
        // console.log(token);
        // 有token，表示已登录
        if (token) {
            next();
        } else {
            next('/login');
        }
    } else {
        // 不需要登录
        next();
    }
});
