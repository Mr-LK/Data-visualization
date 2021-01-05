<template>
  <div id="nav">
    <div class="headertitle">
      <span>台州市飞跃科创园区</span>
    </div>
    <div class="headerrouter">
      <ul>
        <router-link :to="{ path: item.path }" tag="li" active-class="enabled" v-for="item in routerList" :key="item.name" class="routerview">
          {{ item.name }}
       </router-link>
      </ul>
    </div>
    <div class="headertime">
      <span>
        {{ nowTime }}
      </span>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
        routerList: [
            { name: '园区总览', path: '/overview' },
            { name: '企业产值', path: '/output-value' },
            { name: '园区服务', path: '/service' },
            { name: '人行管理', path: '/pedestrian' },
            { name: '车位管理', path: '/parking-space' },
            { name: '一企一档', path: '/enterprise' }
        ],
        nowTime: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  },
  methods: {},
  mounted(){
  },   
};
</script>
<style scoped>
#nav {
  width: 100%;
  overflow: hidden;
}
.headertitle {
  background: url('../assets/globalImg/ldbg.png');
  background-repeat: no-repeat;
  width: 22%;
  height: 65px;
  text-align: center;
  line-height: 65px;
  font-weight: 600;
  float: left;
}
.headertitle span {
  color: white;
  font-size: 30px;
}
.headerrouter {
  width: 53%;
  padding-top: 20px;
  padding-left: 20px;
  float: left;
}
.headertime {
  width: 22%;
  float: right;
  color:white;
  text-align: right;
  margin-right: 20px;
  font-size: 14px;
  padding-top: 20px;
}
.routerview {
  color: white;
  display: inline-block;
  margin-right: 20px;
  padding-bottom: 10px;
  cursor: pointer;
}
.enabled {
  color: #00FFFF;
  border-bottom: 1px #00FFFF solid;
}
</style>