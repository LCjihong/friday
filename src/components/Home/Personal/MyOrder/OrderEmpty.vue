<template>
<div>
    <!-- <sidebar></sidebar> -->
    <div class="mobox">
        <div class="mobox1">
            <!-- <p>我的订单</p> -->
        </div>
        <div class="mobox2">
            <div class="mobox3">
                <router-link to="/2/1">全部</router-link>
                <span>|</span>
                <router-link to="/2/2">待付款</router-link>
                <span>|</span>
                <router-link to="/2/3">待发货</router-link>
                <span>|</span>
                <router-link to="/2/4">待收货</router-link>
                <span>|</span>
                <router-link to="/2/5">待评价</router-link>
                <span>|</span>
                <router-link to="/2/6">退款/售后</router-link>
                <span>|</span>
                <router-link to="/2/7">已完成/关闭</router-link>
                <router-link to="/211">订单回收站</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from '../Sidebar';
export default {
    name:'MyOrder',
    components:{
        Sidebar,
    },
}
</script>

<style scoped>
.mobox{
    float:left;
    width:1083px;
    height:625px;
    border:1px solid #e7e7e7;
    /* position: absolute; */
}
.mobox1{
    height:56px;
    line-height: 56px;
    padding-left:20px;
    font-size:17px;
    color:#494949;
    border-bottom:1px solid #e9e9e9;
    box-sizing: border-box;
    margin-bottom:20px;
}
.mobox2{
    padding-left:20px;
    box-sizing: border-box;
}

.mobox3{
    height:68px;
    color:#666666;
    /* line-height: 68px; */
}
.mobox3>a{
    display: inline-block;
    height:28px;
    line-height: 28px;
    text-align: center;
    padding: 0px 8px;
    cursor: pointer;
    text-decoration: none;
    color:#999999;
}
/* .mobox3>span{
    margin:0px 16px;
} */
.mobox3 a:last-child{
    float:right;
    color:#4b943d;
    margin-right:16px;
    text-decoration: underline;
}
a.router-link-active{
    background:#f08200;
    color:white;
    border-radius:3px;
}
</style>
