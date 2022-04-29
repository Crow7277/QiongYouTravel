import { toLogin, getUserInfo } from '@/api/index';
import jwt from 'jwt-decode';
const state = {
    userInfo: {
        username:
            '' ||
            (localStorage.getItem('userInfo') &&
                JSON.parse(localStorage.getItem('userInfo')).username),
        token:
            null ||
            (localStorage.getItem('userInfo') &&
                JSON.parse(localStorage.getItem('userInfo')).token),
    },
    result: [],
};
const mutations = {
    /**
     * 往Vuex里存用户信息
     */
    setUserInfo(state, info) {
        state.userInfo = info;
    },
    /**
     * 清空Vuex里的用户信息
     */
    clearUser(state) {
        state.userInfo = {
            username: '',
            token: null,
        };
    },
    /**
     * 设置Vuex中 result的值
     */
    setResult(state, payload) {
        state.result = payload;
    },
};

const actions = {
    async Login({ commit }, param) {
        try {
            const res = await toLogin(param);
            // 解析token，拿到用户信息
            // console.log(jwt(res.token));
            let userInfo = {
                username: jwt(res.token).user,
                token: res.token,
            };
            // 存用户数据到Vuex里
            commit('setUserInfo', userInfo);
            // 数据持久化
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        } catch (error) {
            console.log(error);
        }
    },
    /**
     * 获取用户信息
     */
    async getUserInfo({ commit }) {
        try {
            const res = await getUserInfo();
            console.log(res);
            commit('setResult', res.result);
        } catch (error) {}
    },
};

const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
