<template>
  <div class="Addmsg">
    <div class="lebble">
      <span>
          <p class="tex3"> 收货人姓名：</p><p class="iconfont icon-shanhuxiaerqi tex1"></p>
      </span>
      <span class="tex2">
           <p class="tex3">所在地区：</p><p class="iconfont icon-shanhuxiaerqi tex1"></p>
      </span>
      <span class="tex2">
          <p class="tex3">详细地址：</p><p class="iconfont icon-shanhuxiaerqi tex1"></p>
      </span>
      <span class="tex2">
           <p class="tex3">联系电话：</p><p class="iconfont icon-shanhuxiaerqi tex1"></p>
      </span>
    </div>
    <div class="InpTex">
        <div class="uName">
          <input type="text" v-model="uname">
        </div>
        <div class="region">
          <select class="seleTw" v-model="proxince">
              <option>河南省</option>
              <option>四川省</option>
              <option>济南省</option>
              <option>山东省</option>
          </select>
          <select class="seleTe" v-model="city">
              <option>成都市</option>
              <option>天津市</option>
              <option>郑州市</option>
              <option>驻马店市</option>
          </select>
          <select class="seleTx" v-model="county">
              <option>金水区</option>
              <option>西平县</option>
              <option>温江县</option>
              <option>河西区</option>
          </select>

        </div>
        <div class="detaddr">
            <input type="text" v-model="dataAddress">
        </div>
        <div class="phoneS">
            <div class="Aphone">
              <input type="text" v-model="aphone">
            </div>
            <span>或固定电话</span>
            <div class="Bphone">
              <input type="text" >
            </div>
            <span>-</span>
            <div class="Cphone">
              <input type="text" placeholder="">
            </div>
        </div>
        <button class="save" @click="subBtn">确认并设为默认地址</button>
    </div>
  </div>
</template>

<script>
export default {
data () {
      return {
        uname:'',
        proxince:'',
        city:'',
        county:'',
        dataAddress:'',
        aphone:'',
      };
    },
  methods:{
     subBtn(){
       this.$axios.post('/address/addsite',this.$qs.stringify({
        uname:this.uname,
        proxince:this.proxince,
        city:this.city,
        county:this.county,
        dataAddress:this.dataAddress,
        aphone:this.aphone,
        adefault:1,
        uid:sessionStorage.getItem("uid")
       })).then(res => {
         console.log(res)
         window.location = '/confirmaor/addsite';
       }).catch(err=>{
         console.log(err)
       })
     }
  }
}
</script>

<style scoped>
.Addmsg{
 width: 1280px;
  height: 360px;
  margin: 0 auto;
  border: 1px solid gainsboro;
}
.lebble{
  width: 126px;
  height: 240px;
  /* border: 1px solid red; */
  float: left;
  margin-top: 40px;
  margin-left: 30px;
}
.lebble span{
  float: right;
}
.lebble  p{
  float: right;
}
.tex1{
  color: red;
}
.tex2{
  margin-top: 40px;
}
.tex3{
  font-size: 18px;
}
.InpTex{
  width: 480px;
  /* height: 30px; */
  float: left;
  margin-top: 36px;
  margin-left: 10px;
  /* border: 1px solid red; */
}
.InpTex input{
 width: 100%;
 height: 35px;
 outline: none;
 border: 0;
}
div /deep/ .el-button--primary{
  color: black;
  background-color: white;
  border: 1px solid gray;
}
/* .region button:hover{
  color: black;
  background-color: white;
} */
.uName{
  width: 330px;
  height: 35px;
  float: left;
  border: 1px solid gray;
}
.region{
  width: 460px;
  height: 35px;
  float: left;
  margin-top: 25px;
  /* border: 1px solid gray; */
}
.regBtn{
  margin-left: 60px;
}
.detaddr{
  width: 460px;
  height: 35px;
  float: left;
  margin-top: 25px;
  border: 1px solid gray;
}
.phoneS{
   width: 460px;
  height: 35px;
  float: left;
  margin-top: 25px;
  /* border: 1px solid gray; */
}
.phoneS span{
  float: left;
  line-height: 35px;
  margin: 0 10px;
}
.Aphone{
  width: 150px;
  height: 35px;
  float: left;
  border: 1px solid gray;

}
.Bphone{
  width: 50px;
  height: 35px;
  float: left;
  border: 1px solid gray;

}
.Cphone{
   width: 125px;
  height: 35px;
  float: left;
  border: 1px solid gray;
}
.save{
  width: 200px;
  height: 40px;
  color: white;
  float: left;
  outline: none;
  border: 0;
  margin-top: 30px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  background-color: #f08200;
}
.seleTw,.seleTe,.seleTx{
  width: 80px;
  height: 35px;
  outline: none;
}
.seleTe{
  margin-left: 30px;
}
.seleTx{
  margin-left: 30px;
}
</style>
