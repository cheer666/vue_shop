<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <!-- 登录表单区域 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
  
<script>
import { login } from '@/api/user'

export default {
  data() {
    return {
      //这是登录表单的数据绑定对象
      loginForm: {
        username: 'jinyong',
        password: '123456'
      },
      //这是表单的验证规则对象
      loginFormRules: {
        username: [
          { required: true, message: "请输入登录名称", trigger: 'blur' },
          { min: 3, max: 10, message: "长度在3到10个字符", trigger: 'blur' }
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: 'blur' },
          { min: 6, max: 15, message: "长度在6到15个字符", trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        // console.log(valid);
        if (!valid) return;
        login(this.loginForm).then((result) => {
          // console.log(result.data)
          if (result.data.code == 1) {
            this.$message.success("登陆成功")
            console.log(result.data.data);
            // 1. 将登陆成功之后的token,保存到客户端的 sessionStorage 中
            // 1.1 项目中除了登录之外的其他API接口，必须在登录之后才能访问
            // 1.2 token 只应当在当前网站打开期间生效，所以 token 保存在sessionStorage 中
            window.sessionStorage.setItem('token', result.data.data);
            // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
            this.$router.push("/home");
          } else {
            this.$message.error(result.data.msg);
          }
        });
      })
    }
  }
}
</script>
  
<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);

    // background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }

  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
  