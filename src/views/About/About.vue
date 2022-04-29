<template>
    <div>
        <h2>About</h2>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    created() {
        this.getUserInfo();
    },
    methods: {
        ...mapActions('Login', ['getUserInfo']),
    },
};
</script>

<style lang="less" scoped></style>
