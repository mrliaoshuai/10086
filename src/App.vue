<template>
  <div id="app">
    <images-for></images-for>
    <keep-alive>
      <!-- exclude="GoodsDetail" -->
      <router-view />
    </keep-alive>
    <main-tar-bar></main-tar-bar>
  </div>
</template>
<script>
import ImagesFor from "./views/home/childComps/ImagesFor.vue";
import MainTarBar from "components/common/tarbar/MainTarBar.vue";
export default {
  methods: {},
  components: {
    MainTarBar,
    ImagesFor,
  },
};
</script>
<style scoped>
@import "./assets/css/base.css";
#app {
  width: 100vw;
  height: 100vh;
}
</style>