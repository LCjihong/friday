<template>
<div>
    <!-- <sidebar></sidebar> -->
    <div>
        <div class="macc">
            <div class="maccbox1">
                <div class="maccbox2">
                    <img src="http://renjihong.zone:2000/PersonalCenter/head.png" alt="">
                </div>
                <span>你好，</span>
                <span>
                   <router-link to="/personal/personaldata">{{maccdiv1}}>></router-link>
                </span>
            </div>
            <div class="maccbox3">
                <p>当前积分</p>
                <p>{{maccdiv2}}</p>
            </div>
            <div class="maccbox4">
                <p>我的钱包</p>
                <p>￥{{maccdiv3}}</p>
            </div>
            <div class="maccbox5">
                <router-link to="/personal/mybill">充值有礼>></router-link>
                <router-link to="/personal/rechargecard">充值卡兑换>>></router-link>
            </div>
        </div>
        <div class="maccx">
            <img src="http://renjihong.zone:2000/PersonalCenter/maccx.png" alt="">
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from '../Sidebar';
export default {
    name: 'MyAccount',
    components:{
        Sidebar,
    },
    data(){
        return {
            maccdiv1:'xxx',
            maccdiv2:'124',
            maccdiv3:'12200',
        }
    }
}
</script>

<style scoped>
.macc{
    float: left;
    width:1083px;
    height:219px;
    background:#f4fff2;
    border:1px solid #e7e7e7;
    padding:40px;
    box-sizing: border-box;
    font-size: 17px;
    margin-bottom: 20px;
}
.macc>div{
    float:left;
    height:139px;
    /* line-height:139px; */
}
.maccbox1{
    width:404px;
    margin-right:114px;
    line-height:139px;
}
.maccbox2{
    float: left;
    width:138px;
    margin-right:20px;
}
.maccbox2>img{
    float: left;
    width:100%;
}
.maccbox1 span:nth-child(3){
    color:#e85e35;
}
.maccbox3{
    width:152px;
    text-align: center;
    margin-top:22px;
}
.maccbox3 p:nth-child(2),.maccbox4 p:nth-child(2){
    color:#e85e35;
}
.macc p{
    height:49px;
    line-height: 49px;
    color:#252525;
}
.maccbox4{
    width:154px;
    text-align: center;
    margin-top:22px;
}
.maccbox5{
    float: right;
    width:174px;
    text-align: center;
}
.maccbox5>a{
    color:#f08200;
    display: block;
    text-decoration: none;
    height:49px;
    line-height: 49px;
}
.maccbox5 a:nth-child(1){
    color:#5b9c50;
    margin-top:22px;
}
.maccx{
    float: left;
    width:1083px;
    height:385px;
    border:1px solid #e7e7e7;
}
</style>
