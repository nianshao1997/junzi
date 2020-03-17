<template>
  <div>
    <div class="nav-wrapper">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="16" class="bg-purple-dark grid-content">
          <div class="nav-top">
            <span style="color:#fff;">限时免费注册</span>
            <div class="register-login">
              <span class="top-register" @click="handleRegister">注册</span>
              <span class="icon qq top-login" @click="handleLogin">&#xe644;</span>
              <span class="top-login" @click="handleLogin">登录</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="nav-wrapper" :class="{fixed:isFixed}">
      <el-row type="flex" justify="center" id="boxFixed">
        <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="16" class="bg-purple-dark grid-content">
          <div class="nav-bottom">
            <span class="icon menu hidden-sm-and-up" @click="showList = !showList">&#xe647;</span>
            <h2 @click="$router.push('/')">窈窕君子</h2>
            <ul class="tabs hidden-xs-only">
              <li
                v-for="(item,index) in tabs"
                :key="index"
                :class="{active:findex == index,tab:true}"
                @click="handleList(index)"
              >{{ item }}</li>
            </ul>
            <div
              class="search icon"
              @click="showInput = !showInput"
              v-show="theSearch && !showInput"
            >&#xe602;</div>
            <div
              class="search icon"
              @click="showInput = !showInput"
              v-show="theSearch && showInput"
            >&#xe833;</div>
            <transition name="el-zoom-in-top">
              <div class="search-input" v-show="showInput">
                <el-input placeholder="请输入内容" v-model="input" class="input-size">
                  <el-button slot="append" icon="el-icon-search" @click="handleInput(input)"></el-button>
                </el-input>
              </div>
            </transition>
            <el-collapse-transition>
              <ul class="list hidden-sm-and-up" v-show="showList">
                <li
                  :class="{'list-item':true,'list-active':index == findex}"
                  @click="handleList(index)"
                  v-for="(item,index) in list"
                  :key="item"
                >{{item}}</li>
              </ul>
            </el-collapse-transition>
          </div>
        </el-col>
      </el-row>
    </div>
    <Sign></Sign>
  </div>
</template>

<script>
import Sign from "./Sign";
import { mapMutations } from "vuex";
import search from '../service/search';
export default {
  name: "Nav",
  props: {
    theSearch: {
      type: Boolean,
      default: true
    },
    findex:{
      type:Number,
      default:3
    }
  },
  components: {
    Sign
  },
  data() {
    return {
      showSearch: false,
      tabs: ["首页", "作品", "演员"],
      input: "",
      isFixed: false,
      offsetTop: 0,
      showInput: false,
      list: ["首页", "作品", "演员"],
      showList: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
    this.$nextTick(() => {
      this.offsetTop = document.querySelector("#boxFixed").offsetTop;
    });
  },
  methods: {
    ...mapMutations(["handleSign", "muSign","handleSearch"]),
    handleLogin() {
      this.handleSign(true);
      this.muSign(true);
    },
    handleRegister() {
      this.handleSign(true);
      this.muSign(false);
    },
    initHeight() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > this.offsetTop ? true : false;
    },
    handleInput(id) {
      let reg = /\s/g
      id = id.replace(reg,'')
      if(id == '') return
      search(id)
    },
    handleList(index){
      if(index == 0){
        this.$router.push('/')
      }else if(index == 1){
        this.$router.push('/zuopin')
      }else{
        console.log(index)
        this.$router.push('/yanyuan')
      }
      
    }
  },
  computed: {
    
  }
};
</script>

<style scoped lang='scss'>
* {
  margin: 0;
  padding: 0;
}
.nav-wrapper {
  background-color: #827970;
  z-index: 99;
}
.nav-top {
  display: flex;
  line-height: 30px;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  .top-register,
  .top-login {
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      color: #ffffff;
      transform: scale(1.1);
    }
  }
}
.register-login {
  display: flex;
  align-items: center;
  color: #fe6e66;
}
h2 {
  color: #fe6e66;
  cursor: pointer;
  transition: all .4s;
  &:hover{
    color: #ec3427;
    transform: rotateX(20deg) rotateY(20deg) scale(1.1);
  }
}
.menu {
  font-size: 26px;
  margin-right: 8px;
  cursor: pointer;
}
.tabs {
  list-style: none;
  display: flex;
  cursor: pointer;
}
.tab {
  height: 50px;
  margin-left: 24px;
  padding: 0 22px;
  font-weight: bold;
  color: #ffffff;
  &:hover {
    background-color: #ffffff;
    color: #333333;
  }
}
.active {
  background-color: #fe6e66 !important;
  color: #ffffff !important;
}
.qq {
  font-size: 24px;
  cursor: pointer;
  margin-left: 20px;
}
.nav-bottom {
  display: flex;
  position: relative;
  height: 50px;
  line-height: 50px;
  width: 100%;
}
.search {
  position: absolute;
  right: 20px;
  font-size: 20px;
  padding-right: 10px;
  &:hover {
    color: #409eff;
    cursor: pointer;
  }
}
.search-input {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 100;
}
@media (min-width: 768px) {
  .input-size {
    width: 50%;
  }
}
@media (max-width: 767px) {
  .input-size {
    width: 100%;
  }
}
.fixed {
  position: fixed !important;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
}
.list {
  position: absolute;
  top: 50px;
  list-style: none;
  width: 100%;
  text-align: start;
  cursor: pointer;
  z-index: 99;
}
.list-item {
  box-sizing: border-box;
  background-color: #827970;
}
.list-active {
  color: #fe6e66;
}
.el-col {
  padding: 0 4px;
}
.bg-purple-dark {
  background: #827970;
}
</style>