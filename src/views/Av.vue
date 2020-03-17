<template>
  <div>
    <Nav></Nav>
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="18" :lg="16" :xl="15">
        <div class="card">
          <h2 class="card-title">{{av.num }}</h2>
          <div class="card-main">
            <div class="img1">
              <div class="img2">
                <img class="img3" :src="av.poster" :alt="av.num" />
              </div>
            </div>
            <p class="code">{{av.num}}</p>
            <p>
              主演:
              <b class="name">{{av.actressname}}</b>
            </p>
            <p>
              发行时间:
              <b class="time">{{av.selltime}}</b>
            </p>
            <p>
              总片长:
              <b class="long">{{av.long}}</b>
            </p>
            <p>
              类型：
              <b>高清,独占,白人女優,单体,爆乳,美少女,风俗娘,中出,ブランドストア30％OFF！</b>
            </p>
            <p>{{av.t}}</p>
            <div class="card-tabs">
              <div class="card-tab" v-for="(item,index) in tabs" :key="index" @click="huiyuan">{{item}}</div>
            </div>
            <div class="btns">
              <el-button type="danger" @click="huiyuan">磁力链接</el-button>
              <el-button type="primary" @click="huiyuan">迅雷链接</el-button>
            </div>
          </div>
        </div>
        <div class="title">
          <div class="title-col"></div>
          <span>参演演员</span>
        </div>
        <div class="aa">
          <img
            :src="av.icon"
            :alt="av.actressname"
            @click="pinyin(av.actressname)"
          />
          <h3>{{av.actressname}}</h3>
        </div>
      </el-col>
    </el-row>
    <Show title="猜你喜欢" :codes="av.guesslike" :more="false" :tabs="false"></Show>
    <Show :title="av.actressname" :codes="av.actress" :more="false" :tabs="false"></Show>
    <Top></Top>
    <h1>{{id}}</h1>
  </div>
</template>

<script>
import getData from "../service/getData";
const pinyin = require("pinyin");
export default {
  name: "Av",
  props: ["id"],
  data() {
    return {
      tabs: [
        "高清",
        "独占",
        "白人女友",
        "单体",
        "美乳",
        "美女",
        "风俗娘",
        "中出",
        "ブランドストア30％OFF！"
      ],
      av: {}
    };
  },
  created() {
    // let id = this.$route.params.id
    // console.log(id)
    this.handleData();
  },
  methods: {
    async handleData() {
      // let id = this.$route.params.id
      this.av = await getData(`a_details/${this.id}`);
    },
    pinyin(id) {
      let rel = pinyin(id, {
        style: pinyin.STYLE_FIRST_LETTER
      }).reduce((p, c) => p + c)
      console.log(rel)
      this.$router.push(`/ren/${rel}`)
    },
    huiyuan(){
      this.$notify.error({
          title: '会员专享',
          message: '你可以购买会员'
        });
    }
  },
  watch: {
    $route: "handleData"
    // id(to){
    //   console.log(to)
    //   this.handleData(to)
    // }
  }
};
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .aa {
    width: calc(100% / 6);
  }
}
@media (max-width: 767px) {
  .aa {
    width: calc(100% / 3);
  }
}

.aa {
  img {
    width: 100%;
    border-radius: 50%;
    transition: transform 0.4s;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
  h3 {
    text-align: center;
  }
}
.card {
  display: inline-block;
  background-color: #ffffff;
  box-shadow: 0 0 4px gray;
  .card-title {
    text-align: left;
    padding-left: 4px;
  }
  .card-main {
    @media (min-width: 768px) {
      .img1 {
        width: calc(100% / 4);
      }
    }
    @media (max-width: 767px) {
      .img1 {
        width: calc(100% / 2);
      }
    }
    .img1 {
      float: left;
      margin-right: 8px;
      .img2 {
        width: 100%;
        padding-top: 140%;
        position: relative;
        overflow: hidden;
        .img3 {
          object-fit: cover;
          position: absolute;
          cursor: pointer;
          top: 0;
          width: 100%;
          height: 100%;
          left: 0;
          float: left;
          transition: transform 0.4s;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
    p {
      text-align: left;
      font-size: 14px;
      padding: 10px;
      border-bottom: 1px dotted #dfdfdf;
    }
    .code {
      border-top: 1px dotted #dfdfdf;
    }
    .card-tabs {
      text-align: left;
      padding: 20px 0;
      @media (min-width: 768px) {
        .card-tab {
          padding: 6px 4px;
        }
      }
      @media (max-width: 767px) {
        .card-tab {
          padding: 2px;
        }
      }
      .card-tab {
        text-align: left;
        display: inline-block;
        font-size: 14px;
        margin: 4px;
        border: 1px solid #fe6e66;
        color: #fe6e66;
        cursor: pointer;
        &:hover{
          background-color: #fe6e66;
          color: #ffffff;
        }
      }
    }
  }
}
.title {
  height: 38px;
  display: flex;
  align-items: center;
  background-color: rgb(253, 250, 250);
  margin-top: 10px;
  .title-col {
    width: 3px;
    height: 100%;
    background-color: #fe6e66;
    margin-right: 10px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
}
</style>