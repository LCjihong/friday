<template>
  <ul id="Commodity">
    <li 
    v-for="(item, index) of data" 
    :key="item.cid" 
    :style="{marginLeft:index % 4 == 0 ? '0' : '20px'}" 
    @click="handleClick(item.cid)">
      <div class="img-box">
        <img :src="item.cimgurl" />
      </div>
      <p class="title">{{ item.cname }}</p>
      <p class="desc">{{ item.cdesc }}</p>
      <p class="price">
        <em class="iconfont icon-fl-renminbi">{{ item.cprice }}</em>
        <i class="iconfont icon-fl-renminbi">{{ item.oprice }}</i>
      </p>
      <span class="iconfont icon-gouwuche cart" @click.stop="$emit('show-box', true, item.cid)"></span>
    </li>
  </ul>
</template>

<script>
export default {
  name:'Commodity',
  props:['data'],
  methods:{
    handleClick(cid){
      this.$router.push({
        path:'/commodata',
        query:{
          cid
        }
      });
    }
  }
}
</script>

<style scoped>
#Commodity{
  height: 100%;
  width: 100%;
}
#Commodity li{
  width: 305px;
  height: 433px;
  float: left;
  box-sizing: border-box;
  border: 1px solid #dddddd;
  position: relative;
  margin-bottom: 20px;
}
#Commodity p{
  padding-left: 20px;
}
#Commodity .title {
  font-size: 18px;
  line-height: 37px;
}
#Commodity .desc{
  font-size: 14px;
  line-height: 26px;
}
#Commodity .price{
  line-height: 50px;
}
#Commodity .price i{
  font-size: 18px;
  text-decoration: line-through;
  padding-left: 10px;
  vertical-align: top;
}
#Commodity .cart{
  position: absolute;
  right: 19px;
  bottom: 24px;
  font-size: 30px;
  color: #f08200;
  cursor: pointer;
}
#Commodity .img-box{
  width: 100%;
  height: 305px;
  text-align: center;
  line-height: 305px;
}
#Commodity .img-box img{
  width: 100%;
  vertical-align: middle;
}
.price em{
  font-size: 24px;
  font-weight: 900;
  color: #ff5757;
}
.price em::before{
  padding-right: 5px;
}
</style>
