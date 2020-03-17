<template>
  <div>
    <transition name="el-zoom-in-top">
      <div class="wrapper" v-show="theShowSign" @click="cancleMask" @wheel.prevent @touchmove.prevent>
        <div>
          <div class="sign" @click.stop>
            <div class="sign-top">
              <div class="left">
                <span :class="{'register':true,'active':theSign}" @click="handleLogin">登录</span>
                <span :class="{'login':true,'active':!theSign}" @click="handleRegister">注册</span>
              </div>
              <span class="icon" @click="cancleMask">&#xe833;</span>
            </div>
            <div class="login-box" v-show="theSign">
              <div class="input">
                <el-input placeholder="请输入用户名" v-model="loginName" clearable></el-input>
              </div>
              <div class="input">
                <el-input placeholder="请输入密码" v-model="loginPassword" show-password></el-input>
              </div>
              <div class="about-password">
                <el-switch v-model="save" active-text="保存密码" inactive-text="不保存密码"></el-switch>
                <el-link type="info">？忘记密码</el-link>
              </div>
              <el-button class="btn-login" type="primary">登录</el-button>
            </div>
            <div class="register-box" v-show="!theSign">
                <span>基本信息（必填）</span>
                <div class="input"><el-input placeholder="用户名" v-model="registerName" clearable></el-input></div>
                <div class="input"><el-input placeholder="密码" v-model="registerPassword1" show-password></el-input></div>
                <div class="input"><el-input placeholder="密码" v-model="registerPassword2" show-password></el-input></div>
                <div class="input"> <el-input placeholder="电子邮件" v-model="email" clearable></el-input></div>
                <div class="input"><el-input placeholder="激活码" v-model="code" clearable></el-input></div>
                <div class="about-code">
                    <el-link>还没有激活码？</el-link>
                    <el-link type='info'>购买激活码</el-link>
                </div>
                <div class="promise">
                    <el-checkbox v-model="agree">同意注册协议</el-checkbox>
                    <el-button type='primary'>注册</el-button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Sign",
  data() {
    return {
      loginName: "",
      loginPassword: "",
      save: "",
      registerName:'',
      registerPassword1:'',
      registerPassword2:'',
      email:'',
      code:"",
      agree:true
    };
  },
  methods: {
    ...mapMutations(["muSign", "handleSign"]),
    handleLogin() {
      this.muSign(true);
    },
    handleRegister() {
      this.muSign(false);
    },
    cancleMask() {
      this.handleSign(false);
    }
  },
  computed: {
    ...mapState(["sign", "showSign"]),
    theSign() {
      return this.sign;
    },
    theShowSign() {
      return this.showSign;
    }
  }
};
</script>

<style scoped>
.wrapper {
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
}
.sign {
  width: 310px;
  background-color: #ffffff;
  margin-top: 50px;
  box-shadow: 0 0 8px gray;
}
.sign-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.register,
.login {
  margin-left: 20px;
  display: inline-block;
  padding: 5px 8px;
  cursor: pointer;
}
.active {
  background-color: #409eff;
  border-radius: 4px;
}
.icon {
  cursor: pointer;
  margin-right: 10px;
  transition: transform 0.2s;
}
.icon:hover {
  transform: scale(1.2);
}
.input {
  padding: 5px 10px;
  box-sizing: border-box;
}
.about-password {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
}
.btn-login {
  width: 60%;
  margin: 10px 0;
}
.promise{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 8px 0;
}
</style>