<template>
  <div class="login-container">
    <el-card class="login">
       <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
        <div class="title-container">
          <h3 class="title">登录</h3>
        </div>

          <el-form-item prop="username">
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder="Username"
              name="username"
              type="text"
              tabindex="1"
              auto-complete="on"
            />
          </el-form-item>

          <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="Password"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </el-form-item>

        <el-button :loading="loading" type="primary" @click.native.prevent="handleLogin">进入系统</el-button>
        <a style="color:cornflowerblue" href="#/register">没有账号？点击注册</a>

        <div class="tips">
          <span style="margin-right:20px;">username: admin</span>
          <span> password: any</span>
        </div>

      </el-form>
    </el-card>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
  // import {validPassword, exitUsername} from '@/utils/validate'
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入正确的用户名'))
        // } else if(!exitUsername(value)){
        //   callback(new Error('用户名不存在！'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {//!validPassword(username,value)
        callback(new Error('密码错误，请重新输入'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#151522;
$cursor: rgb(84, 84, 84);

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  background-image:url(../../.././public/background.png);
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      border: 0px;
      margin:0px;
      -webkit-appearance: none;
      border-radius: 5px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
    
  }

  .el-form-item {
    position: relative;
    top: -60px;
    margin: 50px 0px 0px 0px;
    border: 1px solid rgba(255, 255, 255);
    background: rgb(255, 255, 255);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#ffffff;
$dark_gray:#889aa4;
$light_gray:#eee;
body,html{
    overflow: auto;
  }
.login-container {
  overflow: auto;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login{
    /* login background */
    position: relative;
    margin: auto;
    top: 55px;
    width: 1100px;
    height: 660px;
    opacity: 1;
    background: #ffffff;
    border-radius: 15px;
    background-image:url(../../.././public/login.jpg);
  }
  .login-form {
    position: relative;
    left: 288px;
    top: -21px;
    width: 521px;
    height: 681px;
    opacity: 1;
    max-width: 100%;
    padding: 180px 80px 0;
    margin: 0 auto;
    overflow: hidden;
    background-color: #f2f8ff;
  }

  .tips {
    font-size: 14px;
    color: rgb(217, 209, 209);
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;
    left: 0px;
    top:-90px;

    .title {
      font-size: 40px;
      color: #151522;
      margin: 0px auto 40px auto;
      text-align: left;
      font-weight: lighter;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
::v-deep .el-button{
      width:45%;
      margin-bottom:30px;
      margin-right: 40px;
    }
</style>
