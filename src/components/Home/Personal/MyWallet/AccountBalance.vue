<template>
<div>
    <sidebar></sidebar>
    <div class="mibox">
        <div class="mibox1">
            <span>账户余额 : </span>
            <div class="mibox2">
                <span>{{iomessage1}}</span>
            </div>
        </div>
        <div class="mibox3">
            <p>请选择充值的金额 : </p>
            <div class="mibox4">
                <!-- <p>请选择充值的金额 : </p> -->
                <div @click="abhandle1">{{money1}}</div>
                <div @click="abhandle1">{{money2}}</div>
                <div @click="abhandle1">{{money3}}</div>
            </div>
            <div class="mibox5">
                <p>充值有礼</p>
            </div>
            <div class="mibox6" v-for="(x,index) in abdiv1" :key='index'>
                <div class="mibox7">
                    <p>充值{{x.money}}送 : </p>
                </div>
                <div class="mibox8">
                    <div class="mibox9">
                        <img :src="abmessage1" alt="">
                    </div>
                    <div class="mibox10">
                        <p>{{x.index1}}</p>
                        <p>价值 : {{x.index2}}</p>
                    </div>
                </div>
            </div>
        <div class="mibox11" @click="abhandle2">立即充值</div>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from '../Sidebar';
export default {
    name:'MyBill',
    components:{
        Sidebar,
    },
    data(){
        return {
            money1:'500元',
            money2:'1000元',
            money3:'2000元',
            iomessage1:'￥240',
            abdiv1:[{
                money:'500元',
                index1:'新疆哈密瓜25kg',
                index2:'500',
            },{
                money:'500元',
                index1:'新疆哈密瓜25kg',
                index2:'500',
            }],
            model1:'',
            abmessage1: 'http://renjihong.zone:2000/PersonalCenter/head.png',
        }
    },
    methods:{
        abhandle1(e){
            for(var i = 0; i < 3; i++){
                e.path[1].children[i].style.background = "white"
            };
            e.target.style.background="red";
            this.model1= e.target.innerText
            // console.log(e.target.innerText)
            console.log(this.model1)
        },
        abhandle2(){
            this.$router.push({
                path:'/',
                // params:{    // query get传参  params post传参
                //     text1:this.model1,
                // }
            });
            console.log(this.model1)
        }
    },
}
</script>

<style scoped>
.mibox{
    float: left;
    width:1083px;
    height:625px;
    border:1px solid #e7e7e7;
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
    float: left;
    font-size: 17px;
    margin-right:40px;
    color:#f08200;
}
.mibox3{
    padding:40px;
    box-sizing: border-box;
    color:#212121;
    font-size: 17px;
}
.mibox3>p{
    margin-bottom:19px;
}
.mibox4>div{
    width:113px;
    height:32px;
    line-height: 32px;
    text-align: center;
    border:1px solid #d4d4d4;
    display:inline-block;
    margin-right:37px;
    cursor: pointer;
}
.mibox5>p{
    color:#f08200;
    margin-top:40px;
}
.mibox5{
    margin-bottom:20px;
}
.mibox6{
    /* float: left; */
    display: inline-block;
    width:358px;
    height:191px;
    border:1px solid #d4d4d4;
    padding:20px;
    box-sizing: border-box;
    margin-right:40px;
}
.mibox9{
    float: left;
    width:156px;
    height:143px;
    margin-bottom:10px;
}
.mibox9>img{
    width:80%;
    margin:10%;
}
.mibox10{
    float: left;
    padding-top:40px;
}
.mibox10>p{
    height:35px;
    line-height: 35px;
}
.mibox11{
    width:150px;
    height:50px;
    line-height: 50px;
    background:#f08200;
    color:white;
    text-align: center;
    margin-top:20px;
    border-radius: 4px;
    font-size: 18px;
}
</style>

