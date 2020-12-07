<template>
         <!-- 优先保障 -->
<div class="Friday">
    <!-- <about-path></about-path> -->
    <breadnav :config='routers'></breadnav>
    <div class="AboutPrioritybox">
        <div class="AboutPrioritybox1">
            <p>鲜果保障</p>
            <span>日期 : 2015年9月21日</span>
        </div>
        <div class="AboutPrioritybox2">
            <p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist， 新西兰 Zespri，澳大利亚MFC，以色列 Jaffa 等合作品牌。每年从全国五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全</p>
            <p>管理团队平均年龄 36 岁，员工平均年龄 26 岁，公司信奉平等公开民主的管理文化，每一个员工都有表达自己建议和主张的权利。加入和我们一起开拓全新的水果文化，创立健康的食材品牌，共同分享高速增长的鲜果食品市场，和公司共同成长为行业顶尖的人才。</p>
            <div>
                <img src="http://renjihong.zone:2000/friday/priority.png" alt="鲜果保障">
            </div>
            <p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist， 新西兰 Zespri，澳大利亚MFC，以色列 Jaffa 等合作品牌。每年从全国五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全</p>
            <p>管理团队平均年龄 36 岁，员工平均年龄 26 岁，公司信奉平等公开民主的管理文化，每一个员工都有表达自己建议和主张的权利。加入和我们一起开拓全新的水果文化，创立健康的食材品牌，共同分享高速增长的鲜果食品市场，和公司共同成长为行业顶尖的人才。</p>
        </div>
    </div>
</div>
</template>

<script>
import AboutPath from '../AboutPath';
import breadnav from '@/components/breadnav';

export default {
   name:'AboutPriority',
   components:{
       AboutPath,
        breadnav
   },
   data(){
    return {
      routers:{
      rouTex:'您当前的位置：首页>全部商品>苹果>阿克苏',
    }
    }
  }
}
</script>

<style scoped>
.Friday{
 width: 1280px;
 margin: 0 auto;
}
.AboutPrioritybox{
    width: 1280px;
    height: 902px;
    border: 1px solid #e9e9e9;
    /* margin: 0 320px; */
    padding: 29px 40px;
    box-sizing: border-box;
}
.AboutPrioritybox1{
    height:118px;
    border-bottom:1px solid #e9e9e9;
    margin-bottom:33px;
}
.AboutPrioritybox1>p{
    height: 85px;
    line-height: 85px;
    font-size: 25px;
    color: #5b9751;
    text-align: center;
}
.AboutPrioritybox1>span{
    height: 12px;
    line-height: 12px;
    font-size:12px;
    color:#999999;
    float: right;
}
.AboutPrioritybox2>p{
    line-height: 30px;
    font-size:14px;
    color:#747474;
    margin-bottom:30px;
    text-align: left;
    text-indent: 2em;
}
</style>
