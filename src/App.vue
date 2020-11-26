<template>
  <div id="app">
    <top-piece></top-piece>
    <router-view @change-message="message = $event"></router-view>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import TopPiece from '@/components/TopPiece';
import FootBar from '@/components/FootBar';
export default {
  name: 'App',
  components:{
    TopPiece,
    FootBar
  }
}
</script>

<style>
<<<<<<< Updated upstream
*{
  margin: 0;
  padding: 0;
}
ul,li{
  list-style: none;
}
=======
  @import url('assets/css/reset.css');
  @import url('//at.alicdn.com/t/font_2226682_h0w0o1aasdh.css');
>>>>>>> Stashed changes
</style>

