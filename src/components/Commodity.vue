<template>
  <ul id="Commodity">
    <li v-for="(item, index) of data" :key="index">
      <div class="img-box">
        <img :src="item.img" />
      </div>
      <p class="title">{{ item.title }}</p>
      <p class="desc">{{ item.desc }}</p>
      <p class="price">
        <em class="iconfont icon-fl-renminbi">{{ item.price }}</em>
        <i class="iconfont icon-fl-renminbi">{{ item.oPrice }}</i>
      </p>
      <span class="iconfont icon-gouwuche cart" @click="open"></span>
    </li>
  </ul>
</template>

<script>
export default {
  name:'Commodity',
  props:['data'],
  methods:{
    open(){
      const h = this.$createElement;
      this.$msgbox({
        title: '请选择产品规格',
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '执行中...';
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        });
      });
    }
  }
}
</script>

<style scoped>
#Commodity{
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#Commodity li{
  width: 305px;
  height: 433px;
  box-sizing: border-box;
  border: 1px solid #dddddd;
  position: relative;
  margin-bottom: 20px;
}
#Commodity p{
  padding-left: 20px;
}
#Commodity .title {
  font-size: 18px;
  line-height: 37px;
}
#Commodity .desc{
  font-size: 14px;
  line-height: 26px;
}
#Commodity .price{
  line-height: 50px;
}
#Commodity .price i{
  font-size: 18px;
  text-decoration: line-through;
  padding-left: 10px;
  vertical-align: top;
}
#Commodity .cart{
  position: absolute;
  right: 19px;
  bottom: 24px;
  font-size: 30px;
  color: #f08200;
  cursor: pointer;
}
#Commodity .img-box{
  width: 100%;
  height: 305px;
  text-align: center;
  line-height: 305px;
}
#Commodity .img-box img{
  width: 100%;
  vertical-align: middle;
}
.price em{
  font-size: 24px;
  font-weight: 900;
  color: #ff5757;
}
.price em::before{
  padding-right: 5px;
}
</style>
