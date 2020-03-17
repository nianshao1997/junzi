<template>
  <div v-show="show">
    <div class="top">
      <el-button type="danger" icon="el-icon-arrow-up" plain circle @click="toTop"></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  methods: {
    initHeight() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.show = scrollTop > 200 ? true : false;
    },
    toTop() {
      window.scrollTo({
        top: 30,
        left: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  position: fixed;
  right: 20px;
  bottom: 50px;
  z-index: 20;
}
</style>