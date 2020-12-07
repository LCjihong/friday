<template>
  <el-row id="top-bar">
    <el-row class="search-box" type="flex" justify="space-between">
      <router-link tag="div" to="/" class="image-box" style="cursor:pointer">
        <img src="http://renjihong.zone:2000/home/logo.png" alt="礼拜五">
      </router-link>
      <div class="search">
        <div class="search-input">
          <div class="input-box">
            <input type="text" v-model="keyword" placeholder="请输入关键字进行搜索">
            <i class="iconfont icon-sousuo" @click="search"></i>
            <div class="hotword">
              <em>热门:</em>
              <span v-for="(value, index) of hotword" style="cursor:pointer" :key="index" @click="hotsearch(value)">{{ value }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <router-link to="/personal" tag="span"><el-button plain type="info"><i class="iconfont icon-yonghu">个人中心</i></el-button></router-link>
        <router-link to="/cart" tag="span"><el-button plain type="info"><i class="iconfont icon-gouwuche">购物车</i></el-button></router-link>
      </div>
    </el-row>
    <el-row class="nav-box">
      <div id="menu">
        <li><em>全部分类<i class="iconfont icon-arrow-right"></i></em></li>
        <div class="classify">
          <p
          v-for="(item, index) of menuData"
          :key="index" @mouseover="changeDetails(index)"
          :style="{
            backgroundColor:activeMenuOption == index ? '#ebffe7' : '#ffffff',
            borderRight:activeMenuOption == index ? 'unset' : '1px solid #efeeec',
          }"><i :class="item.class">{{ item.text }}</i></p>
          <div class="details">
            <div class="group" v-for="(item, index) of detailsData" :key="index">
              <h3>{{ item.title }}</h3>
              <div class="info">
                <div v-for="(list, idx) of item.details" :key="idx">
                  <strong v-for="(value, i) of list" :key="i">
                    <i :class="{'iconfont icon-anjianfengexian':i != 0}"></i>
                    <router-link to="" tag="i" style="cursor:pointer">{{ value }}</router-link>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-link tag="li" to="/"><span>首页</span></router-link>
      <router-link tag="li" to="/city"><span>同城</span></router-link>
      <router-link tag="li" to="/classify/friday"><span>礼拜五</span></router-link>
      <router-link tag="li" to="/pointsm"><span>积分商城</span></router-link>
      <router-link tag="li" to="/classify/nav"><span>导航+</span></router-link>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name:'TopBar',
  data(){
    return {
      keyword:'',
      detailsData:[],
      activeMenuOption:-1,
      hotword:['奇异果','牛排','山竹','牛油果'],
      allCommodity:[
        {
          text:'新鲜水果',
          icon:'iconfont icon-yingtao'
        },
        {
          text:'生猛海鲜',
          icon:'iconfont icon-jiweixia'
        },
        {
          text:'肉类家禽',
          icon:'iconfont icon-roujitui_'
        },
        {
          text:'蛋奶素食',
          icon:'iconfont icon-niunai'
        },
        {
          text:'田园蔬菜',
          icon:'iconfont icon-huluobu'
        },
        {
          text:'零食酒水',
          icon:'iconfont icon-dangao'
        },
        {
          text:'粮油杂货',
          icon:'iconfont icon-liangyouganhuo'
        },
        {
          text:'礼品卡券',
          icon:'iconfont icon-lipin-'
        },
        {
          text:'家居用品',
          icon:'iconfont icon-chuang'
        },
      ],
      menuData:[
        {
          class:'iconfont icon-yingtao',
          text:'新鲜水果',
          data:[
            {
              title:'应季鲜果',
              details:[
                ['草莓','葡萄','香蕉','苹果'],
                ['草莓','葡萄','香蕉','苹果']
              ],
            },
            {
              title:'应季鲜果',
              details:[
                ['草莓','葡萄','香蕉','苹果'],
                ['草莓','葡萄','香蕉','苹果']
              ],
            },
            {
              title:'应季鲜果',
              details:[
                ['草莓','葡萄','香蕉','苹果'],
                ['草莓','葡萄','香蕉','苹果']
              ],
            },
            {
              title:'应季鲜果',
              details:[
                ['草莓','葡萄','香蕉','苹果'],
                ['草莓','葡萄','香蕉','苹果']
              ],
            },
            {
              title:'应季鲜果',
              details:[
                ['草莓','葡萄','香蕉','苹果'],
                ['草莓','葡萄','香蕉','苹果']
              ],
            },
            {
              title:'应季鲜果',
              details:[
                ['草莓','葡萄','香蕉','苹果'],
                ['草莓','葡萄','香蕉','苹果']
              ],
            },
          ]
        },
        {
          class:'iconfont icon-jiweixia',
          text:'生猛海鲜',
          data:[
            {
              title:'进口海鲜',
              details:[
                ['帝王蟹','大龙虾','鲍鱼','三文鱼'],
                ['帝王蟹','大龙虾','鲍鱼','三文鱼']
              ]
            },
            {
              title:'进口海鲜',
              details:[
                ['帝王蟹','大龙虾','鲍鱼','三文鱼'],
                ['帝王蟹','大龙虾','鲍鱼','三文鱼']
              ]
            },
            {
              title:'进口海鲜',
              details:[
                ['帝王蟹','大龙虾','鲍鱼','三文鱼'],
                ['帝王蟹','大龙虾','鲍鱼','三文鱼']
              ]
            },
            {
              title:'进口海鲜',
              details:[
                ['帝王蟹','大龙虾','鲍鱼','三文鱼'],
                ['帝王蟹','大龙虾','鲍鱼','三文鱼']
              ]
            },
            {
              title:'进口海鲜',
              details:[
                ['帝王蟹','大龙虾','鲍鱼','三文鱼'],
                ['帝王蟹','大龙虾','鲍鱼','三文鱼']
              ]
            },
            {
              title:'进口海鲜',
              details:[
                ['帝王蟹','大龙虾','鲍鱼','三文鱼'],
                ['帝王蟹','大龙虾','鲍鱼','三文鱼']
              ]
            }
          ]
        },
        {
          class:'iconfont icon-rou',
          text:'肉类家禽',
          data:[
            {
              title:'家常便肉',
              details:[
                ['鸡肉','牛肉','羊肉','猪肉'],
                ['鸡肉','牛肉','羊肉','猪肉']
              ]
            },
            {
              title:'家常便肉',
              details:[
                ['鸡肉','牛肉','羊肉','猪肉'],
                ['鸡肉','牛肉','羊肉','猪肉']
              ]
            },
            {
              title:'家常便肉',
              details:[
                ['鸡肉','牛肉','羊肉','猪肉'],
                ['鸡肉','牛肉','羊肉','猪肉']
              ]
            },
            {
              title:'家常便肉',
              details:[
                ['鸡肉','牛肉','羊肉','猪肉'],
                ['鸡肉','牛肉','羊肉','猪肉']
              ]
            },
            {
              title:'家常便肉',
              details:[
                ['鸡肉','牛肉','羊肉','猪肉'],
                ['鸡肉','牛肉','羊肉','猪肉']
              ]
            },
            {
              title:'家常便肉',
              details:[
                ['鸡肉','牛肉','羊肉','猪肉'],
                ['鸡肉','牛肉','羊肉','猪肉']
              ]
            },
          ]
        },
        {
          class:'iconfont icon-niunairupin',
          text:'奶蛋素食',
          data:[
            {
              title:'品质优乳',
              details:[
                ['伊利','蒙牛','金典','安慕希'],
                ['伊利','蒙牛','金典','安慕希']
              ]
            },
            {
              title:'品质优乳',
              details:[
                ['伊利','蒙牛','金典','安慕希'],
                ['伊利','蒙牛','金典','安慕希']
              ]
            },
            {
              title:'品质优乳',
              details:[
                ['伊利','蒙牛','金典','安慕希'],
                ['伊利','蒙牛','金典','安慕希']
              ]
            },
            {
              title:'品质优乳',
              details:[
                ['伊利','蒙牛','金典','安慕希'],
                ['伊利','蒙牛','金典','安慕希']
              ]
            },
            {
              title:'品质优乳',
              details:[
                ['伊利','蒙牛','金典','安慕希'],
                ['伊利','蒙牛','金典','安慕希']
              ]
            },
            {
              title:'品质优乳',
              details:[
                ['伊利','蒙牛','金典','安慕希'],
                ['伊利','蒙牛','金典','安慕希']
              ]
            }
          ]
        },
        {
          class:'iconfont icon-huluobu',
          text:'田园蔬菜',
          data:[
            {
              title:'应季蔬菜',
              details:[
                ['西兰花','土豆','西红柿','茄子'],
                ['西兰花','土豆','西红柿','茄子']
              ]
            },
            {
              title:'应季蔬菜',
              details:[
                ['西兰花','土豆','西红柿','茄子'],
                ['西兰花','土豆','西红柿','茄子']
              ]
            },
            {
              title:'应季蔬菜',
              details:[
                ['西兰花','土豆','西红柿','茄子'],
                ['西兰花','土豆','西红柿','茄子']
              ]
            },
            {
              title:'应季蔬菜',
              details:[
                ['西兰花','土豆','西红柿','茄子'],
                ['西兰花','土豆','西红柿','茄子']
              ]
            },
            {
              title:'应季蔬菜',
              details:[
                ['西兰花','土豆','西红柿','茄子'],
                ['西兰花','土豆','西红柿','茄子']
              ]
            },
            {
              title:'应季蔬菜',
              details:[
                ['西兰花','土豆','西红柿','茄子'],
                ['西兰花','土豆','西红柿','茄子']
              ]
            }
          ]
        },
        {
          class:'iconfont icon-dangao',
          text:'零食酒水',
          data:[
            {
              title:'童年回忆',
              details:[
                ['六丁目','开胃丹','小浣熊','小帅才'],
                ['六丁目','开胃丹','小浣熊','小帅才']
              ]
            },
            {
              title:'童年回忆',
              details:[
                ['六丁目','开胃丹','小浣熊','小帅才'],
                ['六丁目','开胃丹','小浣熊','小帅才']
              ]
            },
            {
              title:'童年回忆',
              details:[
                ['六丁目','开胃丹','小浣熊','小帅才'],
                ['六丁目','开胃丹','小浣熊','小帅才']
              ]
            },
            {
              title:'童年回忆',
              details:[
                ['六丁目','开胃丹','小浣熊','小帅才'],
                ['六丁目','开胃丹','小浣熊','小帅才']
              ]
            },
            {
              title:'童年回忆',
              details:[
                ['六丁目','开胃丹','小浣熊','小帅才'],
                ['六丁目','开胃丹','小浣熊','小帅才']
              ]
            },
            {
              title:'童年回忆',
              details:[
                ['六丁目','开胃丹','小浣熊','小帅才'],
                ['六丁目','开胃丹','小浣熊','小帅才']
              ]
            }
          ]
        },
        {
          class:'iconfont icon-liangyouganhuo',
          text:'粮油杂货',
          data:[
            {
              title:'居家必备',
              details:[
                ['食用油','酱油','料酒','豆瓣酱'],
                ['食用油','酱油','料酒','豆瓣酱']
              ]
            },
            {
              title:'居家必备',
              details:[
                ['食用油','酱油','料酒','豆瓣酱'],
                ['食用油','酱油','料酒','豆瓣酱']
              ]
            },
            {
              title:'居家必备',
              details:[
                ['食用油','酱油','料酒','豆瓣酱'],
                ['食用油','酱油','料酒','豆瓣酱']
              ]
            },
            {
              title:'居家必备',
              details:[
                ['食用油','酱油','料酒','豆瓣酱'],
                ['食用油','酱油','料酒','豆瓣酱']
              ]
            },
            {
              title:'居家必备',
              details:[
                ['食用油','酱油','料酒','豆瓣酱'],
                ['食用油','酱油','料酒','豆瓣酱']
              ]
            },
            {
              title:'居家必备',
              details:[
                ['食用油','酱油','料酒','豆瓣酱'],
                ['食用油','酱油','料酒','豆瓣酱']
              ]
            }
          ]
        },
        {
          class:'iconfont icon-lipin-',
          text:'礼品卡券',
          data:[
            {
              title:'送礼佳品',
              details:[
                ['挂钟','闹钟','手表','电子表'],
                ['挂钟','闹钟','手表','电子表']
              ]
            },
            {
              title:'送礼佳品',
              details:[
                ['挂钟','闹钟','手表','电子表'],
                ['挂钟','闹钟','手表','电子表']
              ]
            },
            {
              title:'送礼佳品',
              details:[
                ['挂钟','闹钟','手表','电子表'],
                ['挂钟','闹钟','手表','电子表']
              ]
            },
            {
              title:'送礼佳品',
              details:[
                ['挂钟','闹钟','手表','电子表'],
                ['挂钟','闹钟','手表','电子表']
              ]
            },
            {
              title:'送礼佳品',
              details:[
                ['挂钟','闹钟','手表','电子表'],
                ['挂钟','闹钟','手表','电子表']
              ]
            },
            {
              title:'送礼佳品',
              details:[
                ['挂钟','闹钟','手表','电子表'],
                ['挂钟','闹钟','手表','电子表']
              ]
            }
          ]
        },
        {
          class:'iconfont icon-chuang',
          text:'家居用品',
          data:[
            {
              title:'床上用品',
              details:[
                ['冬被','夏凉被','草席','被单'],
                ['冬被','夏凉被','草席','被单']
              ]
            },
            {
              title:'床上用品',
              details:[
                ['冬被','夏凉被','草席','被单'],
                ['冬被','夏凉被','草席','被单']
              ]
            },
            {
              title:'床上用品',
              details:[
                ['冬被','夏凉被','草席','被单'],
                ['冬被','夏凉被','草席','被单']
              ]
            },
            {
              title:'床上用品',
              details:[
                ['冬被','夏凉被','草席','被单'],
                ['冬被','夏凉被','草席','被单']
              ]
            },
            {
              title:'床上用品',
              details:[
                ['冬被','夏凉被','草席','被单'],
                ['冬被','夏凉被','草席','被单']
              ]
            },
            {
              title:'床上用品',
              details:[
                ['冬被','夏凉被','草席','被单'],
                ['冬被','夏凉被','草席','被单']
              ]
            },
          ]
        }
      ]
    }
  },
  methods:{
    changeDetails(index){
      this.detailsData = this.menuData[index].data;
      this.activeMenuOption = index;
    },
    search(){
      window.location.pathname = '/classify/search/' + this.keyword;
    },
    hotsearch(keyword){
       window.location.pathname = '/classify/search/' + keyword;
    }
  }
};
</script>

