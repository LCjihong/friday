<template>
   <div class="Mdata">
       <div class="content">
          <div class="numHead">
            <span class="headTex">当前头像：</span>
            <p class="Mhead">
              <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
              :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </p>
            <span class="heaT">修改</span>
          </div>
          <div class="lineNum2">
             <div class="nickName1">昵称：</div>
             <div class="nickName">
               <input type="text">
             </div>
          </div>
          <div class="lineSxe">
              <span class="sxeTex">性别：</span>
              <div class="sxeXuan">
                <template>
                  <el-radio v-model="radio" label="1">男</el-radio>
                  <el-radio v-model="radio" label="2">女</el-radio>
                </template>
              </div>
          </div>
          <div class="birthday">
              <span class="birthdayTex">生日：</span>
              <div class="birthdayXuan">
                 <div class="block">
                    <el-date-picker
                      v-model="value3"
                      type="year"
                      placeholder="选择年">
                    </el-date-picker>
                    <span class="demonstration">年</span>
                </div>
                <div class="block">
                  <el-date-picker
                    v-model="value2"
                    type="month"
                    placeholder="选择月">
                  </el-date-picker>
                   <span class="demonstration">月</span>
                </div>
                <div class="block">
                  <el-date-picker
                    type="dates"
                    v-model="value4"
                    placeholder="选择一个或多个日期">
                  </el-date-picker>
                  <span class="demonstration">多个日期</span>
                </div>
              </div>
          </div>
          <div class="phone">
              <span class="phoneTex">手机：</span>
              <div class="phoneNum">
                     <input type="text">
              </div>
          </div>
          <button class="TBtn">提交确认</button>
       </div>
   </div>
</template>

<script>
export default {
data() {
      return {
        radio: '1',
         value1: '',
        value2: '',
        value3: '',
        value4: '',
        imageUrl: 'http://renjihong.zone:2000/particulars/详情商家头像.jpg'
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.Mdata{
  width: 1085px;
  height: 568px;
  border: 1px solid gainsboro;
}
.content{
  width: 1010px;
  height: 370px;
  margin-left: 40px;
  margin-top: 30px;
  /* background-color: gold; */
}
.Mhead{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: gold 2px solid;
  overflow: hidden;
  float: left;
}
.Mhead img{
  width: 100%;
  height: 100%;
}
.numHead{
  width: 100%;
  float: left;
  margin-top: 10px;
}
.headTex{
  float: left;
  line-height: 80px;
}
.heaT{
  float: left;
  line-height:80px ;
  margin-left: 10px;
  color: green;
  cursor: pointer;
}
.lineNum2{
  width: 100%;
  float: left;
  margin-top: 10px;
}
.nickName1{
  float: left;
  margin-left: 33px;
  line-height: 35px;
}
.nickName{
  width: 175px;
  height: 35px;
  float: left;
  border: 1px solid gainsboro;
  /* margin-top: 5px; */
}
.nickName input{
  width: 100%;
  height: 35px;
  outline: none;
  border: 0;
  font-size: 18px;
  background-color: #f4f4f4;
}
.lineSxe{
  width: 100%;
  float: left;
  margin-top: 10px;
}
.sxeTex{
  float: left;
  margin-left: 33px;
  line-height: 35px;
}
.sxeXuan{
  float: left;
  margin-top: 10px;
}
.birthday{
   width: 100%;
  float: left;
  margin-top: 10px;
}
.birthdayTex{
  float: left;
  margin-left: 33px;
  line-height: 35px;
}
.birthdayXuan{
  float: left;
}
.block{
  /* width: 120px; */
  float: left;
}
.phone{
width: 100%;
float: left;
margin-top: 10px;
}
.phoneTex{
  float: left;
  margin-left: 33px;
  line-height: 35px;
}
.phoneNum{
 width: 175px;
  height: 35px;
  float: left;
  border: 1px solid gainsboro;
}
.phoneNum input{
  width: 100%;
  height: 35px;
  outline: none;
  border: 0;
  font-size: 18px;
  background-color: #f4f4f4;
}
.TBtn{
  width: 150px;
  height: 50px;
  color: white;
  border: 0;
  outline: none;
  border-radius: 5px;
  margin-top: 30px;
  margin-left: 200px;
  background-color: #f08200;
}
</style>
