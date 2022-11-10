<template>
  <div class="background">

    <el-container class="card1">
      <el-header style="height:42px;" class="log">
        <span class="word">当前状态</span>
        <span class="word2">
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
          </div>
        </span>
      </el-header>
      <el-main>
        <span class="sentence">这里可以用来放日志</span>
      </el-main>
    </el-container>

    <el-container class="card2">
      <el-header style="height:42px;" class="search">
        <span class="word">搜索</span>
      </el-header>
      <el-main>
        <el-input class="input" />
        <div class="button">
          <el-button @click="Click" type="primary" icon="el-icon-search" />
        </div>
      </el-main>
    </el-container>

    <el-container class="chart">
      <el-main class="myChart">
        <bar-chart />
      </el-main>
    </el-container>

    <el-container class="card3">
      <el-header style="height:42px;" class="table">
        <!-- <span class="word">compkey</span> -->
      </el-header>
      <el-main>
        <el-table :data="tableData" stripe height="524px" class="myTable">
          <el-table-column prop="midWord" label="中介关键字" width="180" />
          <el-table-column prop="compWord" label="竞争性关键字列表" width="480" />
        </el-table>
      </el-main>
    </el-container>

    <el-tabs v-model="activeName" class="card4" @tab-click="handleClick">
      <el-tab-pane label="词云" name="first">
          <div class="first">
            <img class="first" src="../../../public/cloud.png"/>
          </div>
      </el-tab-pane> 
      <el-tab-pane label="推荐词" name="second">
        <div class="second">
          <el-row v-for="(o, index) in 4" :key="o" :span="8" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }" class="suggest">
              <div style="padding: 14px;">
                <span>关键字：未闻花名</span>
                <span>推荐字：花名</span>
                <span>竞争度：0.4567</span>
                <span>影响权重：0.03312</span>
                <div class="block">
                  <span class="demonstration">评价</span>
                  <el-rate
                    v-model="value2"
                    :colors="colors">
                  </el-rate>
                </div>
              </div>
            </el-card>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import BarChart from './chart/BarChart'
export default {
  components:{
    BarChart
  },
  data() {
    const item = {
      midWord: 'midWord',
      compWord: '片尾曲 歌曲 图片 中文版 歌词 主题曲 真人版 简谱 ed 动漫'
    }
    return {
      tableData: Array(20).fill(item),
      activeName: 'first',
      currentDate: new Date(),
      value1: null,
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    }
  },
  methods: {
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
      height: 150%;
      opacity: 1;
      background: hsla(217, 44%, 96%, 0.868);
  }
  .card1{
      /* Log */
      position: absolute;
      left: 70px;
      top: 25px;
      width: 833px;
      height: 90px;
      opacity: 1;
      background-color: #ffffff;
  }
  .card2{
      /* 搜索 */
      position: absolute;
      left: 920px;
      top: 25px;
      width: 400px;
      height: 90px;
      opacity: 1;
      background-color: #ffffff;
  }
  .chart{
    position: absolute;
    left: 70px;
    top: 130px;
    width: 1250px;
    height: 320px;
    opacity: 1;
    background-color: #ffffff;
  }
  .myChart{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }
  .card3{
      /* 关键字列表 */
      position: absolute;
      left: 70px;
      top: 465px;
      width: 660px;
      height: 520px;
      opacity: 1;
      background-color: #ffffff;
  }
  .el-main{
        padding: 0px;
        overflow: hidden;
      }
  .card4{
      /* 结果推荐 */
      position: absolute;
      left: 745px;
      top: 465px;
      width: 575px;
      height: 520px;
      opacity: 1;
      background-color: #ffffff;
      border: none;
  }
  .log{
      /* Rectangle*/
      position: absolute;
      left: 0px;
      top: 0px;
      width: 833px;
      height: 42px;
      opacity: 1;
      background: linear-gradient(180deg, #F7FBFF 0%, #F2F7FF 100%);
      border: 0.5px solid rgba(192, 210, 226, 0.34);
      box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6);
  }
  .search{
      /* Rectangle */
      position: absolute;
      left: 0px;
      top: 0px;
      width: 400px;
      height: 42px;
      opacity: 1;
      background: linear-gradient(180deg, #F7FBFF 0%, #F2F7FF 100%);
      border: 0.5px solid rgba(192, 210, 226, 0.34);
      box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6);
  }
  .table{
      /* Rectangle*/
      position: absolute;
      left: 0px;
      top: 0px;
      width: 105%;
      height: 7.76%;
      opacity: 1;
      /* background: linear-gradient(180deg, #F7FBFF 0%, #F2F7FF 100%); */
      /* border: 0.5px solid rgba(192, 210, 226, 0.34); */
      /* box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6); */
  }
  .myTable{
      left: 13px;
      top: -4px;
      width: 100%;
      max-height: 103%;
      font-size: small;
      overflow:auto;
      border: none;
      padding: none;
  }
  .input{
      /* input */
      position: absolute;
      left: 30px;
      top: 50px;
      width: 300px;
      height: 0px;
      opacity: 1;
      border: NaNpx solid #C0D2E2;
  }
  .word{
      /* 当前状态 */
      position: absolute;
      left: 15px;
      top: 12px;
      width: 301px;
      height: 17px;
      opacity: 1;
      font-family: MiSans-Bold;
      font-size: 14px;
      font-weight: bold;
      line-height: 17px;
      letter-spacing: 0px;
      color: #5B6388;
  }
  .word2{
      /* 关键字：未闻花名 */
      position: absolute;
      right: 0px;
      width: 327px;
      height: 17px;
      opacity: 1;
  }
  .sentence{
      /* 在这里可以实时更新日志 */
      position: absolute;
      left: 16.25px;
      top: 52px;
      width: 785px;
      height: 29px;
      opacity: 1;
      font-family: MiSans-Normal;
      font-size: 12px;
      font-weight: normal;
      text-align: center;
      line-height: 21px;
      letter-spacing: 0px;
      color: #989FBD;
      border:1px dotted #e3e5ee;
  }
  ::v-deep .el-input__inner{
      height: 30px;
  }
  .button{
      position: absolute;
      left: 320px;
      top: 50px;
      width: 33px;
      height: 30px;
      opacity: 1;
      border: NaNpx solid #C0D2E2;
  }
  .el-button--primary{
      width: 48px;
      height: 30px;
      border-radius: 0%;
      padding: 7px 9px;
  }
  ::v-deep .el-tabs__header {
      padding: 0px;
      position: relative;
      margin: 0px 0px 0px;
      background: linear-gradient(180deg, #F7FBFF 0%, #F2F7FF 100%);
      border: 0.5px solid rgba(192, 210, 226, 0.34);
      box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6);
  }
  ::v-deep .el-tabs__nav-wrap {
    left: 20px;
    width: 30%;
    overflow: hidden;
    margin-bottom: -1px;
    position: relative;
  }
  .first{
    width: 100%;
    height: 100%;
    overflow:auto;
  }
  .second{
    width: 102%;
    height: 479px;
    overflow:auto;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .suggest{
    /* Rectangle 20 */
        /* position: absolute;
        left: 0px;
        top: 0px; */
        width: 400px;
        height: 123px;
        opacity: 1;
        background: #fbfcff;
        margin: 20px 20px 5px;
        border: none;
  }
</style>
