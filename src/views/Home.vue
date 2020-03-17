<template>
  <div>
    <Nav :theSearch="false" :findex=0></Nav>
    <el-input placeholder="请输入内容" v-model="input" class="input-size">
      <el-button slot="append" class="btn-color" icon="el-icon-search" @click="handleInput(input)"></el-button>
    </el-input>
    <p class="remind">温馨提示：使用简体中文搜索更准确</p>
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="16">
        <div class="kinds" @click="huiyuan">
          <div class="kind">
            <i class="icon">&#xe64f;</i>
            <span>VR</span>
          </div>
          <div class="kind">
            <i class="icon">&#xe604;</i>
            <span>分类</span>
          </div>
          <div class="kind">
            <i class="icon">&#xe605;</i>
            <span>人气榜</span>
          </div>
          <div class="kind">
            <i class="icon">&#xe603;</i>
            <span>下载榜</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <Actress :actress="actress"></Actress>
    <Show :codes="jing" title="精选推荐" :tabs="false" :more="false"></Show>
    <Show :codes="bang" title="榜单推荐" :kinds="kinds" moreTitle="更多作品"></Show>
    <Top></Top>
  </div>
</template>

<script>
// @ is an alias to /src
import Actress from "../components/Actress";
import getData from "../service/getData";
import search from "../service/search";
import feedback from "../service/feedback";

export default {
  name: "Home",
  components: {
    Actress
  },
  data() {
    return {
      input: "",
      kinds: ["新番榜", "人气榜", "下载榜"],
      actress: [],
      jing: [],
      bang: [],
      loading:null
    };
  },
  created() {
    this.loading = feedback.nsLoading()
    this.handleData();
  },
  methods: {
    async handleData() {
      try {
        this.actress = await getData("icon");
        this.jing = await getData("jing");
        this.bang = await getData("bang");
        console.log(this.actress);
      } catch (error) {
        console.log(error)
        feedback.nsMessage()
        this.actress = []
        this.jing = []
        this.bang = []
      }
    },
    handleInput(id) {
      let reg = /\s/g;
      id = id.replace(reg, "");
      if (id == "") return;
      search(id);
    },
    closeLoading(){
      this.loading.close()
    },
    huiyuan(){
     this.$notify.error({
          title: '会员专享',
          message: '你可以购买会员'
        });
    }
  },
  watch:{
    // bang(){
    //   this.loading.close()
    // }
    'bang':'closeLoading'
  }
};
</script>

<style lang="scss" scoped>
$pink: #fe6e66;
@media (min-width: 768px) {
  .input-size {
    width: 50%;
    margin-top: 16px;
  }
}
@media (max-width: 767px) {
  .input-size {
    width: 100%;
    margin-top: 16px;
  }
}
.btn-color {
  &:hover {
    background-color: $pink;
    color: #fff;
  }
}
.remind {
  text-align: center;
  color: $pink;
  font-size: 14px;
  margin-top: 20px;
}
.kinds {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
}
.kind {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
.icon {
  padding-bottom: 10px;
  font-size: 50px;
  transition: transform 0.8s;
}
.kind:hover {
  cursor: pointer;
  $bg-color: #fe6e66;
  .icon {
    transform: rotateZ(30deg);
    color: $bg-color;
  }
  span {
    color: $bg-color;
  }
}
</style>
