<template>
  <div>
      <Nav :findex=2></Nav>
      <Actress :actress='actress' :top='false'></Actress>
  </div>
</template>

<script>
import Actress from '../components/Actress'
import getData from '../service/getData';
export default {
    name:'yanyuan',
    components:{
        Actress
    },
    data(){
        return{
            actress:[]
        }
    },
    created(){
        this.handleData()
    },
    methods:{
        handleData(){
            getData('icon').then(res=>{
                this.actress = res
                console.log(this.actress)
            }).catch(err=>{
                this.actress = []
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>