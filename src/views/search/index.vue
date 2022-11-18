<template>
  <div
    v-loading="loading"
    class="background"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(255, 255, 255, 0.4)"
  >
    <el-container class="animateBg">
      <el-main class="myAnimate">
        <compAnimate />
      </el-main>
    </el-container>
    <div ref="search" class="search">
      <el-input
        v-model="keywords"
        class="input"
        placeholder="请输入您想查询的关键词"
        @keyup.enter.native="searchWord"
      />
      <div class="button">
        <el-button type="primary" icon="el-icon-search" @click="searchWord" />
      </div>
    </div>
    <div class="wave">
      <Wave />
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { getResult } from "@/api/search";
import compAnimate from "./chart/compAnimate";
import Wave from "./wave/Wave";
export default {
  components: {
    compAnimate,
    Wave,
  },
  data() {
    return {
      keywords: "",
      status: "",
      loading: false,
    };
  },
  methods: {
    searchWord(event) {
      if (this.keywords) {
        var time1=Date.now()
        var res;
        this.loading = true;
        store.keyword = this.keywords
        console.log(store.keyword);
        getResult(encodeURIComponent(store.keyword)).then((response) => {
          res = response;
          store.time = res.LocalTime
          store.compWords = res.comp_word
          store.wordCount = res.word_statistics
          store.costTime = (Date.now()-time1)/1000
          store.midWords = Object.values(res.midwords_info_list)
          store.midComp = Object.keys(res.midwords_info_list)
          store.weight = Object.values(res.weight_dict)
          console.log(store.weight)
          if (!res) {
            console.log(res);
            this.loading = false;
            this.$alert("抱歉，该关键词未被收录！", "查询失败", {
              confirmButtonText: "确定",
            });
            this.keywords = "";
          } else {
            this.$refs.search.style.display = "none";
            this.$message({
              message: "已查询到相关信息，正在为您跳转……",
              type: "success",
            });
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
  height: 100%;
  opacity: 1;
  background: #fff;
  overflow: auto;
}
.animateBg {
  position: absolute;
  left: 0px;
  top: 8px;
  width: 1200px;
  height: 360px;
  opacity: 1;
  overflow: hidden;
}
.myAnimate {
  position: absolute;
  left: 115px;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.search {
  position: absolute;
  left: 0px;
  top: 245px;
  width: 1200px;
  height: 160px;
  overflow: hidden;
}
.button {
  position: absolute;
  left: 985px;
  top: 50px;
  width: 33px;
  height: 30px;
  opacity: 1;
  border: NaNpx solid #c0d2e2;
}
.input {
  /* input */
  position: absolute;
  left: 400px;
  top: 50px;
  width: 600px;
  height: 0px;
  opacity: 1;
  border: NaNpx solid #c0d2e2;
}
.wave {
  position: absolute;
  left: 205px;
  top: 425px;
  width: 1000px;
  height: 200px;
  overflow: hidden;
}
</style>
