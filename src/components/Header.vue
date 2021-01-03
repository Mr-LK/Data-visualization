<template>
  <div id="nav">
    <div id="nav_one" >
      <div v-for="item in routerList" id="nav_two" :key="item.id">
        <router-link :to="{ path: item.path }" tag="li" active-class="enabled">
            <span>{{ item.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        routerList: [
            { name: '园区总览', path: '/' },
            { name: '企业产值', path: '/output-value' },
            { name: '园区服务', path: 'service' }
        ]
    };
  },
  methods: {},
  mounted(){
  },   
};
</script>
<style scoped>
/* #nav {
  background-image:url("../assets/img/himg/bg.png") ;
  width: 100%;
  border-bottom: 4px solid #0052a6;
  font-size: 16px;
} */
#nav span {
  width: 208px;
  height: 26px;
  font-size: 26px;
  font-weight: 500;
  color: rgba(238, 238, 238, 1);
  position: absolute;
  top: 18px;
}
.nav_one_img{
    width: 360px;
    height: 50px;
    position: absolute;
    top: 20px;
}
#nav_one {
  width: 1300px;
  height: 196px;
  text-align: center;
  overflow: hidden;
  display: flex;
  color: white;
  position: relative;
  margin: 0 auto;
}
#nav_two {
  display: inline-block;
  flex: 1;
  line-height: 223px;
}
#nav_two li {
  width: 100px;
  height: 100px;
  display: inline-block;
  line-height: 100px;
  margin-top: 98px;
  margin-bottom: 35px;
  cursor: pointer;
  position: relative;
  line-height: 150px;
}
#nav_two li img{
    position: absolute;
    left: 30px;
    top: 16px;
}
/* .enabled { */
  /* color: #FDA53C; */
  /* background: url('../assets/img/jimg/icon_nav_bg.png') no-repeat; */
/* } */
</style>