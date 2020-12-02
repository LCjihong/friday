<template>
<div>
    <!-- <sidebar></sidebar> -->
    <div class="oebox">
        <!-- <div class="oebox1">
            <p>订单评价</p>
        </div> -->
        <div class="oebox4">
             <div class="oebox10" v-for="(x,index) in index3" :key='index'>
                <div class="oebox2">
                    <div clss="oebox3">
                        <img :src="oemessage2" alt="">
                    </div>
                    <p>{{x.oemessage1}}</p>
                </div>
                <div class="oebox5">
                    <div class="oebox6">
                        <span class="demonstration">商品评分</span>
                        <div>
                            <el-rate v-model="value1"></el-rate>
                        </div>
                    </div>
                    <div class="oebox7">
                        <span>评价商品</span>
                        <div class="oebox8">
                            <el-input type="textarea" placeholder="商品评价，最少10个字，最多50个字" v-model="textarea"
                                size="medium "
                                maxlength="50"
                                minlength="10" show-word-limit>
                            </el-input>
                        </div>
                    </div>
                    <div class="oebox9">
                        <p>晒图片</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from '../Sidebar';
export default {
    name:'OrderEvaluate',
    components:{
        Sidebar,
    },
    data(){
        return {
            value1: null,
            textarea: '',
            oemessage2: 'http://renjihong.zone:2000/PersonalCenter/oe1.png',
            index3:[
                {
                    oemessage1: '珍享 南非进口红心葡萄柚 西柚柚子',
                },{
                    oemessage1: '珍享 南非进口红心葡萄柚 西柚柚子',
                }
            ]
        }
    },
    methods:{
    }
}
</script>

<style scoped>
.oebox{
    float:left;
    width:1083px;
    /* height:625px; */
    border:1px solid #e7e7e7;
    padding-bottom:40px;
    box-sizing: border-box;
    /* position: absolute; */
}
.oebox1{
    height:56px;
    line-height: 56px;
    padding-left:20px;
    font-size:17px;
    color:#494949;
    border-bottom:1px solid #e9e9e9;
    box-sizing: border-box;
    /* margin-bottom:20px; */
}
.oebox2{
    float: left;
    box-sizing: border-box;
}
.oebox3{
    width:260px;
    height:260px;
    border:1px solid #e7e7e7;
}
.oebox3>img{
    width:80%;
    margin:10%;
}
.oebox2>p{
    width:260px;
    margin-top:20px;
    text-align: center;
    color:#666666;
}
.oebox5{
    float: left;
    margin-left:102px;
    color:#666666;
    font-size: 15px;
}
.oebox6{
    height:43px;
    line-height: 43px;
    margin-bottom:20px;
}
.oebox6>div{
    display:inline-block;
    margin-left:20px;
}
.oebox7>span{
    float: left;
}
.oebox7>div{
    width:579px;
    height:100px;
    float: left;
    margin-left:20px;
}
.oebox10{
    width:100%;
    height:360px;
    padding-top:20px;
    padding-left:20px;
    box-sizing: border-box;
    border-bottom:1px dashed #dedede;
}
</style>
