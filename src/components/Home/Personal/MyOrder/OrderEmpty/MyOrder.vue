<template>
<div class="mobox1">
    <div class="oebox1" v-for="(x, index) in order" :key="index">
        <div class="oebox2">
            <span>订单号 : {{x.oemgs1}}</span>
            <span>下单时间 : {{x.oemgs2}}</span>
            <span>{{x.oemgs3}}</span>
            <div class="oebox3">
                <span>订单状态 : </span>
                <span>{{x.oemgs4}}</span>
            </div>
        </div>
        <div class="oebox4">
            <div class="oebox5">
                <div class="oebox6">
                    <img :src="x.oemgs5" alt="">
                </div>
                <span>{{x.oemgs6}}</span>
                <span>{{x.oemgs7}}个装</span>
                <span>￥{{x.oemgs8}} x {{x.oemgs9}}</span>
            </div>
            <div class="oebox9">
                <div class="oebox10">
                    <img :src="x.oemgs5" alt="">
                </div>
                <span>{{x.oemgs6}}</span>
                <span>{{x.oemgs7}}个装</span>
                <span>￥{{x.oemgs8}} x {{x.oemgs9}}</span>
            </div>
            <!-- 待付款 -->
            <div class="oebox7" v-if="x.oemgs4=='待付款'?true:false">
                <div class="oebox8">
                    <span>店铺合计 : ￥{{x.oemgs10}}</span>
                    <span>( 含运费 : ￥{{x.oemgs11}} )</span>
                </div>
                <div class="oebox11">
                    <router-link :to="{ path: '/news', query: { userId: 1111}}">查看详情</router-link>
                    <div @click="oehandle1(index)">删除订单</div>
                    <div>取消订单</div>
                </div>
            </div>
            <!-- 关闭  -->
            <div class="oebox7" v-if="x.oemgs4=='关闭'?true:false">
                <div class="oebox8">
                    <span>店铺合计 : ￥{{x.oemgs10}}</span>
                    <span>( 含运费 : ￥{{x.oemgs11}} )</span>
                </div>
                <div class="oebox12">
                    <router-link :to="{ path: '/news', query: { userId: 1111}}">查看详情</router-link>
                    <div @click="oehandle1(index)">删除订单</div>
                </div>
            </div>
            <!-- 代发货 -->
            <div class="oebox7" v-if="x.oemgs4=='待发货'?true:false">
                <div class="oebox8">
                    <span>店铺合计 : ￥{{x.oemgs10}}</span>
                    <span>( 含运费 : ￥{{x.oemgs11}} )</span>
                </div>
                <div class="oebox12">
                    <router-link :to="{ path: '/news', query: { userId: 1111}}">查看详情</router-link>
                    <div>申请退款</div>
                </div>
            </div>
            <!-- 已发货 -->
            <div class="oebox7" v-if="x.oemgs4=='已发货'?true:false">
                <div class="oebox8">
                    <span>店铺合计 : ￥{{x.oemgs10}}</span>
                    <span>( 含运费 : ￥{{x.oemgs11}} )</span>
                </div>
                <div class="oebox11">
                    <router-link :to="{ path: '/news', query: { userId: 1111}}">查看详情</router-link>
                    <div>确认收货</div>
                    <div>查看物流</div>
                </div>
            </div>
            <!-- 申请退款中 -->
            <div class="oebox7" v-if="x.oemgs4=='申请退款中'?true:false">
                <div class="oebox8">
                    <span>店铺合计 : ￥{{x.oemgs10}}</span>
                    <span>( 含运费 : ￥{{x.oemgs11}} )</span>
                </div>
                <div class="oebox13">
                    <router-link :to="{ path: '/news', query: { userId: 1111}}">查看详情</router-link>
                </div>
            </div>
            <!-- 退款中 -->
            <div class="oebox7" v-if="x.oemgs4=='退款中'?true:false">
                <div class="oebox8">
                    <span>店铺合计 : ￥{{x.oemgs10}}</span>
                    <span>( 含运费 : ￥{{x.oemgs11}} )</span>
                </div>
                <div class="oebox13">
                    <router-link :to="{ path: '/news', query: { userId: 1111}}">查看详情</router-link>
                </div>
            </div>
            <!-- 退款失败 -->
            <div class="oebox7" v-if="x.oemgs4=='退款失败'?true:false">
                <div class="oebox8">
                    <span>店铺合计 : ￥{{x.oemgs10}}</span>
                    <span>( 含运费 : ￥{{x.oemgs11}} )</span>
                </div>
                <div class="oebox12">
                    <router-link :to="{ path: '/news', query: { userId: 1111}}">查看详情</router-link>
                    <div>申请平台接入</div>
                </div>
            </div>
            <!-- 已收货 -->
            <div class="oebox7" v-if="x.oemgs4=='已收货'?true:false">
                <div class="oebox8">
                    <span>店铺合计 : ￥{{x.oemgs10}}</span>
                    <span>( 含运费 : ￥{{x.oemgs11}} )</span>
                </div>
                <div class="oebox14">
                    <router-link :to="{ path: '/news', query: { userId: 1111}}">查看详情</router-link>
                    <div>申请退款</div>
                    <div>去评价</div>
                    <div>交易完成</div>
                </div>
            </div>

        </div>
    </div>
    <div class="block mibox13">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange" 
        :current-page.sync="currentPage3"
        :page-size="5"
        layout="prev, pager, next, jumper"
        :total="50">
        </el-pagination>
    </div>
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


