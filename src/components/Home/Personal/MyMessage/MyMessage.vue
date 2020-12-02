<template>
  <el-row id="message">
    <el-table
      :data="tableData"
      height="100%"
      style="width: 100%; border: 1px solid #e4e4e4; border-bottom: unset"
      :header-cell-style="{
        textAlign:'center',
        backgroundColor:'#f2f2f2',
        color:'black',
        fontSize:'16px',
        height:'46px'
      }"
      :cell-style="{
        textAlign:'center',
        height:'53px',
        fontSize:'14px'
      }"
      row-class-name="tableRow"
    >
      <el-table-column prop="title" label="标题" width="497"></el-table-column>
      <el-table-column prop="time" label="发货时间" width="266"></el-table-column>
      <el-table-column prop="status" label="状态" width="115"></el-table-column>
      <el-table-column label="操作">
        <!-- <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查看</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
        <em class="operat" @click="handleEdit(scope.$index, scope.row)">查看</em>
        <el-divider direction="vertical"></el-divider>
        <em class="operat" @click="handleDelete(scope.$index, scope.row)">删除</em>
      </el-table-column>
    </el-table>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          title:'您的货物已发货',
          time:'2020年11月30日 23:14:07',
          status:'未查看'
        }
      ],
    };
  },
  methods:{
    headerStyle(){
      return {
        backgroundColor:'green'
      }
    }
  }
};
</script>

<style>
#message {
  padding: 20px;
  height: 566px;
}
#box {
  border: 1px solid #e4e4e4;
}
#box .operat{
  color: #6da563;
  cursor: pointer;
}
#box .operat:hover{
  text-decoration: underline;
}
#box .tableRow:hover>td{
  background-color: #f4fff2;
}
</style>