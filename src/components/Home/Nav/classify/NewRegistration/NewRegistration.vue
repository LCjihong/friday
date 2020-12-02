<template>
<!-- 新用户注册 -->
<div class="NewBox">
    <about-path></about-path>
    <about-friday></about-friday>
    <div class="aboutfridayright1">
        <div>关于我们</div>
        <div class="aboutfridayrightbox1">
            <h3>新用户注册</h3>
            <div class="aboutfridayrightbox2">
                <p>分类 : 关于礼拜五</p>
                <p>日期 : 2015年9月21日</p>
                <div class="aboutfridayrightbox3">
                    <p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist， 新西兰 Zespri，澳大利亚MFC，以色列 Jaffa 等合作品牌。每年从全国五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全。</p>
                    <div>
                        <img src="http://renjihong.zone:2000/friday/2.png" alt="">
                    </div>
                    <p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist， 新西兰 Zespri，澳大利亚MFC，以色列 Jaffa 等合作品牌。每年从全国五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全。</p>
                    <div>
                        <img src="http://renjihong.zone:2000/friday/3.png" alt="">
                    </div>
                    <p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist， 新西兰 Zespri，澳大利亚MFC，以色列 Jaffa 等合作品牌。每年从全国五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全。</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import AboutPath from '../AboutPath';
import AboutFriday from '../AboutFriday';
export default {
    name:"NewRegistration",
    components:{
        AboutPath,
        AboutFriday,
    }
}
</script>

<style scoped>
/* .NewBox{
  width: 1280px;
  margin: 0 auto;
} */
.aboutfridayright1{
    float: left;
    width:1083px;
    height:1178px;
    border:1px solid #e7e7e7;
}
.aboutfridayright1 div:nth-child(1){
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
