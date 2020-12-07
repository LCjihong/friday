<template>
    <div class="topNav">
      <div class="navCan">{{config.rouTex}}</div>
    </div>
</template>

<script>
export default {
 name:'Breadnav',
 props:['config'],
  data(){
    return {
       navcan:'',
       routers:this.config.routera,
    }
  },
  watch: {

  },
  methods: {

  },
  beforeMount(){

  }
}
</script>

<style scoped>
.topNav{
  width: 1280px;
  height: 94px;
  margin: 0 auto;
  background-color: white;
}
.navCan{
  width: 100%;
  height: 54px;
  margin-top: 20px;
  background-color: #f4f4f4;
  float: left;
  line-height: 54px;
  text-indent: 20px;
  color: gray;
}
</style>
