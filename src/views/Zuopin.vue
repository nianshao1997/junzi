<template>
  <div>
    <Nav :findex=1></Nav>
    <Show :codes="all" :more="false" :tabs="false" :title="title"></Show>
    <Top></Top>
  </div>
</template>

<script>
import getData from "../service/getData";
import feedback from '../service/feedback'
export default {
  name: "zuopin",
  data() {
    return {
      all: [],
      title: "本站收录的所有番号",
      loading: null
    };
  },
  created() {
    this.loading = feedback.nsLoading()
    this.handleData();
  },
  methods: {
    handleData() {
      getData("all")
        .then(res => {
          this.all = res;
        })
        .catch(err => {
          console.log(err);
          this.loading.close();
        feedback.nsMessage()
          let interval = setInterval(() => {
            getData("all").then(res => {
              this.all = res;
              if (this.all.length > 0) {
                clearInterval(interval);
              }
            });
          }, 2000);
        });
    }
  },
  watch: {
    all() {
      this.loading.close();
    }
  }
};
</script>

<style lang="scss">
</style>