<template>
<div>
    <!-- <sidebar></sidebar> -->
    <div class="mibox">
        <!-- <div class="mibox1">
            <span>积分订单</span>
            <div class="mibox2">
                <span>当前积分：</span>
                <span>{{iomessage1}}</span>
            </div>
        </div> -->
        <div class="mibox3" v-for="(x,index) in begin" :key='index'>
            <div class="mibox4">
                <div class="mibox5">
                    <span>订单号 : {{x.iomessage2}}</span>
                    <span>下单日期 : {{x.iomessage3}}</span>
                    <div class="mibox6">
                        <span>订单状态 : </span>
                        <span>{{x.iomessage4}}</span>
                    </div>
                </div>
                <div class="mibox7">
                    <div class="mibox9">
                        <div class="mibox8">
                            <img :src='x.iomessage5' alt="">
                        </div>
                        <span>{{x.iomessage6}}</span>
                    </div>
                    <div class="mibox10">
                        <span>{{x.iomessage7}}个装</span>
                        <span>x{{x.iomessage8}}</span>
                    </div>
                    <div class="mibox11">
                        <span>积分 : {{x.iomessage9}}</span>
                    </div>
                    <div class="mibox12">
                        <router-link to="/personal/integraldata">查看详情</router-link>
                        <span @click="iohandle1">删除订单</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="block mibox13">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="5"
            layout="prev, pager, next, jumper"
            :total="50">
            </el-pagination>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from '../Sidebar'
export default {
    name:'MyBill',
    components:{
        Sidebar,
    },
    data(){
        return {
            iomessage1:'240',
            currentPage3: 1,
            begin:[{
                iomessage2:'150319690000',
                iomessage3:'2015.04.09 18:06:06',
                iomessage4:'已完成',
                iomessage5: 'http://renjihong.zone:2000/PersonalCenter/oe1.png',
                iomessage6: '云南昭通丑苹果 6个装',
                iomessage7:'6',
                iomessage8:'1',
                iomessage9:'58',
            },{
                iomessage2:'150319690000',
                iomessage3:'2015.04.09 18:06:06',
                iomessage4:'已完成',
                iomessage5: 'http://renjihong.zone:2000/PersonalCenter/oe1.png',
                iomessage6: '云南昭通丑苹果 6个装',
                iomessage7:'6',
                iomessage8:'1',
                iomessage9:'58',
            },{
                iomessage2:'150319690000',
                iomessage3:'2015.04.09 18:06:06',
                iomessage4:'已完成',
                iomessage5: 'http://renjihong.zone:2000/PersonalCenter/oe1.png',
                iomessage6: '云南昭通丑苹果 6个装',
                iomessage7:'6',
                iomessage8:'1',
                iomessage9:'58',
            },{
                iomessage2:'150319690000',
                iomessage3:'2015.04.09 18:06:06',
                iomessage4:'已完成',
                iomessage5: 'http://renjihong.zone:2000/PersonalCenter/oe1.png',
                iomessage6: '云南昭通丑苹果 6个装',
                iomessage7:'6',
                iomessage8:'1',
                iomessage9:'58',
            },{
                iomessage2:'150319690000',
                iomessage3:'2015.04.09 18:06:06',
                iomessage4:'已完成',
                iomessage5: 'http://renjihong.zone:2000/PersonalCenter/oe1.png',
                iomessage6: '云南昭通丑苹果 6个装',
                iomessage7:'6',
                iomessage8:'1',
                iomessage9:'58',
            },]
        }
    },
    methods:{
        iohandle1(){            // 删除订单

        },
        handleSizeChange(val) {         // page-size 改变时会触发
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {      // current-change current-page改变时会触发
            console.log(`当前页: ${val}`);
        }
        },
    beforeMount(){
      this.$emit('integral',999999)
    },
}
</script>

<style scoped>
.mibox{
    float: left;
    width:1083px;
    height:1079px;
    position: relative;
    margin-bottom:40px;
}
.mibox1{
    height:56px;
    line-height: 56px;
    padding-left:20px;
    border-bottom:1px solid #e7e7e7;
}
.mibox1>span:nth-child(1){
    float: left;
    font-size: 17px;
}
.mibox2{
    float: right;
    font-size: 17px;
    margin-right:40px;
}
.mibox2>span:nth-child(2){
    color:#f08200;
}
.mibox3{
    padding:20px 20px 0px 20px;
    box-sizing: border-box;
}
.mibox4{
    width:1046px;
    height:168px;
    border:1px solid #e7e7e7;
}
.mibox5{
    width:100%;
    height:46px;
    line-height: 46px;
    background:#f2f2f2;
    padding:0px 20px;
    box-sizing: border-box;
}
.mibox5>span:nth-child(1){
    float:left;
}
.mibox5>span:nth-child(2){
    float:left;
    margin-left:180px;
}
.mibox6{
    float:right;
}
.mibox6>span:nth-child(2){
    color:#f08200;
}
.mibox7{
    width:100%;
    height:120px;
    /* padding:20px 0px 20px 20px; */
    box-sizing: border-box;
}
.mibox9{
    float: left;
    width:300px;
    height:120px;
    line-height: 120px;
    margin-left:20px;
}
.mibox8{
    width:78px;
    height:78px;
    border:1px solid #f2f2f2;
    float: left;
    margin-right:20px;
    margin-top:20px
}
.mibox8>img{
    width:80%;
    margin:10%;
}
.mibox10{
    float: left;
    width:400px;
    height:100%;
    line-height:120px;
    text-align: center;
}
.mibox10>span:nth-child(1){
    margin-right:100px;
}
.mibox11{
    float: left;
    width:180px;
    height:100%;
    line-height: 120px;
    text-align: center;
    border-left:1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
}
.mibox12{
    padding-top:20px;
    box-sizing: border-box;
}
.mibox12>a{
    display:block;
    text-align: center;
    color:#4b943d;
}
.mibox12>span{
    width:90px;
    height:30px;
    line-height:30px;
    background:#f08200;
    display:inline-block;
    margin-left:30px;
    color:white;
    text-align: center;
    margin-top:10px;
    border-radius:4px;
}
.mibox13{
    /* margin:20px 0px 20px 20px; */
    position: absolute;
    left:20px;
    bottom:20px;
    color:#666666;
}
</style>

