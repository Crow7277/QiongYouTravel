/**
 * 1、配置base url、超时时间
 * 2、请求拦截
 * 3、响应拦截
 * 4、配置个进度条
 *  显示、隐藏
 */
import axios from 'axios';
import store from '@/store/index';

const service = axios.create({
    baseURL: '',
    timeout: 5000,
});

// 请求拦截
service.interceptors.request.use(config => {
    // 从Vuex里取token
    let token = store.state.LoginModule.userInfo.token;
    // console.log(token);
    if (token) {
        config.headers.authorization = token;
    }

    return config;
});

// 响应拦截
service.interceptors.response.use(
    res => {
        return res.data;
    },
    err => {
        return Promise.reject(err);
    }
);

export default service;