<style scoped>
#top-bar {
  width: 1280px;
  padding-top: 25px;
  margin: 0 auto;
}
.search-box{
  padding-bottom: 38px;
}
.search-box > *{
  flex: 1;
}
.search{
  flex: 2;
}
.search-input{
  padding-top: 25px;
  padding-left: 100px;
}
.input-box{
  border:2px solid #4b943d;
  height: 36px;
  display: inline-block;
  font-size: 0;
  position: relative;
}
.input-box input{
  line-height: 36px;
  width: 456px;
  font-size: 18px;
  padding-left: 10px;
  box-sizing: border-box;
  border: unset;
  outline: unset;
}
.input-box .iconfont::before{
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
  background-color: #4b943d;
  vertical-align: top;
  font-size: 22px;
  text-align: center;
  color: white;
  cursor: pointer;
}
.hotword{
  position: absolute;
  left: 0;
  top: 38px;
  font-size: 14px;
  color: #666666;
}
.hotword span{
  padding-left: 10px;
}
.btn-box{
  padding-top: 25px;
  text-align: center;
}
.btn-box span:first-child{
  margin-right: 10px;
}
.btn-box button{
  width: 123px;
  line-height: 38px;
  padding: 0;
  border-radius: 0;
}
.btn-box .iconfont::before{
  padding-right: 10px;
}
.nav-box{
  color: #333333;
  user-select: none;
}
.nav-box li{
  float: left;
  transition: 0.3s;
  margin-right: 1px;
}
.nav-box li:hover{
  background-color: #fb9012;
  color: #ffffff;
}
.nav-box span, .nav-box em{
  font: 16px/50px '';
}
.nav-box span{
  padding: 0 60px;
  position: relative;
  border-left: 1px solid #dddddd;
  left: -1px;
}
.nav-box em{
  padding: 0 40px;
}
.nav-box .iconfont{
  padding-left: 10px;
}
#menu{
  float: left;
  position: relative;
}
#menu em{
  display: inline-block;
  height: 100%;
}
#menu:hover .classify{
  display: block;
}
.classify{
  position: absolute;
  width: 100%;
  left: 0;
  top: 50px;
  z-index: 4;
  text-align: center;
  background-color: #fff;
  display: none;
  transition: 0.3s;
}
.classify p{
  height: 55px;
  border: 1px solid #efeeec;
  border-top: unset;
  line-height: 55px;
  font-size: 16px;
}
.classify p:first-child{
  border-top: 1px solid #efeeec;
}
.classify:hover .details{
  display: block;
}
.classify .iconfont::before{
  padding-right: 8px;
  font-size: 20px;
  color: #f08200;
}
.classify .details{
  position: absolute;
  left: 100%;
  top: 0px;
  width: 458px;
  height: 505px;
  border: 1px solid #efeeec;
  border-left: unset;
  background-color: #ebffe7;
  display: none;
  box-sizing: border-box;
  padding: 0 20px 0 35px;
}
.classify .group{
  height: 80px;
  box-sizing: border-box;
  padding-top: 20px;
}
.classify .group h3{
  float: left;
  font-weight: 500;
  color: #498e3d;
  font-size: 18px;
}
.classify .group .info{
  float: right;
}
.classify .group .info strong{
  font-weight: 500;
}
.classify .group .iconfont::before{
  padding: 0;
}
</style>
