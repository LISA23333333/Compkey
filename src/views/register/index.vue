<template>
    <div class="login-container">
      <el-card class="login">
         <el-form ref="registerForm" :model="registerForm" :rules="registerRules" class="login-form" auto-complete="on" label-position="left">
          <div class="title-container">
            <h3 class="title">注册</h3>
          </div>
  
            <el-form-item prop="username">
              <span class="svg-container">
                <svg-icon icon-class="user" />
              </span>
              <el-input
                ref="username"
                v-model="registerForm.username"
                placeholder="请输入用户名"
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
                ref="password"
                v-model="registerForm.password"
                :type="passwordType"
                placeholder="请输入六位数以上的密码"
                name="password"
                tabindex="2"
                auto-complete="on"
              />
              <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </el-form-item>

            <el-form-item prop="repassword">
              <span class="svg-container">
                <svg-icon icon-class="password" />
              </span>
              <el-input
                ref="repassword"
                v-model="registerForm.repassword"
                :type="passwordType2"
                placeholder="重复密码"
                name="repassword"
                tabindex="2"
                auto-complete="on"
                @keyup.enter.native="ok"
              />
              <span class="show-pwd" @click="showPwd2">
                <svg-icon :icon-class="passwordType2 === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </el-form-item>
  
          <el-button :loading="loading" type="primary" @click="ok">确定</el-button>
  
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script>
  import { validUsername } from '@/utils/validate'
  // import {exitUsername} from '@/utils/validate'
  // import {newRegister} from '@/utils/register'`
  
  export default {
    name: 'Register',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!validUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        // } else if(exitUsername(value)){
        //   callback(new Error('用户名已存在！'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      }
      const samePassword = (rule, value, callback) => {
        if (value!=this.registerForm.password) {
          callback(new Error('两次输入的密码不一致！'))
        } else {
          callback()
        }
      }
      return {
        registerForm: {
          username: '',
          password: '',
          repassword: ''
        },
        registerRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }],
          repassword: [{ required: true, trigger: 'blur', validator: samePassword }]
        },
        loading: false,
        passwordType: 'password',
        passwordType2: 'password',
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
      showPwd2() {
        if (this.passwordType2 === 'password') {
          this.passwordType2 = ''
        } else {
          this.passwordType2 = 'password'
        }
        this.$nextTick(() => {
          this.$refs.repassword.focus()
        })
      },
      ok() {      
        this.$refs.registerForm.validate(valid => {
          if (valid) {// valid && myRegister(username,password)
            this.$message({
            message: '注册成功！即将转到登录界面',
            type: 'success'
            });
            this.loading = true
            this.$router.push({ path: this.redirect || '/' })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      async register(){
        console.log("22222222")
        // await this.$store.dispatch('user/logout')
        this.$router.push(`/register`)
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
  