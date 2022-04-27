<template>
    <div class="home">
        <Banner :banner="banner"></Banner>
    </div>
</template>

<script>
import Banner from './Banner';
import { getBanner } from '@/api/index.js';
export default {
    name: 'Home',
    components: { Banner },
    data() {
        return {
            banner: [],
        };
    },
    created() {
        this.getBanner();
    },
    methods: {
        // 请求轮播图接口
        async getBanner() {
            try {
                let res = await getBanner();
                console.log(res);
                let banner = res.banner;
                this.banner = banner.map(item => {
                    return item.img.replace(
                        'http://www.wwtliu.com/sxtstu',
                        'http://iwenwiki.com/api'
                    );
                });
                // console.log(this.banner);
            } catch (error) {
                console.log('出错啦！' + error);
            }
        },
    },
};
</script>
