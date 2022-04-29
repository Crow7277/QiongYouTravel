<template>
    <div id="app">
        <!-- 路由出口 -->
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'app',
    components: {},
    created() {
        this.getUserInfo();
    },
    methods: {
        getUserInfo() {
            // 从本地读取用户信息
            let userInfo = localStorage.getItem('userInfo');
            if (userInfo) {
                // 存到Vuex
                this.$store.commit('Login/setUserInfo', userInfo);
            }
        },
    },
};
</script>

<style></style>
