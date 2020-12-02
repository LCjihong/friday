<template>
<div>
    <!-- <sidebar></sidebar> -->
    <div class="rcbox">
        <div class="rcboxtop1">
            <p>充值卡兑换</p>
            <router-link to="/">查看账单</router-link>
        </div>
        <div class="rcboxbottom">
            <div class="rcboxbottom1">
                <input type="text" placeholder="请输入充值卡兑换码进行充值">
            </div>
            <router-link to="/" class="rcboxbottom2">充值</router-link>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from '../Sidebar';
export default {
    name: 'RechargeCard',
    components:{
        Sidebar,
    },
    // data(){
    //     return {
    //         input1: '',
    //     }
    // }
}
</script>

<style scoped>
.rcbox{
    float: left;
    width:1083px;
    height:623px;
    border:1px solid #e7e7e7;
}
.rcboxtop1{
    height:56px;
    line-height: 56px;
    padding-left:20px;
    border-bottom:1px solid #e7e7e7;
}
.rcboxtop1>p{
    float: left;
    font-size: 17px;
}
.rcboxtop1>a{
    float: right;
    width:90px;
    height:30px;
    line-height: 30px;
    border-radius:4px;
    background:#498e3d;
    color:white;
    text-decoration: none;
    font-size:14px;
    text-align: center;
    margin-right:20px;
    margin-top:13px;
}
.rcboxbottom{
    padding-left:31px;
    padding-top:50px;
    box-sizing: border-box;
}
.rcboxbottom1{
    width:475px;
    height:53px;
    border:1px solid #e7e7e7;
    transition: 1s;
    border-radius: 2px;
}
.rcboxbottom1:hover{
    border:1px solid #112188
}
.rcboxbottom1 input{
    width:100%;
    height:100%;
    border:0px;
    outline: none;
    text-indent: 1em;
    font-size:17px;
}
.rcboxbottom2{
    width:150px;
    height:50px;
    line-height: 50px;
    background:#f08200;
    border-radius:4px;
    text-align: center;
    color:white;
    font-size:18px;
    margin-top:100px;
    display:inline-block;
    text-decoration: none;
}
</style>
