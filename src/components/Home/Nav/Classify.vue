<template>
  <div class="classify">
    <!-- <breadnav :config='routers'></breadnav> -->
    <router-view></router-view>
  </div>
</template>

<script>
import breadnav from '@/components/Breadnav'
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
</style>
