<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="18" :lg="16" :xl="15">
        <div class="title">
          <div class="title-col"></div>
          <span>{{title}}</span>
        </div>
        <div class="tabs" v-if="tabs" v-show="top">
          <div class="tab" v-for="(item,index) in kinds" :key="index" @click="huiyuan">{{item}}</div>
        </div>
        <div class="show">
          <div class="show-box" v-for="(item,index) in codes" :key="index">
            <div class="img">
              <img :src="item.img" :alt="item.t" @click="$router.push('/av/' + item.id)" />
            </div>
            <span class="code">{{item.t}}</span>
            <div class="sub">
              <span class="sub-code">{{item.b}}</span>
              <span class="time">2020-01-07</span>
            </div>
          </div>
        </div>
        <div class="tabs" v-if="tabs" v-show="!top">
          <div class="tab" v-for="(item,index) in kinds" :key="index" @click="huiyuan">{{item}}</div>
        </div>
        <div class="more" v-if="more">
          <el-button class="more-btn" type="danger" plain @click="$router.push('/zuopin')">{{ moreTitle }}</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Show",
  props: {
    kinds: {
      type: Array
    },
    top: {
      type: Boolean,
      default: true
    },
    more: {
      type: Boolean,
      default: true
    },
    moreTitle: {
      type: String,
      default: "更多"
    },
    title: {
      type: String,
      default: "推荐"
    },
    tabs: {
      type: Boolean,
      default: true
    },
    codes: {
      type: Array
    }
  },
  data() {
    return {};
  },
  methods: {
    // navToAv(id){
    //   this.$router.push('/av/' + id)
    // }
    huiyuan(){
      this.$notify.error({
          title: '会员专享',
          message: '你可以购买会员'
        });
    }
  }
  //  watch: {
  //   '$route' (to,from){
  //     console.log(to)
  //     // this.$router.push(to.path)
  //     console.log( '旧' + from)
  //   }
  // }
};
</script>

<style lang="scss" scoped>
body{
  overflow: auto;
}
$pink: #fe6e66;
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
.show {
  @media (min-width: 768px) {
    .show-box {
      width: calc(100% / 6);
    }
  }
  @media (max-width: 767px) {
    .show-box {
      width: calc(100% / 3);
    }
  }
  .show-box {
    float: left;
    padding: 2px;
    box-sizing: border-box;
    .img {
      width: 100%;
      padding-top: 140%;
      position: relative;
      img {
        object-fit: cover;
        position: absolute;
        cursor: pointer;
        top: 0;
        width: 100%;
        height: 100%;
        left: 0;
      }
    }
    .code {
      display: flex;
      justify-content: start;
      font-weight: bold;
      color: #333;
    }
    .sub {
      font-size: 12px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      white-space: nowrap;
      overflow: hidden;
      .time {
        color: #bbbbbb;
      }
      .sub-code {
        color: #ffb2b2;
      }
    }
  }
}
.tabs {
  clear: both;
  display: flex;
  padding-left: 2px;
  padding-bottom: 4px;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    .tab {
      padding: 0 2px;
    }
  }
  @media (min-width: 768px) {
    .tab {
      padding: 4px 10px;
    }
  }
  .tab {
    // $pink: #fe6e66;
    border: 1px solid $pink;
    margin-right: 2px;
    color: $pink;
    white-space: nowrap;
    margin-top: 2px;
    cursor: pointer;
    &:hover{
      background-color: $pink;
      color: #ffffff;
    }
  }
}
.more {
  clear: both;
  .more-btn {
    width: 300px;
  }
}
</style>