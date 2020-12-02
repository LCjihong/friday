<template>
    <el-row id="opinion">
      <textarea cols="30" rows="10" v-model="opinion" placeholder="请输入您的建议"></textarea>
      <el-row class="btn-box">
        <el-button class="btn" type="info">取消</el-button>
        <el-button class="btn" type="success">提交</el-button>
      </el-row>
    </el-row>
</template>

<script>
export default {
  name:'Opinion',
  data(){
    return{
      opinion:''
    }
  }
}
</script>

<style>
  #opinion{
    padding: 40px 40px 0;
  }
  textarea{
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #d9d9d9;
    outline: unset;
    resize: unset;
    height: 372px;
    padding: 20px 20px 0;
    font-size: 16px;
    color: #333333;
  }
  .btn-box{
    text-align: center;
    padding-top: 40px;
  }
  .btn{
    padding: 15px 55px;
    font-size: 18px;
  }
  .btn:nth-child(1){
    margin-right: 55px;
    background-color: #999999;
    border-color: #999999;
  }
  .btn:nth-child(1):hover{
    background-color: #b8b6b6;
    border-color: #b8b6b6;
  }
  .btn:nth-child(1):active{
    background-color: #9e9d9d;
    border-color: #9e9d9d;
  }
  .btn:last-child{
    background-color: #f08200;
    border-color: #f08200;
  }
  .btn:last-child:hover{
    background-color: #e69a3d;
    border-color: #e69a3d;
  }
  .btn:last-child:active{
    background-color: #df7a00;
    border-color: #df7a00;
  }
</style>