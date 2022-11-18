<template>
  <div
    v-loading="loading"
    class="background"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(255, 255, 255, 0.4)"
  >
    <el-container class="card1">
      <el-header style="height: 42px" class="log">
        <span class="word">当前状态</span>
        <span class="word2">
          <div class="bottom clearfix">
            <time class="time">查询时刻：{{ store.time }}</time>
          </div>
        </span>
      </el-header>
      <el-main>
        <span class="sentence"
          >关键词“{{ store.keyword }}”查询成功，本次查询共花费{{
            store.costTime
          }}秒！</span
        >
      </el-main>
    </el-container>

    <el-container class="card2">
      <el-header style="height: 42px" class="search">
        <span class="word">搜索</span>
      </el-header>
      <el-main>
        <el-input
          v-model="inputKey"
          class="input"
          @keyup.enter.native="searchWord"
        />
        <div class="button">
          <el-button type="primary" icon="el-icon-search" @click="searchWord" />
        </div>
      </el-main>
    </el-container>

    <el-container class="chart">
      <el-header style="height: 42px">
        <span class="word">竞争性关键字</span>
      </el-header>
      <el-main class="myChart" :key="new Date().getTime()">
        <BarChart></BarChart>
      </el-main>
    </el-container>

    <el-container class="card3">
      <el-main>
        <el-table
          :data="tableData"
          stripe
          height="524px"
          class="myTable"
          :key="new Date().getTime()"
        >
          <el-table-column prop="midWord" label="中介关键字" width="160" />
          <el-table-column
            prop="compWord"
            label="竞争性关键字列表"
            width="500"
          />
        </el-table>
      </el-main>
    </el-container>

    <el-tabs v-model="activeName" class="card4" :key="new Date().getTime()">
      <el-tab-pane label="词云" name="first">
        <word-cloud />
      </el-tab-pane>
      <el-tab-pane label="推荐词" name="second">
        <div class="second">
          <el-row
            v-for="(compkey, index) in compkeys"
            :key="index"
            :span="8"
            :offset="index > 0 ? 2 : 0"
          >
            <el-card :body-style="{ padding: '0px' }" class="suggest">
              <div style="padding: 14px; font-size: small">
                <span>关键字：{{ store.keyword }}</span>
                <br />
                <br />
                <span>推荐字：{{ compkey.compWord }}</span>
                <br />
                <br />
                <span>竞争度：{{ compkey.comp }}</span>
                <br />
                <br />
                <div class="block">
                  <el-rate v-model="compkey.value" :colors="colors" />
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
import { getResult,getHistory,getRecommend } from "@/api/search";
import store from "@/store";
import BarChart from "./chart/BarChart";
import WordCloud from "./chart/WordCloud.vue";
export default {
  components: {
    BarChart,
    WordCloud,
  },
  data() {
    return {
      store,
      loading: false,
      inputKey: "",
      compkeys: [
        { compWord: store.compWords[0][0],comp: store.compWords[0][1], value: null },
        { compWord: store.compWords[1][0],comp: store.compWords[1][1], value: null },
        { compWord: store.compWords[2][0],comp: store.compWords[2][1], value: null },
        { compWord: store.compWords[3][0],comp: store.compWords[3][1], value: null },
        { compWord: store.compWords[4][0],comp: store.compWords[4][1], value: null },
        { compWord: store.compWords[5][0],comp: store.compWords[5][1], value: null },
        { compWord: store.compWords[6][0],comp: store.compWords[6][1], value: null },
        { compWord: store.compWords[7][0],comp: store.compWords[7][1], value: null },
        { compWord: store.compWords[8][0],comp: store.compWords[8][1], value: null },
        { compWord: store.compWords[9][0],comp: store.compWords[9][1], value: null }
      ],
      activeName: "first",
      tableData: [
        {
          midWord: store.midComp[0],
          compWord: store.midWords[0],
        },
        {
          midWord: store.midComp[1],
          compWord: store.midWords[1],
        },
        {
          midWord: store.midComp[2],
          compWord: store.midWords[2],
        },
        {
          midWord: store.midComp[3],
          compWord: store.midWords[3],
        },
        {
          midWord: store.midComp[4],
          compWord: store.midWords[4],
        },
        {
          midWord: store.midComp[5],
          compWord: store.midWords[5],
        },
        {
          midWord: store.midComp[6],
          compWord: store.midWords[6],
        },
        {
          midWord: store.midComp[7],
          compWord: store.midWords[7],
        },
        {
          midWord: store.midComp[8],
          compWord: store.midWords[8],
        },
        {
          midWord: store.midComp[9],
          compWord: store.midWords[9],
        },
        {
          midWord: store.midComp[10],
          compWord: store.midWords[10],
        },
        {
          midWord: store.midComp[11],
          compWord: store.midWords[11],
        },
        {
          midWord: store.midComp[12],
          compWord: store.midWords[12],
        },
        {
          midWord: store.midComp[13],
          compWord: store.midWords[13],
        },
        {
          midWord: store.midComp[14],
          compWord: store.midWords[14],
        },
        {
          midWord: store.midComp[15],
          compWord: store.midWords[15],
        },
        {
          midWord: store.midComp[16],
          compWord: store.midWords[16],
        },
        {
          midWord: store.midComp[17],
          compWord: store.midWords[17],
        },
        {
          midWord: store.midComp[18],
          compWord: store.midWords[18],
        },
        {
          midWord: store.midComp[19],
          compWord: store.midWords[19],
        },
      ],
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    };
  },
  watch: {
    $route() {
      //监听相同路由下参数变化的时候，从而实现异步刷新
      this.loading = true;
      //重新获取数据
    
    },
  },

  methods: {
    history(event){
      getHistory(encodeURIComponent('dqx1z1z')).then((response) => {
          var res1 = response;
          if (!res1) {
            console.log(res1);
            
          } else {
            
          }
        });
    },
    recommend(event){
      getRecommend(encodeURIComponent('dqx1z1z')).then((response) => {
          var res2 = response;
          if (!res2) {
            console.log(res2);
            
          } else {
            
          }
        });
    },

    searchWord(event) {
      if (this.inputKey) {
        var time1 = Date.now();
        var res;
        this.loading = true;
        store.keyword = this.inputKey;
        console.log(store.keyword);
        getResult(encodeURIComponent(store.keyword)).then((response) => {
          res = response;
          store.compWords = res.comp_word;
          store.wordCount = res.word_statistics;
          store.costTime = (Date.now() - time1) / 1000;
          store.midWords = Object.values(res.midwords_info_list);
          store.midComp = Object.keys(res.midwords_info_list);
          store.weight = res.weight_dict;
          console.log(store.midWords);
          if (!res) {
            console.log(res);
            this.loading = false;
            this.$alert("抱歉，该关键词未被收录！", "查询失败", {
              confirmButtonText: "确定",
            });
            this.keywords = "";
          } else {
            this.$message({
              message: "已查询到相关信息，正在为您跳转……",
              type: "success",
            });
            this.loading = false;
            this.inputKey = "";
            this.$router.push({ path: "/dashboard" });
          }
        });
      } else {
        this.$message.error("关键词不能为空！");
      }
    },
  },
};
</script>
<style scoped>
.background {
  /* background */
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 160%;
  opacity: 1;
  background: hsla(217, 44%, 96%, 0.868);
}
.card1 {
  /* Log */
  position: absolute;
  left: 70px;
  top: 25px;
  width: 833px;
  height: 90px;
  opacity: 1;
  background-color: #ffffff;
}
.card2 {
  /* 搜索 */
  position: absolute;
  left: 920px;
  top: 25px;
  width: 400px;
  height: 90px;
  opacity: 1;
  background-color: #ffffff;
  display:none
}
.chart {
  position: absolute;
  left: 70px;
  top: 135px;
  width: 1250px;
  height: 360px;
  opacity: 1;
  background-color: #ffffff;
}
.myChart {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}
.card3 {
  /* 关键字列表 */
  position: absolute;
  left: 70px;
  top: 515px;
  width: 670px;
  height: 520px;
  opacity: 1;
  background-color: #ffffff;
}
.el-main {
  padding: 0px;
  overflow: hidden;
}
.card4 {
  /* 结果推荐 */
  position: absolute;
  left: 745px;
  top: 515px;
  width: 575px;
  height: 520px;
  opacity: 1;
  background-color: #ffffff;
  border: none;
}
.log {
  /* Rectangle*/
  position: absolute;
  left: 0px;
  top: 0px;
  width: 833px;
  height: 42px;
  opacity: 1;
  background: linear-gradient(180deg, #f7fbff 0%, #f2f7ff 100%);
  border: 0.5px solid rgba(192, 210, 226, 0.34);
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6);
}
.search {
  /* Rectangle */
  position: absolute;
  left: 0px;
  top: 0px;
  width: 400px;
  height: 42px;
  opacity: 1;
  background: linear-gradient(180deg, #f7fbff 0%, #f2f7ff 100%);
  border: 0.5px solid rgba(192, 210, 226, 0.34);
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6);
}
.table {
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
.myTable {
  left: 12px;
  top: -4px;
  width: 100%;
  max-height: 103%;
  font-size: small;
  overflow: auto;
  border: none;
  padding: none;
  text-align: center;
}
.input {
  /* input */
  position: absolute;
  left: 30px;
  top: 50px;
  width: 300px;
  height: 0px;
  opacity: 1;
  border: NaNpx solid #c0d2e2;
}
.word {
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
  color: #5b6388;
}
.word2 {
  /* 关键字：未闻花名 */
  position: absolute;
  right: 0px;
  width: 380px;
  height: 17px;
  opacity: 1;
}
.sentence {
  /* 在这里可以实时更新日志 */
  position: absolute;
  left: 16.25px;
  top: 52px;
  width: 785px;
  height: 29px;
  opacity: 1;
  font-family: MiSans-Normal;
  font-size: 13px;
  font-weight: normal;
  text-align: center;
  line-height: 29px;
  letter-spacing: 0px;
  color: #415bc4;
  border: 1px dotted #e3e5ee;
}
::v-deep .el-input__inner {
  height: 30px;
}
.button {
  position: absolute;
  left: 320px;
  top: 50px;
  width: 33px;
  height: 30px;
  opacity: 1;
  border: NaNpx solid #c0d2e2;
}
.el-button--primary {
  width: 48px;
  height: 30px;
  border-radius: 0%;
  padding: 7px 9px;
}
::v-deep .el-tabs__header {
  padding: 0px;
  position: relative;
  margin: 0px 0px 0px;
  background: linear-gradient(180deg, #f7fbff 0%, #f2f7ff 100%);
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
.first {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.second {
  width: 102%;
  height: 479px;
  overflow: auto;
}
.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.suggest {
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
