<template>
<div>
    <!-- 积分详情 -->
    <div class="idbox"></div>
    <sidebar></sidebar>
    <div class="odbox">
        <div class="odbox1">
            <span>订单编号 : {{odmessage1}}</span>
            <div class="odbox3">
                <div @click="odhandle1">立即支付</div>
                <div @click="odhandle2">取消订单</div>
            </div>
            <div class="odbox2">
                <span>订单状态 : <span>{{odmessage2}}</span></span>
            </div>
        </div>
        <div class="odbox4">
            <div class="odbox5">
                <div>
                    <span>支付方式</span>
                    <span>{{odmessage3}}</span>
                </div>
                <div>
                    <span>支付流水号</span>
                    <span>{{odmessage4}}</span>
                </div>
                <div>
                    <span>下单时间</span>
                    <span>{{odmessage5}}</span>
                </div>
                <div>
                    <span>支付时间</span>
                    <span>{{odmessage6}}</span>
                </div>
                <div>
                    <span>发货时间</span>
                    <span>{{odmessage7}}</span>
                </div>
                <div>
                    <span>收货时间</span>
                    <span>{{odmessage8}}</span>
                </div>
                <div>
                    <span>订单备注</span>
                    <span>{{odmessage13}}</span>
                </div>
            </div>
            <p>收货人信息</p>
            <div class="odbox5">
                <div>
                    <span>收货人姓名</span>
                    <span>{{odmessage14}}</span>
                </div>
                <div>
                    <span>地址</span>
                    <span>{{odmessage15}}</span>
                </div>
                <div>
                    <span>联系方式</span>
                    <span>手机 : {{odmessage16}}/固定电话 : {{odmessage17}}</span>
                </div>
            </div>
            <p>物流信息</p>
            <div class="odbox6">
                <div>
                    <span>联系人 : </span>
                    <span>{{odmessage20}}</span>
                </div>
                <div>
                    <span>联系方式 : </span>
                    <span>{{odmessage21}}</span>
                </div>
            </div>
            <div class="odbox8">
                <div class="odbox9">
                    <span>爱果果水果店</span>
                    <span>规格</span>
                    <span>单价</span>
                    <span>数量</span>
                    <span>金额</span>
                </div>
                <div class="odbox10" v-for="(x,index) in index2" :key='index'>
                    <div class="odbox11">
                        <img :src="idmessage31" alt="">
                        <!-- <img src="" alt=""> -->
                    </div>
                    <span>{{x.odmessage25}}</span>
                    <div class="odbox12">{{x.odmessage26}}</div>
                    <div class="odbox12">￥{{x.odmessage27}}</div>
                    <div class="odbox12">{{x.odmessage28}}</div>
                    <div class="odbox12">{{x.odmessage29}}积分</div>
                </div>
                <div class="odbox13">
                    <span>实付金额 : </span>
                    <span>{{odmessage30}}积分</span>
                </div>
                <div class="odbox14">
                    <div @click="odhandle3">立即支付</div>
                    <div @click="odhandle4">取消订单</div>
                </div>
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
    data(){
        return {
            odmessage1:'15041305000006958388',
            odmessage2: '待兑换',
            odmessage3: '积分',
            odmessage4: '4643196461647896166',
            odmessage5: '2016-04-03 16:11:38',
            odmessage6: '',
            odmessage7: '',
            odmessage8: '',
            odmessage13: '希望包装的严实一些，不要有破损请款，谢谢',
            odmessage14: '王敏敏',
            odmessage15: '464319461647896166',
            odmessage16: '15035689566',
            odmessage17: '010-12548756',
            odmessage20: '张小哥',
            odmessage21: '13995684562',
            odmessage22: '海澜之家旗舰店',
            odmessage23: '赵敏芝',
            odmessage24: '0512-25664952',
            odmessage30: '500',
            idmessage31: 'http://renjihong.zone:2000/PersonalCenter/head.png',
            index2:[{
                odmessage25: '云南蒙自石榴8个装',
                odmessage26: '8个装',
                odmessage27: '569',
                odmessage28: '1',
                odmessage29: '50',
            },{
                odmessage25: '云南蒙自石榴8个装',
                odmessage26: '8个装',
                odmessage27: '569',
                odmessage28: '1',
                odmessage29: '50',
            },{
                odmessage25: '云南蒙自石榴8个装',
                odmessage26: '8个装',
                odmessage27: '569',
                odmessage28: '1',
                odmessage29: '50',
            },],
        }
    },
    methods:{
        odhandle1(){                // 立即支付
            console.log(this.odmessage30);
            this.$router.push('/testDemo');
        },
        odhandle2(){                // 取消支付
            console.log('取消支付');
            this.$router.push('/testDemo');
        },
        odhandle3(){                // 立即支付
            console.log(this.odmessage30);
            this.$router.push('/testDemo');
        },
        odhandle4(){                // 取消支付
            console.log('取消支付');
            this.$router.push('/testDemo');
        },
    },
    computed:{
        // odmessage29(){

        // }
    }
}
</script>

