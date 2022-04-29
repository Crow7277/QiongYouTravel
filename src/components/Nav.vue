<template>
    <div class="nav">
        <!-- 
        select	菜单激活回调	index: 选中菜单项的 index, indexPath: 选中菜单项的 index path 
        router 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转	boolean
        default-active	当前激活菜单的 index
         -->
        <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
        >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/news">新闻</el-menu-item>
            <el-menu-item index="/about">我的</el-menu-item>
            <el-menu-item index="/travel">旅游</el-menu-item>

            <div class="nav-right">
                <el-button v-if="!userInfo.username" @click="toLogin">登录</el-button>
                <div v-else>
                    <span>欢迎,{{ userInfo.username }}</span>
                    <i class="el-icon-switch-button" @click="loginOut"></i>
                </div>
            </div>
        </el-menu>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {
            activeIndex: '/',
        };
    },
    computed: {
        ...mapState('Login', ['userInfo']),
    },
    mounted() {
        //   取值
        // let index = localStorage.getItem("index");
        // console.log(index);
        // if (index) {
        //   // 导航]
        //   this.activeIndex = index;
        // }
    },
    methods: {
        ...mapMutations('Login', ['clearUser']),
        /**
         * 菜单激活回调
         */
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            //   第一种方式：存值
            //   localStorage.setItem("index", key);
        },
        // 退出登录
        loginOut() {
            //1、 清空本地存储
            localStorage.removeItem('userInfo');
            // 2、清空vuex
            this.clearUser();
            // 3、重新加载页面
            // this.$router.push(this.$route.path);//自己跳自己，不重新导航了！
            this.$router.go(0);
        },
        /**
         * 去登录
         */
        toLogin() {
            this.$router.push('/login');
        },
    },
};
</script>

<style lang="less" scoped>
.nav {
    background-color: #545c64;
    .el-menu {
        width: 1200px;
        margin: 0 auto;
    }
    .nav-right {
        float: right;
        line-height: 60px;
        color: #fff;
        margin-right: 10px;
        i {
            font-size: 20px;
            cursor: pointer;
            margin-left: 10px;
        }
    }
}
</style>
