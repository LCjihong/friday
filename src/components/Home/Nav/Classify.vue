<template>
<<<<<<< HEAD
  <div class="classify">
    <breadnav :config='routers'></breadnav>
    <div class="navCentent">
      <router-view></router-view>
    </div>
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
=======
  <!-- 这里放页面路径组件 -->
  <router-view></router-view>
</template>

<script>
export default {
  name:'Classify'
}
</script>

<style>

</style>
>>>>>>> 457ce5466f87c416dd2f74fa1865b2b207c7b514
