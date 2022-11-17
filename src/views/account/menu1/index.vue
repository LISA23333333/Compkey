<template>
  <div class="card">
    <div class="topBar">
      <span class="userManage">个人信息</span>
    </div>
    <div class="account">
      <span class="logo1">账号密码</span>
      <hr class="myLine">
      <div class="one">
        <span class="word">账号</span>
        <span class="accountNum">111</span>
      </div>
      <div class="two">
        <span class="word">旧密码</span>
        <el-input class="input" />
      </div>
      <div class="three">
        <span class="word">新密码</span>
        <el-input class="input" />
      </div>
      <div class="four">
        <span class="word">确认新密码</span>
        <el-input class="input" />
      </div>
      <div class="five">
        <el-button type="primary">保存</el-button>
        <el-button>取消</el-button>
      </div>
    </div>
    <div class="personal">
      <span class="logo2">头像昵称</span>
      <hr class="myLine2">
      <div class="img">
        <img class="img2" src="../../../../public/docer-356527674.jpg">
      </div>
      <div class="six">
        <div class="seven">
          <span class="word">昵称</span>
          <el-input class="input2" />
        </div>
        <div style="position:absolute;left:68px;top:140px">
          <el-button type="primary">保存</el-button>
        </div>
      </div>
    </div>

  </div>
</template>

<!-- <script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data(){
    return{

    }
  },
  setup() {

  },
})
</script> -->

<style scoped>
  .card{
    position:0px;
    left: 0px;
    top: 0px;
    width: 100%;
    height:100%;
    opacity: 1;
    background-color:hsla(217, 44%, 96%, 0.868);
  }
  .topBar{
    /* topbar */
    position: absolute;
    left: 100px;
    top: 20px;
    width: 1150px;
    height: 36px;
    opacity: 1;
    background: linear-gradient(180deg, #F7FBFF 0%, #F2F7FF 100%);
    border: 0.5px solid rgba(192, 210, 226, 0.34);
    box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6);
  }
  .userManage{
    /* 用户信息 */
    position: absolute;
    left: 18px;
    top: 10px;
    width: 56px;
    height: 17px;
    opacity: 1;
    font-family: MiSans-Bold;
    font-size: 14px;
    font-weight: bold;
    line-height: 17px;
    letter-spacing: 0px;
    color: #5B6388;
  }
  .logo1{
    /* 账号密码 */
    position: absolute;
    left: 782px;
    top: 21px;
    width: 64px;
    height: 19px;
    opacity: 1;
    font-family: MiSans-Regular;
    font-size: 16px;
    font-weight: normal;
    line-height: 19px;
    letter-spacing: 0px;
    color: #333333;
  }
  .logo2{
    /* 个人信息 */
    position: absolute;
    right: 24px;
    top: 21px;
    width: 64px;
    height: 19px;
    opacity: 1;
    font-family: MiSans-Regular;
    font-size: 16px;
    font-weight: normal;
    line-height: 19px;
    letter-spacing: 0px;
    color: #333333;
  }
  .myLine{
    /* Line */
    position: absolute;
    left: 777px;
    top: 48px;
    width: 70px;
    height: 1px;
    opacity: 1;
    border: 1.5px solid #5379f6;
    background-color: #5379f6;
  }
  .myLine2{
    /* Line */
    position: absolute;
    right: 18px;
    top: 50px;
    width: 70px;
    height: 1px;
    opacity: 1;
    border: 1.5px solid #5379f6;
    background-color: #5379f6;
  }
  .account{
    /* Rectangle*/
    position: absolute;
    left: 100px;
    top: 56px;
    width: 870px;
    height: 600px;
    border-radius: 0px 0px 8px 8px;
    opacity: 1;
    background: #FFFFFF;
    box-shadow: 0px 10px 16px -4px #E9EBF6;
  }
  .one{
    /* 账号 */
    position: absolute;
    left: 141px;
    top: 90px;
    width: 164px;
    height: 56px;
    opacity: 1;
  }
  .accountNum{
    /* account */
    position: absolute;
    left: 0px;
    top: 18px;
    width: 164px;
    height: 34px;
    opacity: 1;
    font-family: MiSans-Medium;
    font-size: 28px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0px;
    color: #333333;
  }
  .two{
    /* 原密码 */
    position: absolute;
    left: 139px;
    top: 195px;
    width: 675px;
    height: 72px;
    opacity: 1;
    border: NaNpx solid #C0D2E2;
  }
  .three{
    /* 新密码 */
    position: absolute;
    left: 139px;
    top: 287px;
    width: 675px;
    height: 72px;
    opacity: 1;
    border: NaNpx solid #C0D2E2;
  }
  .four{
    /* 确认密码 */
    position: absolute;
    left: 139px;
    top: 379px;
    width: 675px;
    height: 72px;
    opacity: 1;
    border: NaNpx solid #C0D2E2;
  }
  .five{
    /* 按钮 */
    position: absolute;
    left: 139px;
    top: 491px;
    width: 165px;
    height: 40px;
    border-radius: 4px;
    opacity: 1;
  }
  .input{
    /* Rectangle */
    position: absolute;
    left: 0px;
    top: 10px;
    width: 600px;
    height: 45px;
    opacity: 1;
    background: #FAFBFC;
    border: none;
  }
  .input2{
    /* Rectangle */
    position: absolute;
    left: 0px;
    top: 10px;
    width: 200px;
    height: 47px;
    opacity: 1;
    background: #FAFBFC;
    border: none;
  }
  .word{
  /* 账号 */
    position: absolute;
    left: 0px;
    top: -8px;
    width: 70px;
    height: 14px;
    opacity: 1;
    font-family: MiSans-Regular;
    font-size: 12px;
    font-weight: normal;
    line-height: 14px;
    letter-spacing: 0px;
    color: #889199;
  }
  .personal{
    /* 个人信息 */
    position: absolute;
    left: 971px;
    top: 56px;
    width: 279px;
    height: 600px;
    border-radius: 0px 0px 8px 8px;
    opacity: 1;
    background: #FFFFFF;
    box-shadow: 0px 10px 16px -4px #E9EBF6;
  }
  .img{
    /* 矩形 1 */
    position: absolute;
    left: 40px;
    top: 96px;
    width: 199px;
    height: 199px;
    border-radius: 25px;
    opacity: 1;
    background: #FFEFEF;
  }
  .img2{
    width: 199px;
    height: 199px;
    border-radius: 25px;
    opacity: 1;
    background: #FFEFEF;
  }
  .six{
    position: absolute;
    left: 40px;
    top: 350px;
    width: 230px;
    height: 180px;
  }
</style>
