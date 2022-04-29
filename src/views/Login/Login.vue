<template>
    <div>
        <h2 class="title">登录页面</h2>
        <!-- 
        model	表单数据对象 
        status-icon	是否在输入框中显示校验结果反馈图标
        ref  dom元素
        prop	表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的
        rules	表单验证规则 给整个表单添加
     -->
        <div class="login">
            <el-form
                :model="loginForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item label="用户名" prop="username">
                    <el-input
                        type="text"
                        v-model="loginForm.username"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密 码" prop="password">
                    <el-input
                        type="password"
                        v-model="loginForm.password"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        var validateUsername = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                callback();
            }
        };
        var validatePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        return {
            loginForm: {
                username: '',
                password: '',
            },
            rules: {
                username: [{ validator: validateUsername, trigger: 'blur' }],
                password: [{ validator: validatePassword, trigger: 'blur' }],
            },
        };
    },
    methods: {
        /**
         * 登录，提交表单
         */
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    // console.log("验证成功!",this.loginForm);
                    // 去登录
                    this.$store.dispatch('Login/Login', {
                        user: this.loginForm.username,
                        pwd: this.loginForm.password,
                    });
                    // 跳转到首页
                    this.$router.push('/');
                } else {
                    console.log('验证失败!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
};
</script>

<style lang="less" scoped>
.title {
    text-align: center;
    margin-top: 50px;
}
.login {
    width: 400px;
    height: 200px;
    margin: 20px auto;
    padding: 30px;
    box-shadow: 0 0 5px 5px rgba(80, 71, 71, 0.2);
}
</style>
