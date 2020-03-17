<template>
    <div>
        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="22" :md="18" :lg="16" :xl="14">
                <div class="title">
                    <div class="title-col"></div>
                    <span>{{title}}>></span>
                </div>
                <p class="remind" v-if="top">大家经常搜索的一些日本知名演员Top100</p>
                <div class="actress">
                    <div class="actress-box" v-for="(item,index) in actress" :key="index + 'i'">
                        <img :src="item.img" :alt="item.name" @click="$router.push('/ren/' + item.id)">
                        <span class="actress-name">{{item.name}}</span>
                    </div>
                </div>
                <!-- <el-button style="width:300px" type="danger" plain>更多演员</el-button> -->
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:'Actress',
    props:{
        actress:{
            type:Array
        },
        title:{
            type:String,
            default:'演员'
        },
        top:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return{
            // navToRen(id){
            //     this.$router.push('/ren/' + id)
            // }
        }
    }
}
</script>

<style lang="scss" scoped>
$pink:#fe6e66;
.title{
    height: 38px;
    display: flex;
    align-items: center;
    background-color: rgb(253, 250, 250);
    .title-col{
        width: 3px;
        height: 100%;
        background-color: #fe6e66;
        margin-right: 10px;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }
}
.remind{
    text-align: center;
    font-size: 14px;
    color: $pink;
    margin-bottom: 14px;
}
.actress{
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 768px) {
        .actress-box{
            width: calc(100% / 6);
        }
    }
    @media (max-width: 767px) {
        .actress-box{
            width: calc(100% / 4);
        }
    }
    .actress-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            border-radius: 50%;
            cursor: pointer;
            width: 100%;
            transition: transform .4s;
            &:hover{
                transform: scale(1.1);
            }
        }
        .actress-name{
            font-weight: bold;
            font-size: 14px;
            margin: 5px 0;
        }
    }
}
</style>