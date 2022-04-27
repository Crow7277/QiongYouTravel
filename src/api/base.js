/**
 * 公共请求接口
 */

const base = {
    //http://iwenwiki.com/api/blueberrypai/getIndexBanner.php
    host: 'http://iwenwiki.com', //基础地址
    bannerUrl: '/api/blueberrypai/getIndexBanner.php', //轮播接口
    login: 'http://localhost:3001/login', //登录，自己的后台
    getuser: 'http://localhost:3001/getuser', //获取个人信息
    lanmei: '/api/blueberrypai/getBlueBerryJamInfo.php', //蓝莓酱 blueBerryjam_id

    // https://3g.163.com/touch/reconstruct/article/list/ BAI67OGGwangning/0-10.html
    news: '/foo/touch/reconstruct/article/list',
    //穷游接口
    search: '/boo/qcross/home/ajax?action=hotelsearch&type=1', //搜索接口 keyword=xx
    recommend:
        'boo/qcross/home/index.php?action=recommend&timer=1638347951752&ajaxID=59b0b70acebeb65c1882399e', //今日推荐
};

export default base;
