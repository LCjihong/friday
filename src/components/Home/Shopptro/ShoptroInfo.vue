<template>
  <el-row class="commodity">
    <div class="conCenter">
      <div class="conNav">
        <span class="conNav1"><input type="checkbox" v-model="data.checked"/>{{ data.mname }}</span>
        <span class="conNav2">规格</span>
        <span class="conNav3">单价</span>
        <span class="conNav4">数量</span>
        <span class="conNav5">金额</span>
        <span class="conNav6">操作</span>
      </div>
    </div>
    <div
      class="commMsg"
      v-for="ite of data.data"
      :key="ite.c_id"
    >
      <div class="checkBox">
        <input type="checkbox" v-model="ite.checked"/>
      </div>
      <div class="commHead">
        <img :src="ite.cimgurl" alt="" />
      </div>
      <div class="commTex1">{{ ite.cname }}</div>
      <div class="conmmNum">{{ ite.c_cspecifications }}</div>
      <div class="conmmMone">￥{{ ite.c_price }}</div>
      <div class="numeration">
        <template>
          <el-input-number
            v-model="ite.c_mount"
            @change="changeMerSum($event, ite.c_id)"
            :min="1"
            label="描述文字"
          ></el-input-number>
        </template>
      </div>
      <div class="money">￥{{ ite.c_price * ite.c_mount }}</div>
      <div class="delet" @click="handleDel(ite.c_id)">删除</div>
    </div>
    <el-row class="amoutgood">商品金额 <span>￥{{ merSum }}</span></el-row>
  </el-row>
</template>

<script>
export default {
  name:'ShoptroInfo',
  props:['data', 'MerIndex'],
  data(){
    return{
      merSum:0
    }
  },
  methods:{
    changeMerSum(currentValue, c_id){
      let sum = 0;
      this.data.data.forEach(element => {
        sum += element.c_price * element.c_mount;
      });
      this.$emit('change-mer-sum', sum);
      this.merSum = sum;
      this.$axios.post('/cart/change_mount', this.$qs.stringify({
        c_id:c_id,
        c_mount:currentValue
      })).then(resp => {
        console.log(resp);
      })
    },
    handleDel(c_id){
      this.$axios.post('/cart/delete', this.$qs.stringify({c_id}))
      .then(resp => {
        console.log(resp);
        //if(成功){删除dom元素 // 刷新页面}
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  created(){
    let sum = 0;
    this.data.data.forEach(element => {
      sum += element.c_price * element.c_mount;
    });
    this.$emit('change-mer-sum', sum);
    this.merSum = sum;
  }
}
</script>

<style scoped>
.commodity {
  width: 1280px;
  float: left;
  border: 1px solid gainsboro;
}
.conNav {
  width: 1280px;
  height: 47px;
  line-height: 47px;
  font-size: 16px;
  background-color: #f2f2f2;
}
.conNav2 {
  margin-left: 320px;
}
.conNav3 {
  margin-left: 150px;
}
.conNav4 {
  margin-left: 150px;
}
.conNav5 {
  margin-left: 145px;
}
.conNav6 {
  margin-left: 145px;
}
.commMsg {
  width: 1280px;
  height: 120px;
  float: left;
  border-bottom: 1px solid gainsboro;
}
.commHead {
  width: 80px;
  height: 80px;
  border: 1px solid gainsboro;
  margin: 20px 20px 20px 10px;
  float: left;
}
.commHead img {
  width: 100%;
  height: 100%;
}
.commTex1 {
  width: 280px;
  height: 120px;
  float: left;
  line-height: 120px;
}
.conmmNum {
  width: 60px;
  height: 120px;
  line-height: 120px;
  float: left;
  /* margin-left: 20px; */
}
.conmmMone {
  width: 60px;
  height: 120px;
  line-height: 120px;
  float: left;
  color: gray;
  margin-left: 120px;
}
.numeration {
  float: left;
  margin-top: 45px;
  margin-left: 90px;
}
.money {
  float: left;
  line-height: 120px;
  /* color: red; */
  font-size: 18px;
  margin-left: 90px;
}
.delet {
  float: left;
  line-height: 120px;
  /* color: red; */
  font-size: 18px;
  margin-left: 130px;
  color: green;
  cursor: pointer;
}
.amoutgood {
  float: right;
  line-height: 90px;
}
.amoutgood span {
  font-size: 20px;
  color: red;
  margin-right: 20px;
  margin-left: 20px;
}
.checkBox {
  float: left;
  margin-top: 50px;
  margin-left: 20px;
}
</style>