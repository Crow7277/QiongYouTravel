<template>
    <div>
        <el-carousel trigger="click" height="500px">
            <el-carousel-item v-for="(item, index) in banner" :key="index">
                <h3 class="small"><img :src="item" alt="" width="100%" /></h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        banner: {
            type: Array,
            default: function () {
                return [];
            },
        },
    },
};
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
