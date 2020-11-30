<template>
  <div class="recommend">
    <div class="item" v-for="(item, index) of data" :key="index">
      <div class="info">
        <p class="title" v-for="(title, idx) of item.title" :key="idx">
          {{ title }}
        </p>
        <p class="desc" v-show="item.description">{{ item.description }}</p>
      </div>
      <div class="img-box">
        <img class="img" :src="item.img" />
      </div>
      <img
        class="tag"
        v-if="item.type == 1"
        src="http://renjihong.zone:2000/home/remai.png"
      />
      <img
        class="tag"
        v-if="item.type == 2"
        src="http://renjihong.zone:2000/home/xinpin.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name:'Recommend',
  props:['data']
}
</script>

<style scoped>
.recommend {
  height: 180px;
  box-sizing: border-box;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
}
.recommend .item {
  width: 305px;
  height: 100%;
  background-color: #f2f2f2;
  position: relative;
  line-height: 40px;
}
.recommend .tag {
  position: absolute;
  left: 0;
  top: 0;
}
.recommend .info {
  width: 50%;
  display: inline-block;
  padding-top: 32px;
}
.recommend p {
  padding-left: 30px;
}
.recommend .title {
  font-size: 20px;
}
.recommend .desc {
  font-size: 16px;
}
.desc{
  color: #737373;
}
.recommend .img-box {
  width: 50%;
  float: right;
  height: 140px;
  text-align: center;
  line-height: 140px;
}
.recommend .img {
  vertical-align: middle;
}
</style>