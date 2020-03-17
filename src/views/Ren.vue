<template>
  <div>
    <Nav></Nav>
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="18" :lg="16" :xl="15">
        <div class="card">
          <h2 class="card-title">{{ actress.title }}</h2>
          <div class="card-main">
            <div class="img1">
              <div class="img2">
                <img class="img3" :src="actress.icon" alt />
              </div>
            </div>
            <p class="code">出道至今大约999个作品</p>
            <p>
              中文名:
              <b class="name">{{ actress.cname}}</b>
            </p>
            <p>
              三围:
              <b class="time">{{actress.sanwei}}</b>
            </p>
            <p>
              生日:
              <b class="long">{{ actress.birthday}}</b>
            </p>
            <p>
              类型：
              <b>高清,独占,白人女優,单体,爆乳,美少女,风俗娘,中出,ブランドストア30％OFF！</b>
            </p>
            <p>{{ actress.b}}</p>
            <div class="card-tabs">
              <div class="card-tab" v-for="(item,index) in tabs" :key="index" @click="huiyuan">{{item}}</div>
            </div>
            <div class="btns">
              <el-button type="danger" @click="huiyuan">磁力链接</el-button>
              <el-button type="primary" @click="huiyuan">迅雷链接</el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <Show :title="actress.cname" :more="false" :kinds="actress.kinds" :codes='actress.showavs'></Show>
    <Top></Top>
  </div>
</template>

<script>
import getData from '../service/getData';
export default {
  name: "Av",
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
      actress:[]
    };
  },
  created(){
    let id = this.$route.params.id
    this.handleData(id)
  },
  methods:{
    async handleData(id){
      this.actress = await getData(`w_details/${id}`)
    },
    huiyuan(){
      this.$notify.error({
          title: '会员专享',
          message: '你可以购买会员'
        });
    }
  }
};
</script>

<style lang="scss" scoped>
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
        padding-top: 100%;
        position: relative;
        .img3 {
          object-fit: cover;
          position: absolute;
          // cursor: pointer;
          top: 0;
          width: 100%;
          height: 100%;
          left: 0;
          float: left;
          border-radius: 50%;
        }
      }
    }
    p {
      text-align: left;
      font-size: 14px;
      padding: 10px;
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
</style>