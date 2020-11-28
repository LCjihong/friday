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
@import url('assets/css/reset.css');
@import url('//at.alicdn.com/t/font_2226682_3ty5j6w6d8d.css');
</style>

