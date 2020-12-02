<template>
<div>
    <!-- <sidebar></sidebar> -->
    <div class="pdbox">
        <div class="pdbox1">
            <p>个人资料</p>
        </div>
        <div class="pdbox2">
            <div class="pabox2span1">
                <p>当前头像 : </p>
                <div>
                    <img src="http://renjihong.zone:2000/PersonalCenter/head.png" alt="">
                </div>
                <p>修改</p>
            </div>
            <div class="pabox3">
                <form>
                    <div class="pabox3div1">
                        <p>昵称 : </p>
                        <div>
                            <el-input v-model="nickname" placeholder="请输入内容" :disabled="disabled"></el-input>
                        </div>
                    </div>
                    <div class="pabox3div5">
                        <p>性别 : </p>
                        <div>
                            <input id="man" type="radio" :checked="checked1" name="sex">
                            <label for="man">男</label>
                            <input id="wonmen" type="radio" :checked="checked2" name="sex">
                            <label for="wonmen">女</label>
                        </div>
                    </div>
                    <div class="pabox3div2">
                        <p>生日 : </p>
                            <div class="block">
                                <el-date-picker
                                v-model="value1"
                                type="year"
                                placeholder="选择年">
                                </el-date-picker>
                                <span class="demonstration">年</span>
                            </div>
                            <div class="block">
                                <el-date-picker
                                v-model="value2"
                                type="month"
                                format="M"
                                placeholder="选择月">
                                </el-date-picker>
                                <span class="demonstration">月</span>
                            </div>
                            <div class="block">
                                <el-date-picker
                                v-model="value3"
                                type="date"
                                format="d"
                                placeholder="选择年">
                                </el-date-picker>
                                <span class="demonstration">日</span>
                            </div>
                    </div>
                    <div class="pabox3div3">
                        <p>手机 : </p>
                        <div>
                            <el-input v-model="pdcellphone" :disabled="disabled"></el-input>
                        </div>
                    </div>
                    <div class="pabox3div4">
                        <input type="button" value="确认提交">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- <div class="pdbox4" disabled></div> -->
</div>
</template>

<script>
import Sidebar from '../Sidebar';
export default {
    name: 'PersonalData',
    components:{
        Sidebar,
    },
    data(){
        return {
            disabled: true,
            nickname: '13012341234',
            value1: '',
            value2: '',
            value3: '',
            checked1: true,
            checked2:'',
            pdcellphone:'13012341234',
        }
    }
}
</script>

<style scoped>
/* *{
    padding:0;
    margin:0;
} */

.pdbox{
    float:left;
    width:1083px;
    height:625px;
    border:1px solid #e7e7e7;
    /* position: absolute; */
}
.pdbox4{
    width:1083px;
    height:625px;
    background:yellow;
    /* position: absolute; */
    Z-index: 9999;
}
.pdbox1{
    height:56px;
    line-height: 56px;
    padding-left:20px;
    font-size:17px;
    color:#494949;
    border-bottom:1px solid #e9e9e9;
    box-sizing: border-box;
}
.pabox2span1{
    height:76px;
    line-height:76px;
    font-size:17px;
    color:#333333;
    margin-left:40px;
    margin-top:40px;
    margin-bottom:11px;
}
.pabox2span1>div{
    height:100%;
    margin-left:6px;
    margin-right:10px;
}
.pabox2span1 p:nth-child(3){
    color:#4b943d;
    font-size:14px;
}
.pabox2span1>p,.pabox2span1>div{
    float: left;
}
.pabox3div1{
    height:35px;
}
form>div{
    height:35px;
    line-height: 35px;
    color:#494949;
    padding-left:76px;
    margin-bottom:20px;
    box-sizing: border-box;
}
form>div>div,form>div>p{
    display: inline-block;
}

.el-date-editor.el-input{
    width:108px;
    height:33px;
}
.pabox3div1 input,.pabox3div3 input{
    width:100%;
    height:100%;
    border:0px;
    outline: none;
}
.pabox3div4>input{
    width:150px;
    height:50px;
    border:0px;
    outline: none;
    background:#f08200;
    color:white;
    font-size:19px;
    border-radius:4px;
    margin-left:44px;
    margin-top:10px;
}
.pabox3div4 input:hover{
    background:#ce7102;
    color:#eeeeee;
}
</style>
