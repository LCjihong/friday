<template>
<div>
    <!-- <sidebar></sidebar> -->
    <div class="mbbox">
        <div class="mbbox1">
            <p>我的账单</p>
        </div>
        <div class="mbbox2">
            <table cellspacing="0" cellpadding='0'>
                <tr height="53px" style="background:#f2f2f2">
                    <th>操作</th>
                    <th>充值金额</th>
                    <th>账户余额</th>
                    <th>时间</th>
                </tr>
                <tr v-for="(x,index) in tableData" style="border:1px solid red" :key='index'>
                    <td>{{x.date}}</td>
                    <td>{{x.name}}</td>
                    <td>{{x.address}}</td>
                    <td>{{x.timer}}</td>
                </tr>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from '../Sidebar';
export default {
    name:'MyBill',
    components:{
        Sidebar,
    },
    data(){
        return {
            tableData: [{
                date: '充值',
                name: '+￥1000.00元',
                address: '￥3443.03元',
                timer: '2016-05-02 17:21:21'
            }, {
                date: '消费',
                name: '-￥1000.00元',
                address: '￥3443.03元',
                timer: '2016-05-02 17:21:21'
            }, {
                date: '退款',
                name: '+￥1000.00元',
                address: '￥3443.03元',
                timer: '2016-05-02 17:21:21'
            }, {
                date: '消费',
                name: '-￥1000.00元',
                address: '￥3443.03元',
                timer: '2016-05-02 17:21:21'
            },{
                date: '充值',
                name: '+￥1000.00元',
                address: '￥3443.03元',
                timer: '2016-05-02 17:21:21'
            },{
                date: '消费',
                name: '-￥1000.00元',
                address: '￥3443.03元',
                timer: '2016-05-02 17:21:21'
            },{
                date: '退款',
                name: '+￥1000.00元',
                address: '￥3443.03元',
                timer: '2016-05-02 17:21:21'
            },]
        }
    }
}
</script>

<style scoped>
.mbbox{
    float: left;
    width:1083px;
    height:623px;
    border:1px solid #e7e7e7;
}
.mbbox1{
    height:56px;
    line-height: 56px;
    padding-left:20px;
    border-bottom:1px solid #e7e7e7;
    margin-bottom:20px;
}
.mbbox1>p{
    float: left;
    font-size: 17px;
}
.mbbox2{
    padding-left:20px;
    box-sizing: border-box;
}
table{
    width:1040px;
    /* height:412px; */
    border:1px solid #e7e7e7;
    text-align: center;
}
tr{
    height:53px;
}
table tr:hover{
    background:#e7e7e7;
}
td{
  border-bottom:1px solid #e7e7e7;
}
tr td:nth-child(3){
    color:#f08200;
}
</style>

