<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>
<script>
import Header from './components/Header'
import './assets/css/global.css'
export default {
  data () {
    return {
    }
  },
  components: {
    Header
  }
}
</script>
<style lang="scss">
html,body,#app{
  height: 100%;
  background-image:url("./assets/globalImg/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>
