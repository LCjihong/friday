<template>
<div>
    <!-- <sidebar></sidebar> -->
    <div class="mibox">
        <!-- <div class="mibox1">
            <p>我的积分</p>
        </div> -->
        <div class="mibox2">
            <!-- <span>当前积分：</span>
            <span>240分</span> -->
            <table cellspacing="0" cellpadding='0'>
                <tr height="53px" style="background:#f2f2f2">
                    <th style="width:30%">积分日期</th>
                    <th style="width:40%">变动</th>
                    <th style="width:30%">来源</th>
                </tr>
                <tr v-for="(x,index) in tableData" :key='index' style="border:1px solid red">
                    <td>{{x.timer}}</td>
                    <td>{{x.date}}</td>
                    <td>{{x.name}}</td>
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
                timer: '2016-05-02 17:21:21',
                date: '+100',
                name: '消费赠送',
            }, {
                timer: '2016-05-02 17:21:21',
                date: '-100',
                name: '积分商城兑换',
            }, {
                timer: '2016-05-02 17:21:21',
                date: '+100',
                name: '消费赠送',
            }, {
                timer: '2016-05-02 17:21:21',
                date: '+100',
                name: '消费赠送',
            },{
                timer: '2016-05-02 17:21:21',
                date: '-100',
                name: '积分商城兑换',
            },{
                timer: '2016-05-02 17:21:21',
                date: '+100',
                name: '消费赠送',
            },{
                timer: '2016-05-02 17:21:21',
                date: '+100',
                name: '消费赠送',
            },]
        }
    },
    beforeMount(){
      this.$emit('integral',240)
    },
}
</script>

<style scoped>
.mibox{
    float: left;
    width:1083px;
    height:623px;
    border:1px solid #e7e7e7;
}
.mibox1{
    height:56px;
    line-height: 56px;
    padding-left:20px;
    border-bottom:1px solid #e7e7e7;
    margin-bottom:20px;
}
.mibox1>p{
    float: left;
    font-size: 17px;
}
.mibox2{
    padding-left:20px;
    box-sizing: border-box;
}

table{
    width:1040px;
    /* height:412px; */
    border:1px solid #e7e7e7;
    text-align: center;
    margin-top:20px;
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

