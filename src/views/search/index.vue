<template>
    <div class="background">
        <el-container class="animateBg">
            <el-main class="myAnimate">
                <compAnimate />
            </el-main>
        </el-container>
        <div class="search" ref="search">
          <el-input class="input"  placeholder="请输入您想查询的关键词" />
          <div class="button">
            <el-button @click="searchWord" type="primary" icon="el-icon-search" />
          </div>
        </div>
        <div class="wave">
          <Wave />
        </div>
    </div>
</template>
<script>
  import compAnimate from './chart/compAnimate'
  import Wave from './wave/Wave'
  export default {
    data() {
      return {
        loading:false
      }},
    components:{
      compAnimate,
        Wave
    },
    methods:{
      searchWord(event){ 
        // this.$alert('抱歉，该关键词未被收录！', '查询失败', {
        //   confirmButtonText: '确定',
        //   callback: action => {
        //     this.$message({
        //       type: 'info',
        //       message: `action: ${ action }`
        //      });
        //     }
        //   });
        this.$refs.search.style.display="none"
        this.$message({
          message: '已查询到相关信息，正在为您跳转……',
          type: 'success'
        });

        this.$router.push({path: '/dashboard'})
      }
    }
  }
</script>

<style scoped>
  .background{
    /* background */
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 1;
    background: #fff;
    overflow: auto;
  }
  .animateBg{
    position: absolute;
    left: 0px;
    top: 13px;
    width: 1200px;
    height: 360px;
    opacity: 1;
    overflow: hidden;
  }
  .myAnimate{
    position: absolute;
    left: 115px;
    top: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .search{
    position: absolute;
    left: 0px;
    top: 250px;
    width: 1200px;
    height: 160px;
    overflow: hidden;
  }
  .button{
    position: absolute;
    left: 985px;
    top: 50px;
    width: 33px;
    height: 30px;
    opacity: 1;
    border: NaNpx solid #C0D2E2;
  }
  .input{
    /* input */
    position: absolute;
    left: 400px;
    top: 50px;
    width: 600px;
    height: 0px;
    opacity: 1;
    border: NaNpx solid #C0D2E2;
  }
  .wave{
    position: absolute;
    left: 205px;
    top: 430px;
    width: 1000px;
    height: 200px;
    overflow: hidden;
  }
</style>