<style scoped>
.odbox{
    float:left;
    width:1083px;
    /* height:2000px; */
    border:1px solid #e7e7e7;
    margin-bottom:60px;
    /* position: absolute; */
}
.odbox1{
    height:56px;
    line-height: 56px;
    padding-left:20px;
    font-size:17px;
    color:#494949;
    border-bottom:1px solid #e9e9e9;
    box-sizing: border-box;
    /* margin-bottom:20px; */
}
.odbox1>span{
    float:left;
}
.odbox2{
    float:right;
}
.odbox2>span>span{
    color:#f08200;
}
.odbox3{
   float:right;
}
.odbox3>div{
    width:90px;
    height:30px;
    line-height: 30px;
    text-align: center;
    border:1px solid #e9e9e9;
    margin:12px 20px 0px 20px;
    border-radius:4px;
    background:#999999;
    color:white;
    font-size:14px;
    float:left;
    cursor: pointer;
}
.odbox3 div:nth-child(1){
    background:#498e3d;
    margin-left:240px;
}
.odbox4{
    width:100%;
    padding:20px;
    box-sizing: border-box;
    /* border:1px solid #e9e9e9; */
}
.odbox5{
    width:1044px;
    /* height:418px; */
    border:1px solid #e9e9e9;
    background:#f9f9f9;
    color:#666666;
    font-size:16px;
    padding:20px 20px 0px 20px;
    box-sizing: border-box;
}
.odbox5>div{
    height:36px;
}
.odbox5>div span:nth-child(1){
    width:127px;
    display: inline-block;
}
.odbox4>p{
    height:55px;
    line-height: 55px;
    font-size: 16px;
    color:#498e3d;
    margin-left:11px;
}
.odbox6{
    width:1044px;
    border:1px solid #e9e9e9;
    background:#f9f9f9;
    color:#666666;
    font-size:16px;
    padding:20px 20px 0px 20px;
    box-sizing: border-box;
}
.odbox6>div{
    height:36px;
}
.odbox8{
    width:1044px;
    border:1px solid #e9e9e9;
    margin-top:20px;
}
.odbox9{
    height:46px;
    line-height: 46px;
    padding:0px 20px;
    box-sizing: border-box;
    background:#f2f2f2;
    color:#333333;
    font-size: 16px;
}
.odbox9 span:nth-child(2){
    margin:0px 144px 0px 312px;
}
.odbox9 span:nth-child(4){
    margin:0px 144px 0px 146px;
}
.odbox10{
    height:120px;
    border-bottom:1px solid #e9e9e9;
    padding:20px;
    box-sizing: border-box;
}
.odbox11{
    width:78px;
    height:78px;
    border:1px solid #e9e9e9;
    float: left;
}
.odbox11>img{
    width:80%;
    margin:10%;
}
.odbox10>span{
    float: left;
    height:80px;
    line-height: 80px;
    margin-left:10px;
}
.odbox12{
    float: left;
    width:69px;
    height:80px;
    line-height: 80px;
    text-align: center;
}
.odbox10 div:nth-child(3){
    margin:0px 111px 0px 169px;
}
.odbox10 div:nth-child(5){
    margin:0px 110px 0px 110px;
}
.odbox13{
    float: right;
    font-size: 20px;
    color:#ff5757;
    margin:40px 0px;
}
.odbox13 span:nth-child(1){
    color:#666666;
}
.odbox14{
    width:100%;
    float: right;
}
.odbox14>div{
    width:150px;
    height:50px;
    line-height: 50px;
    text-align: center;
    border-radius:4px;
    background:#f08200;
    float:right;
    margin-left:20px;
    margin-bottom:20px;
    color:white;
    font-size: 18px;
    cursor: pointer;
}
.odbox14 div:nth-child(2){
    background:#999999;
}
</style>
