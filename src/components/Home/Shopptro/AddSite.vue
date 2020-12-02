<template>
  <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <i class="header-icon el-icon-info">展开收起其他地址</i>
          </template>
        <div v-for="(item,index) of site" :key="index" class="siteBox">
            <template>
              <el-radio v-model="radio" :label="item.num" class="site1">但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589
                 <el-button type="text"
                 v-if="item.num != radio">设为默认地址</el-button>
                 <el-button type="text" >修改</el-button>
                 <el-button type="text" >删除</el-button>
             </el-radio>
            </template>
        </div>
      </el-collapse-item>
    </el-collapse>
</template>

<script>
export default {
 data(){
   return{
     adio: '',
     num: 1,
      site:[
          {
            num:1,
            textSit:'但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589',
          },
          {
            num:2,
            textSit:'但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589',
          },
          {
            num:3,
            textSit:'但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589',
          },
          {
            num:4,
            textSit:'但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589',
          },
        ],
   }
 }
}
</script>

<style scoped>
.siteBox{
  width: 1280px;
  height: 40px;
  border-radius: 5px;
  line-height: 40px;
  background-color: #f4fff2;
  float: left;
  margin-top: 10px;
}
</style>
