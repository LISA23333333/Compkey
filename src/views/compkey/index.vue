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
            <time class="time">{{ currentDate }}</time>
          </div>
        </span>
      </el-header>
      <el-main>
        <span
          class="sentence"
        >关键词“{{ keyword }}”查询成功，本次查询共花费{{ costTime }}秒！</span>
      </el-main>
    </el-container>

    <el-container class="card2">
      <el-header style="height: 42px" class="search">
        <span class="word">搜索</span>
      </el-header>
      <el-main>
        <el-input v-model="inputKey" class="input" />
        <div class="button">
          <el-button type="primary" icon="el-icon-search" @click="Click" />
        </div>
      </el-main>
    </el-container>

    <el-container class="chart">
      <el-header style="height: 42px">
        <span class="word">竞争性关键字</span>
      </el-header>
      <el-main class="myChart">
        <BarChart></BarChart>
      </el-main>
    </el-container>

    <el-container class="card3">
      <el-main>
        <el-table :data="tableData" stripe height="524px" class="myTable">
          <el-table-column prop="midWord" label="中介关键字" width="180" />
          <el-table-column
            prop="compWord"
            label="竞争性关键字列表"
            width="480"
          />
        </el-table>
      </el-main>
    </el-container>

    <el-tabs v-model="activeName" class="card4">
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
                <span>关键字：{{ keyword }}</span>
                <br>
                <br>
                <span>推荐字：{{ compkey.compWord }}</span>
                <br>
                <br>
                <span>竞争度：{{ compkey.comp }}</span>
                <br>
                <br>
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
import BarChart from './chart/BarChart'
import WordCloud from './chart/WordCloud.vue'
export default {
  components: {
    BarChart,
    WordCloud
  },
  data() {
    const item = {
      midWord: 'midWord',
      compWord: '片尾曲 歌曲 图片 中文版 歌词 主题曲 真人版 简谱 ed 动漫 '
    }
    return {
      loading: false,
      keyword: '未闻花名',
      compkeys: [
        { compWord: 'one', comp: 0, value: null },
        { compWord: 'two', comp: 0, value: null },
        { compWord: 'three', comp: 0, value: null },
        { compWord: 'four', comp: 0, value: null },
        { compWord: 'five', comp: 0, value: null },
        { compWord: 'six', comp: 0, value: null },
        { compWord: 'seven', comp: 0, value: null },
        { compWord: 'eight', comp: 0, value: null },
        { compWord: 'nine', comp: 0, value: null },
        { compWord: 'ten', comp: 0, value: null }
      ],
      inputKey: '',
      costTime: 123,
      tableData: [
        {
          midWord: 'midWord1',
          compWord: '片尾曲 歌曲 图片 中文版 歌词 主题曲 真人版 简谱 ed 动漫 '
        },
        {
          midWord: 'midWord2',
          compWord: '片尾曲 歌曲 图片 中文版 歌词 主题曲 真人版 简谱 ed 动漫 '
        },
        {
          midWord: 'midWord3',
          compWord: '片尾曲 歌曲 图片 中文版 歌词 主题曲 真人版 简谱 ed 动漫 '
        },
        {
          midWord: 'midWord4',
          compWord: '片尾曲 歌曲 图片 中文版 歌词 主题曲 真人版 简谱 ed 动漫 '
        },
        {
          midWord: 'midWord5',
          compWord: '片尾曲 歌曲 图片 中文版 歌词 主题曲 真人版 简谱 ed 动漫 '
        },
        {
          midWord: 'midWord6',
          compWord: '片尾曲 歌曲 图片 中文版 歌词 主题曲 真人版 简谱 ed 动漫 '
        },
        {
          midWord: 'midWord7',
          compWord: '片尾曲 歌曲 图片 中文版 歌词 主题曲 真人版 简谱 ed 动漫 '
        },
        {
          midWord: 'midWord8',
          compWord: '片尾曲 歌曲 图片 中文版 歌词 主题曲 真人版 简谱 ed 动漫 '
        },
        {
          midWord: 'midWord9',
          compWord: '片尾曲 歌曲 图片 中文版 歌词 主题曲 真人版 简谱 ed 动漫 '
        },
        {
          midWord: 'midWord10',
          compWord: '片尾曲 歌曲 图片 中文版 歌词 主题曲 真人版 简谱 ed 动漫 '
        }
      ],
      activeName: 'first',
      currentDate: new Date(),
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    }
  },
  methods: {
    Click(event) {
      if (this.inputKey) {
        if (this.status) {
          this.loading = false
          if (this.status == '0') {
            this.$alert('抱歉，该关键词未被收录！', '查询失败', {
              confirmButtonText: '确定'
            })
            this.inputKey = ''
          } else {
            this.$refs.search.style.display = 'none'
            this.$message({
              message: '已查询到相关信息，正在为您跳转……',
              type: 'success'
            })
          }
          this.$router.push({ path: '/dashboard' })
        } else {
          this.loading = true
        }
      } else {
        this.$message.error('关键词不能为空！')
      }
    }
  }
}
</script>
<style scoped>
.background {
  /* background */
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 150%;
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
  width: 660px;
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
  left: 13px;
  top: -4px;
  width: 100%;
  max-height: 103%;
  font-size: small;
  overflow: auto;
  border: none;
  padding: none;
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
  width: 327px;
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
