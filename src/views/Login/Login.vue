<template>
    <div>
        <h2 class="title">登录界面</h2>
        <div class="login">
            <el-form
                :model="loginForm"
                status-icon
                :rules="rules"
                ref="loginForm"
                label-width="100px"
                class="demo-loginForm"
            >
                <el-form-item label="用户名" prop="username">
                    <el-input
                        type="text"
                        v-model="loginForm.username"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input
                        type="password"
                        v-model="loginForm.password"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                    <el-button @click="resetForm('loginForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
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
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
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
    width: 500px;
    height: 200px;
    margin: 20px auto;
    box-shadow: 0 0 5px rgba(80, 71, 71, 0.2);
    padding: 30px;
}
</style>
