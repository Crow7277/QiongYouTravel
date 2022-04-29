/**
 * 封装所有的请求函数, 返回promise
 */
import ajax from './ajax';
import base from './base';
// import elseAjax from './elseAjax';

/**
 * 获取轮播图
 */
export const getBanner = () => ajax.get(base.host + base.bannerUrl);
/**
     登录
  * params={user:'',pwd:''}
  */
export const toLogin = params =>
    ajax.get(base.login, {
        params,
    });

/**
 *
 * 获取用户信息
 */
export const getUserInfo = () => elseAjax.post(base.getuser);

// /**
//  * 获取蓝莓数据
//  * {blueBerryjam_id:}
//  */
// export const getLanmei = params => {
//     return ajax.get(base.host + base.lanmei, {
//         params,
//     });
// };

// /**
//  * 获取新闻
//  * BAI67OGGwangning/0-10.html
//  * 第一个参数：起始下标 0,10,20   0,5,10
//  * 第2个参数:每页显示的条数  10  0,10,20,30 (num-1)*10
//  */
// export const getNews = (type, num) => {
//     return ajax.get(`${base.news}/${type}/${(num - 1) * 10}-10.html`).then(res => {
//         return JSON.parse(res.slice(9, -1))[type];
//     });
// };

// /**
//  * 穷游网 根据关键字搜索
//  * { keyword:xx}
//  */
// export const getSearch = params => ajax.get(base.search, { params });

// /**
//  * 获取今日推荐列表
//  */
// export const getRecommendList = () => ajax.get(base.recommend);
