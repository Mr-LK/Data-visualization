<template>
  <div class="outvalue">
    <div class="left">
      <div style="height:35px" class="lefta">
        <span style="color:#FFFFFF">企业上半年产值排行</span>
        <div class="leftaa">
          <span class="buttonspan" style="color:white;background:#0A4E86">正序</span>
          <span class="buttonspan" style="background:#FFFFFF">倒序</span>
        </div>
      </div>
        <div class="leftB">
          <div class="leftb" v-for="item in datalist" :key="item.num">
          <span style="color:#3782B1">{{item.num}} </span><span style="color:#FFFFFF">{{ item.company }}</span><br>
          <span style="color:#FFFFFF">上年总产值：</span><span style="color:#3782B1">{{ item.b }}万元</span><div style="width:40px;display:inline-block"></div><span style="color:#FFFFFF">总纳税额：</span><span style="color:#3782B1">{{ item.c }}万元</span>
          </div>
        </div>
      </div>
    <div class="center">
      <ul class="centerul">
        <li v-for="item in navdata" :key="item.name" class="areanav">
          <p>
            {{ item.name }}
          </p>
          <span>
            {{ item.area }}
          </span>
        </li>
      </ul>
      <div style="height:560px"></div>
      <div style="width:100%;height:220px;background:white;margin-left:43px">
      </div>
    </div>
    <div class="right">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'outvalue',
  data () {
    return {
      datalist: [
        { num: 'NO_1', company: '爱科来医疗科技（平湖）有限公司', b: '10245', c: '967' },
        { num: 'NO_2', company: '爱科来医疗科技（平湖）有限公司', b: '10245', c: '967' },
        { num: 'NO_3', company: '爱科来医疗科技（平湖）有限公司', b: '10245', c: '967' },
        { num: 'NO_4', company: '爱科来医疗科技（平湖）有限公司', b: '10245', c: '967' },
        { num: 'NO_5', company: '爱科来医疗科技（平湖）有限公司', b: '10245', c: '967' },
        { num: 'NO_6', company: '爱科来医疗科技（平湖）有限公司', b: '10245', c: '967' },
        { num: 'NO_7', company: '爱科来医疗科技（平湖）有限公司', b: '10245', c: '967' },
        { num: 'NO_8', company: '爱科来医疗科技（平湖）有限公司', b: '10245', c: '967' },
        { num: 'NO_9', company: '爱科来医疗科技（平湖）有限公司', b: '10245', c: '967' }
      ],
      navdata: [
        { name: '上年总产值', area: '7769900万元' },
        { name: '今年当前总产值', area: '876799万元' },
        { name: '上季度总产值', area: '95578万元' }
      ],
    }
  }
}
</script>
<style scoped>
.outvalue {
  padding: 0 20px;
  padding-bottom:20px;
  overflow: hidden;
}
.left {
  width: 22%;
  height: 200px;
  float: left;
  /* background: white;s */
}
.lefta {
  height: 35px;
}
.lefta span {
  font-size: 14px;
  line-height: 35px;
}
.buttonspan {
  padding: 3px 14px;
}
.leftaa {
  float: right;
  border-radius: 3px;
  margin-bottom: 10px;
}
.leftb {
  background: url('../assets/divbg.png');
  background-size: 100% 100%;
  margin-bottom: 10px;
  padding: 10px;
  line-height: 32px;
}
.leftB {
  width: 100%;
  overflow: auto;
  padding-bottom: 10px;
}

.center {
  width: 53%;
  float: left;
  text-align: center;
}
.centerul {
  display: flex;
  padding: 20px 20px 20px 88px;
}
.areanav {
  display: inline-block;
  color: white;
  flex: 1;
  line-height: 30px;
}
</style>