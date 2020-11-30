<template>
  <div class="classify">
    <breadnav :config='routers'></breadnav>
    <router-view></router-view>
  </div>
</template>

<script>
import breadnav from '@/components/breadnav'
export default {
  components:{
    breadnav
  },
  data(){
    return{
      routers:{
      routera:window.location.pathname
     }
    }
  }
}
</script>

<style scoped>
.classify{
  width: 1280px;
  /* height: 1000px; */
  /* float: left; */
  background-color: pink;
  margin: 0 auto;
}

</style>
