<template>
        <!-- 左侧导航  -->
    <div class="aboutfridayleft">
        <div class="aboutfridayleft-left">礼拜五商城</div>
        <router-link to="/1" class="aboutfridayleft-box1">关于礼拜五<span>></span></router-link>
        <router-link to="/2" class="aboutfridayleftclick">新用户注册</router-link>
        <router-link to="/3">在线下单</router-link>
        <router-link to="/4">支付方式</router-link>
        <router-link to="/5" class="aboutfridayleft-box1">配送说明<span>></span></router-link>
        <router-link to="/6">运费说明</router-link>
        <router-link to="/7">配送方式</router-link>
        <router-link to="/8">发票说明</router-link>
        <router-link to="/9" class="aboutfridayleft-box1">售后服务<span>></span></router-link>
        <router-link to="/10">退换货原则</router-link>
        <router-link to="/11">服务保障承诺</router-link>
        <router-link to="/12">验货和签收</router-link>
        <router-link to="/13">发票说明</router-link>
        <router-link to="/14" class="aboutfridayleft-box1">加盟礼拜五<span>></span></router-link>
        <router-link to="/15">加盟条款</router-link>
        <router-link to="/16">公司简介</router-link>
        <router-link to="/17">服务协议</router-link>
    </div>
</template>

<script>
export default {
  name: 'NewRegistration',
}
</script>

<style scoped>

/* *{
    margin:0;
    padding:0;
} */

.aboutfridayleft a.router-link-active{
    color:green;
    text-decoration: underline;
}

.aboutfridayleft{
    float: left;
    width:168px;
    height:708px;
    border:1px solid #e7e7e7;
    color:#666666;
    /* margin-right:25px;
    margin-left:310px; */
}
.aboutfridayleft-left{
    width:168px;
    height:57px;
    padding-left:20px;
    line-height: 57px;
    border-bottom:1px solid #e7e7e7;
    box-sizing: border-box;
    font-size: 18px;
}
.aboutfridayleft>a{
    /* width:100%; */
    color:#999999;
    display:block;
    margin-left:20px;
    margin-top:21px;
    text-decoration: none;
    font-size:14px;
    line-height: 14px;
}
.aboutfridayleft>.aboutfridayleft-box1{
    color:#666666;
    font-size:16px;
    line-height: 16px;
}
.aboutfridayleft-box1>span{
    float: right;
    margin-right:48px;
}
.aboutfridayleft a:hover{
    color:#498e3d;
}
/* .aboutfridayleft>.aboutfridayleftclick{
    text-decoration: underline;
    color:#498e3d;
} */
.aboutfridayright{
    float: right;
    width:1083px;
    height:1178px;
    border:1px solid #e7e7e7;
}
.aboutfridayright div:nth-child(1){
    height:56px;
    line-height: 56px;
    border-bottom:1px solid #e7e7e7;
    padding-left:20px;
    box-sizing: border-box;
    color:#252525;
    font-size: 17px;
    margin-bottom: 20px;
}
.aboutfridayrightbox1>h3{
    height:63px;
    line-height: 63px;
    font-size: 23px;
    color:#498e3d;
    text-align: center;
}
.aboutfridayrightbox2{
    width:100%;
    text-align: center;
}
.aboutfridayrightbox2>p{
    height:13px;
    line-height: 13px;
    color:#999999;
    font-size:13px;
    display: inline-block;
    margin:0px 43px;
    margin-bottom: 21px;
}
.aboutfridayrightbox3>p{
    margin-left:38px;
    margin-right:43px;
    line-height: 30px;
    color:#999999;
    font-size:14px;
    text-align: left;
}
.aboutfridayrightbox3>div{
    width:100%;
    margin:22px 0px;
}
</style>