.oebox1{
    width:1044px;
    margin:0px 20px 20px 20px;
    border:1px solid #e9e9e9;
}
.oebox2{
    height:46px;
    line-height: 46px;
    background:#f2f2f2;
    font-size: 15px;
    color:#333333;
    padding:0px 20px;
}
.oebox2>div{
    float: right;
}
.oebox2>span:nth-child(2){
    margin:0px 80px;
}
.oebox2>span:nth-child(3){
    color:#4b943d;
}
.oebox3{
    color:#f08200;
}
.oebox4{
    /* margin-left:20px;
    margin-top:20px; */
    color:#666666;
    box-sizing: border-box;
}


.oebox5{
    float: left;
    width:698px;
    height:120px;
    padding:20px;
    line-height: 78px;
    border-bottom:1px solid #e9e9e9;
    box-sizing: border-box;
}
.oebox5>span,.oebox9>span{
    float: left;
}
.oebox5>span:nth-child(2),.oebox9>span:nth-child(2){
    margin:0px 70px 0px 30px;
}
.oebox5>span:nth-child(4),.oebox9>span:nth-child(4){
    margin:0px 70px 0px 120px;
}

.oebox9{
    float: left;
    width:698px;
    height:120px;
    padding:20px;
    line-height: 78px;
    box-sizing: border-box;
}

.oebox6,.oebox10{
    width:78px;
    height:78px;
    border:1px solid #dedede;
    margin-bottom:20px;
    float: left;
}
.oebox6>img,.oebox10>img{
    width:80%;
    margin:10%;
}



.oebox7{
    display: inline-block;
    width:346px;
    height:240px;

}


.oebox8{
    display:inline-block;
    width:208px;
    height:240px;
    border-left:1px solid #e9e9e9;
    border-right:1px solid #e9e9e9;
    padding-top:90px;
    box-sizing: border-box;
}
.oebox8>span{
    width:100%;
    display: inline-block;
    line-height:30px;
    text-align: center;
}

/* 四个的 */
.oebox14{
    width:133px;
    height:240px;
    text-align: center;
    float: right;
    padding:30px 0px;
    box-sizing: border-box;
}
.oebox14>a{
    color:#4b943d;
    margin-bottom:100px;
}
.oebox14>div{
    width:90px;
    height:30px;
    line-height: 30px;
    background:#f08200;
    border-radius: 4px;
    color:white;
    margin-left:24px;
    cursor: pointer;
}
.oebox14>div:nth-child(2){
    margin-top:20px;
    margin-bottom:20px;
}
.oebox14>div:nth-child(4){
    margin-top:20px;
}

/* 三个的 */
.oebox11{
    width:133px;
    height:240px;
    text-align: center;
    float: right;
    padding:60px 0px;
    box-sizing: border-box;
}
.oebox11>a{
    color:#4b943d;
    margin-bottom:100px;

}
.oebox11>div{
    width:90px;
    height:30px;
    line-height: 30px;
    background:#999999;
    border-radius: 4px;
    color:white;
    margin-left:24px;
    cursor: pointer;
}
.oebox11>div:nth-child(2){
    margin-top:20px;
    margin-bottom:20px;
}
.oebox11 div:nth-child(2){
    background:#f08200;
}


/* 两个的 */
.oebox12{
    width:133px;
    height:240px;
    text-align: center;
    float: right;
    padding:80px 0px;
    box-sizing: border-box;
}
.oebox12>a{
    color:#4b943d;
    margin-bottom:100px;

}
.oebox12>div{
    width:90px;
    height:30px;
    line-height: 30px;
    background:#f08200;
    border-radius: 4px;
    color:white;
    margin-left:24px;
    margin-top:20px;
    cursor: pointer;
}

/* 一个的 */
.oebox13{
    width:133px;
    height:240px;
    text-align: center;
    float: right;
    padding:110px 0px;
    box-sizing: border-box;
}
.oebox13>a{
    color:#4b943d;
    margin-bottom:100px;

}
.mibox13{
    /* margin:20px 0px 20px 20px; */
    position: absolute;
    left:20px;
    bottom:0px;
    color:#666666;
}
</style>