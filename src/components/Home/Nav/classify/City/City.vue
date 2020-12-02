<template>
  <div id="city-box">
    <swiper :config="swiperConfig"></swiper>
    <el-row id="box">
      <recommend :data="recommendData"></recommend>
      <city-classify></city-classify>
      <el-header height="66px" class="info-header">
        <div class="operat">
          <span class="sales">销量</span>
          <span class="price">价格</span>
          <span class="ratest">评分最高</span>
        </div>
      </el-header>
      <city-info :data="infoData"></city-info>
    </el-row>
    <el-row id="Pagination">
      <!-- @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage" -->
      <el-pagination
      background
      :page-size="12"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
    </el-row>
  </div>
</template>

<script>
import Swiper from "@/components/Swiper";
import Recommend from '@/components/Recommend';
import CityInfo from "@/components/Home/Nav/Classify/City/CityInfo";
import CityClassify from '@/components/Home/Nav/Classify/City/CityClassify'
export default {
  name:'city',
  components:{
    Swiper,
    Recommend,
    CityInfo,
    CityClassify
  },
  data(){
    return {
      
      swiperConfig:{
        height:'500px',
        data:[
          'http://renjihong.zone:2000/home/swiper1.png',
          'http://renjihong.zone:2000/home/swiper1.png',
          'http://renjihong.zone:2000/home/swiper1.png',
          'http://renjihong.zone:2000/home/swiper1.png',
          'http://renjihong.zone:2000/home/swiper1.png',
        ]
      },
      recommendData:[
        {
          type: 1,
          title: ["内蒙古草原", "羔羊羊精肉"],
          img: "http://renjihong.zone:2000/home/recommend1.png",
        },
        {
          type: 2,
          title: ["新西兰柠檬"],
          description: "柠香清新",
          img: "http://renjihong.zone:2000/home/recommend2.png",
        },
        {
          type: 1,
          title: ["内蒙古草原", "羔羊羊精肉"],
          img: "http://renjihong.zone:2000/home/recommend3.png",
        },
        {
          type: 2,
          title: ["新鲜草莓"],
          description: "留住新鲜",
          img: "http://renjihong.zone:2000/home/recommend4.png",
        },
      ],
      infoData:[
        {
          title:'阳澄湖大闸蟹',
          rate:Math.floor(Math.random() * 5 + 1),
          meanPrice:Math.floor(Math.random() * 100 + 10),
          addr:'浙江省台州市温岭市人民西路2号',
          img:'http://renjihong.zone:2000/city/city-info1.png'
        },
        {
          title:'阳澄湖大闸蟹',
          rate:Math.floor(Math.random() * 5 + 1),
          meanPrice:Math.floor(Math.random() * 100 + 10),
          addr:'浙江省台州市温岭市人民西路2号',
          img:'http://renjihong.zone:2000/city/city-info2.png'
        },
        {
          title:'阳澄湖大闸蟹',
          rate:Math.floor(Math.random() * 5 + 1),
          meanPrice:Math.floor(Math.random() * 100 + 10),
          addr:'浙江省台州市温岭市人民西路2号',
          img:'http://renjihong.zone:2000/city/city-info3.png'
        },
        {
          title:'阳澄湖大闸蟹',
          rate:Math.floor(Math.random() * 5 + 1),
          meanPrice:Math.floor(Math.random() * 100 + 10),
          addr:'浙江省台州市温岭市人民西路2号',
          img:'http://renjihong.zone:2000/city/city-info4.png'
        },
        {
          title:'阳澄湖大闸蟹',
          rate:Math.floor(Math.random() * 5 + 1),
          meanPrice:Math.floor(Math.random() * 100 + 10),
          addr:'浙江省台州市温岭市人民西路2号',
          img:'http://renjihong.zone:2000/city/city-info1.png'
        },
        {
          title:'阳澄湖大闸蟹',
          rate:Math.floor(Math.random() * 5 + 1),
          meanPrice:Math.floor(Math.random() * 100 + 10),
          addr:'浙江省台州市温岭市人民西路2号',
          img:'http://renjihong.zone:2000/city/city-info2.png'
        },
        {
          title:'阳澄湖大闸蟹',
          rate:Math.floor(Math.random() * 5 + 1),
          meanPrice:Math.floor(Math.random() * 100 + 10),
          addr:'浙江省台州市温岭市人民西路2号',
          img:'http://renjihong.zone:2000/city/city-info3.png'
        },
        {
          title:'阳澄湖大闸蟹',
          rate:Math.floor(Math.random() * 5 + 1),
          meanPrice:Math.floor(Math.random() * 100 + 10),
          addr:'浙江省台州市温岭市人民西路2号',
          img:'http://renjihong.zone:2000/city/city-info4.png'
        },
        {
          title:'阳澄湖大闸蟹',
          rate:Math.floor(Math.random() * 5 + 1),
          meanPrice:Math.floor(Math.random() * 100 + 10),
          addr:'浙江省台州市温岭市人民西路2号',
          img:'http://renjihong.zone:2000/city/city-info1.png'
        },
        {
          title:'阳澄湖大闸蟹',
          rate:Math.floor(Math.random() * 5 + 1),
          meanPrice:Math.floor(Math.random() * 100 + 10),
          addr:'浙江省台州市温岭市人民西路2号',
          img:'http://renjihong.zone:2000/city/city-info2.png'
        },
        {
          title:'阳澄湖大闸蟹',
          rate:Math.floor(Math.random() * 5 + 1),
          meanPrice:Math.floor(Math.random() * 100 + 10),
          addr:'浙江省台州市温岭市人民西路2号',
          img:'http://renjihong.zone:2000/city/city-info3.png'
        },
        {
          title:'阳澄湖大闸蟹',
          rate:Math.floor(Math.random() * 5 + 1),
          meanPrice:Math.floor(Math.random() * 100 + 10),
          addr:'浙江省台州市温岭市人民西路2号',
          img:'http://renjihong.zone:2000/city/city-info4.png'
        }
      ]
    };
  },
}
</script>

<style scoped>
  #box{
    width: 1280px;
    margin: 0 auto;
  }
  .info-header{
    display: flex;
    justify-content: flex-end;
    line-height: 66px;
  }
  .info-header span{
    border: 1px solid #e7e7e7;
    padding: 2px 15px;
  }
  #Pagination{
    text-align: center;
  }
  #Pagination .btn-next, #Pagination .btn-prev{
    background: unset !important;
    background-color: #666 !important;
    color: pink;
  }
</style>