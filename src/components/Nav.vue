<template>
    <div class="nav">
        <!-- router:true表示是否开启路由模式，如果开启将index作为路径传入 -->
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

            <!-- 登录按钮 -->
            <div class="nav-right">
                <el-button>登录</el-button>
            </div>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            activeIndex: '/',
        };
    },
    mounted() {
        // let index = localStorage.getItem('index');
        // console.log(index);
        // if (index) {
        //     this.activeIndex = index;
        // }
    },
    methods: {
        handleSelect(key) {
            // localStorage.setItem('index', key);
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
    }
}
</style>
