<template>
<div class="mobox1">
    <div class="mobox2">
        <div class="mobox3">
            <router-link to="/personal/morder/morder">全部</router-link>
            <span>|</span>
            <router-link to="/personal/morder/morderone">待付款</router-link>
            <span>|</span>
            <router-link to="/personal/morder/mordertwo">待发货</router-link>
            <span>|</span>
            <router-link to="/personal/morder/morderthree">待收货</router-link>
            <span>|</span>
            <router-link to="/personal/morder/morderfour">待评价</router-link>
            <span>|</span>
            <router-link to="/personal/morder/morderfive">退款/售后</router-link>
            <span>|</span>
            <router-link to="/personal/morder/mordersix">已完成/关闭</router-link>
            <router-link to="/211">订单回收站</router-link>
        </div> 
    </div>
    <router-view></router-view>
</div>
</template>

<script>
// import Sidebar from '../Sidebar';
export default {
    name:'MyOrder',
    // components:{
    //     Sidebar,
    // },
    data(){
        return {
            currentPage3: 1,
            order:[{
                oemgs1: '150319690000',
                oemgs2: '2015.04.09  18:06:06',
                oemgs3: '爱果果水果店',
                oemgs4: '关闭',
                oemgs5: 'http://renjihong.zone:2000/PersonalCenter/head.png',
                oemgs6: '云南昭通丑苹果',
                oemgs7: '6',
                oemgs8: '35.0',
                oemgs9: '1',
                oemgs10: '105.0',
                oemgs11: '8.0',
            },{
                oemgs1: '150319690000',
                oemgs2: '2015.04.09  18:06:06',
                oemgs3: '爱果果水果店',
                oemgs4: '申请退款中',
                oemgs5: 'http://renjihong.zone:2000/PersonalCenter/head.png',
                oemgs6: '云南昭通丑苹果',
                oemgs7: '6',
                oemgs8: '35.0',
                oemgs9: '1',
                oemgs10: '105.0',
                oemgs11: '8.0',
            },{
                oemgs1: '150319690000',
                oemgs2: '2015.04.09  18:06:06',
                oemgs3: '爱果果水果店',
                oemgs4: '退款失败',
                oemgs5: 'http://renjihong.zone:2000/PersonalCenter/head.png',
                oemgs6: '云南昭通丑苹果',
                oemgs7: '6',
                oemgs8: '35.0',
                oemgs9: '1',
                oemgs10: '105.0',
                oemgs11: '8.0',
            },{
                oemgs1: '150319690000',
                oemgs2: '2015.04.09  18:06:06',
                oemgs3: '爱果果水果店',
                oemgs4: '已发货',
                oemgs5: 'http://renjihong.zone:2000/PersonalCenter/head.png',
                oemgs6: '云南昭通丑苹果',
                oemgs7: '6',
                oemgs8: '35.0',
                oemgs9: '1',
                oemgs10: '105.0',
                oemgs11: '8.0',
            },{
                oemgs1: '150319690000',
                oemgs2: '2015.04.09  18:06:06',
                oemgs3: '爱果果水果店',
                oemgs4: '待发货',
                oemgs5: 'http://renjihong.zone:2000/PersonalCenter/head.png',
                oemgs6: '云南昭通丑苹果',
                oemgs7: '6',
                oemgs8: '35.0',
                oemgs9: '1',
                oemgs10: '105.0',
                oemgs11: '8.0',
            },{
                oemgs1: '150319690000',
                oemgs2: '2015.04.09  18:06:06',
                oemgs3: '爱果果水果店',
                oemgs4: '待付款',
                oemgs5: 'http://renjihong.zone:2000/PersonalCenter/head.png',
                oemgs6: '云南昭通丑苹果',
                oemgs7: '6',
                oemgs8: '35.0',
                oemgs9: '1',
                oemgs10: '105.0',
                oemgs11: '8.0',
            },], 
        }
    },
    methods:{
        oehandle1(index){
            console.log(index)
        },
        handleSizeChange(val) {         // page-size 改变时会触发
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {      // current-change current-page改变时会触发
            console.log(`当前页: ${val}`);
        }
    },
}
</script>

<style scoped>

.mobox1{
    padding-bottom:20px;
    box-sizing: border-box;
    position: relative;
}
.mobox2{
    padding-left:20px;
    box-sizing: border-box;
}

.mobox3{
    height:60px;
    color:#666666;
    /* margin-top:10px; */
    line-height: 60px;
}
.mobox3>a{
    display: inline-block;
    height:38px;
    line-height: 38px;
    text-align: center;
    padding: 0px 8px;
    cursor: pointer;
    text-decoration: none;
    color:#999999;
    margin-top:10px;
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