<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <Nav></Nav> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <transition name="bounce">
    <router-view />
    </transition>
    <div class="foot">
      <p>好色居士，最新番号作品迅雷下载ed2k磁力链接地址在线观看,作品封面图片全部合集</p>
      <p>陕ICP备16018165号</p>
    </div>
  </div>
</template>

<script>
// import Nav from './components/Nav'
export default {
  components: {
    // Nav
  }
};
</script>

<style lang="scss">
@import './style/common.scss';
$ns:#fe6e66;
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.foot{
  font-size: 12px;
  padding: 30px 0;
}
// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
