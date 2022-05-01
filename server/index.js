// 创建服务器
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors()); //配置跨域资源共享
app.use(express.urlencoded({ extended: true }));

var jwt = require('jsonwebtoken');
// 语法：
// jwt.sign({
//     data: 'foobar'
//   }, 'secret', { expiresIn: 60 * 60 });

app.get('/', (req, res) => {
    res.send('测试成功');
});

// 监听登录接口
app.get('/login', (req, res) => {
    
    let user = req.query.user;
    let pwd = req.query.pwd;
    // 省略了.....查询数据库
    console.log(user);
    // 生成token
    let token = jwt.sign(
        {
            user: user,
            id: '123',
        },
        'secret',
        {
            expiresIn: 2000,
        }
    );

    //测试token是否过期
    //获取我的个人信息数据--验证token是否有效---
    /**
     * 查看个人信息---有token权限
     * 请求方式:post请求 不要参数
     * token的时间是： 登录的时候设置的： { expiresIn: 20 * 1 }
     */
    //后端校验token是否过期
    app.post('/getuser', (req, res) => {
        console.log(req);
        let token = req.headers.authorization; //接受token字段
        console.log('token', token);
        if (token) {
            jwt.verify(token, 'secret', (err, decoded) => {
                if (err) {
                    switch (err.name) {
                        case 'JsonWebTokenError':
                            res.send({
                                success: false,
                                status: 403,
                                code: -1,
                                msg: '无效的token',
                            });
                            break;
                        case 'TokenExpiredError':
                            res.send({
                                success: false,
                                status: 403,
                                code: -1,
                                msg: 'token过期',
                            });
                            break;
                    }
                } else {
                    //token验证通过了
                    //返回给前端相应的信息
                    res.send({
                        status: 200,
                        success: true,
                        info: 'token验证成功--返回请求的数据',
                        result: [1, 2, 3, 4],
                    });
                }
            });
        } else {
            res.send({
                success: false,
                status: 403,
                info: '需要携带token参数',
            });
        }
    });

    res.send({
        status: 200,
        msg: 'success',
        token,
    });
});

// 启动服务器
app.listen(3001, () => {
    console.log('server is working ...');
    console.log('http://localhost:3001/');
});
