<template>
  <el-row class="classify">
    <i>分类:</i>
    <span 
    v-for="(value, index) of classifyData" 
    :class="{'classifyAct':classifyAct == index}"
    :key="index" 
    @click="changeActive(index)">{{ value }}</span>
  </el-row>
</template>

<script>
export default {
  name:'CityClassify',
  data(){
    return {
      classifyAct:0,
      classifyData:['全部','餐饮','酒店','休闲','电影','汽车装饰','家政服务'],
    }
  },
  methods:{
    changeActive(index){
      this.classifyAct = index;
    }
  }
}
</script>

<style scoped>
.classify{
    height: 56px;
    font-size: 18px;
    line-height: 56px;
    border-bottom: 1px solid #e7e7e7;
  }
  .classify span{
    margin-left: 14px;
    user-select: none;
    cursor: pointer;
    padding: 4px 10px;
  }
  .classify span:hover{
    color: #498e3d;
  }
  .classifyAct{
    background-color: #498e3d !important;
    color: #ffffff !important;
  }
</style>