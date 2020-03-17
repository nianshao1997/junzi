<template>
  <div>
    <Nav></Nav>
    <show title="搜索结果" :tabs="false" :more="false"></show>
    <show :codes='codes' :title="search" v-show="codes" :more='false'></show>
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="18" :lg="16" :xl="15" class="bg-purple-dark grid-content">
        <div class="none" v-show="codes.length ==0">
          <div class="none-box">
            <h2>阿偶，<b class="a1">没有</b><b class="a2">{{search}}</b>，快换个老婆吧！</h2>
          </div>
        </div>
      </el-col>
    </el-row>
    <Top></Top>
  </div>
</template>

<script>
import getData from '../service/getData'
import {mapState} from 'vuex'
export default {
  name: "Rezult",
  props: ['id'],
  data() {
    return {
      codes:[]
    };
  },
  created(){
    this.handleData()
  },
  methods:{
    async handleData(){
      try {
        this.codes = await getData(`input/${this.id}`)
      } catch (error) {
        console.log(error)
        this.codes = []
      }
    }
  },
  watch:{
    '$route':'handleData',
    id(to){
      console.log(to)
      console.log(this.codes)
    }
  },
  computed:{
    ...mapState(['search'])
  }
};
</script>

<style lang="scss" scoped>
.a1{
  color: rgb(116, 113, 113);
}
.a2{
  $red:#fe6e66;
  color: $red;
}
.none{
  padding-top: 100px;
}
</style>