<template>
    <div>
        <!-- 导航 -->
        <Nav />

        <!-- 路由出口 -->
        <router-view />
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
export default {
    components: {
        Nav,
    },
    created() {},
    methods: {},
};
</script>

<style lang="less" scoped></style>
