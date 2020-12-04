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
           <p class="tex3">练习电话：</p><p class="iconfont icon-shanhuxiaerqi tex1"></p>
      </span>
    </div>
    <div class="InpTex">
        <div class="uName">
          <input type="text">
        </div>
        <div class="region">
          <el-dropdown size="small" split-button type="primary" >
            北京市
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>上海市</el-dropdown-item>
              <el-dropdown-item>天津市</el-dropdown-item>
              <el-dropdown-item>郑州市</el-dropdown-item>
              <el-dropdown-item>驻马店市</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown size="small" split-button type="primary" class="regBtn">
             北京市
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>上海市</el-dropdown-item>
              <el-dropdown-item>天津市</el-dropdown-item>
              <el-dropdown-item>郑州市</el-dropdown-item>
              <el-dropdown-item>驻马店市</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown size="small" split-button type="primary" class="regBtn">
            北京市
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>上海市</el-dropdown-item>
              <el-dropdown-item>天津市</el-dropdown-item>
              <el-dropdown-item>郑州市</el-dropdown-item>
              <el-dropdown-item>驻马店市</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="detaddr">
            <input type="text">
        </div>
        <div class="phoneS">
            <div class="Aphone">
              <input type="text">
            </div>
            <span>或固定电话</span>
            <div class="Bphone">
              <input type="text">
            </div>
            <span>-</span>
            <div class="Cphone">
              <input type="text">
            </div>
        </div>
        <div class="defaultAddr">
            <template>
              <el-radio v-model="radio" label="1">设为常用地址</el-radio>
            </template>
        </div>
        <button class="save">保存</button>
    </div>
  </div>
</template>

<script>
export default {
data () {
      return {
        radio: ''
      };
    }
}
</script>

<style scoped>
.Addmsg{
 width: 1085px;
  height: 568px;
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
  height: 380px;
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
.defaultAddr{
   width: 460px;
  height: 35px;
  float: left;
  margin-top: 25px;
}
.save{
  width: 150px;
  height: 50px;
  color: white;
  float: left;
  outline: none;
  border: 0;
  margin-top: 30px;
  cursor: pointer;
  font-size: 24px;
  border-radius: 5px;
  background-color: #f08200;
}
div /deep/ .el-button--primary{
  color: black;
  background-color: white;
  border: 1px solid gray;
}
</style>
