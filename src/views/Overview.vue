<template>
  <div class="overview">
    <div class="left">
      <div style="width: 90%">
        <div class="leftone">
          <span style="color: #00FFFF;font-size: 16px">人车出行</span>
          <div class="leftoneright">
            <span>人行</span>
            <span>车行</span>
          </div>
          <div class="leftoneB" style="color: white; margin-top:20px; overflow:hidden">
            <div class="leftoneBa">
              <p><span class="leftoneBaspan">105</span><span class="leftoneBaspans">人</span></p>
              <span class="leftoneBaspans">入园人数</span>
              <p><span class="leftoneBaspan">23</span><span class="leftoneBaspans">人</span></p>
              <span class="leftoneBaspans" style="margin-bottom:5px">访客人数</span>
              <p style="height:19px"></p>
              <span class="leftoneBaspanbutton">数据分析</span>
            </div>
            <div class="leftoneBb">
            </div>
          </div>
        </div>
        <div class="lefttwo" style="margin-top:40px;overflow:hidden">
          <span style="color: #00FFFF;font-size: 16px;display: block">物业工单</span>
          <div class="lefttwoa">
            <div class="lefttwoa1" style="margin:10px 0px">26</div>
            <span>本月工单</span>
            <br>
            <div class="lefttwoa2" style="margin:10px 0px">06</div>
            <span>待处理数</span>
          </div>
          <div class="lefttwob">
            <table style="width:100%;height:224px;text-align:center; font-size: 14px;border-collapse:collapse;">
              <tr style="color:white;background:#1D7D8D">
                <td>工具类型</td>
                <td>发生时间</td>
                <td>当前状态</td>
              </tr>
              <tr v-for="item in tablelist" :key="item.time">
                <td>{{ item.type }}</td>
                <td>{{ item.time }}</td>
                <td>
                  <div :style="{background:item.status, width:'20px', height: '20px', borderRadius: '50%', margin: '0 auto'}"></div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="leftthree" style="margin-top:40px;overflow:hidden">
          <span style="color: #00FFFF;font-size: 16px;display: block">物业缴费</span>
          <p style="height:10px"></p>
          <div class="leftthreea">
            <div class="lefttherraa">
            </div>
            <div class="lefttherraa" style="margin-left:20px">
            </div>
          </div>
        </div>
        <div class="leftfour" style="margin-top:40px;overflow:hidden">
          <span style="color: #00FFFF;font-size: 16px;display: block">视频监控</span>
          <p style="height:10px"></p>
          <div class="leftfoura">
            <div class="leftfouraa">
            </div>
            <div class="leftfouraa" style="margin-left:30px">
            </div>
          </div>
        </div>
        <div class="leftfive" style="margin-top:40px;overflow:hidden">
          <span style="color: #00FFFF;font-size: 16px;display: block">值班情况</span>
          <p style="height:10px"></p>
          <div class="leftfivec">
          </div>
          <div class="leftfiveb">
            <span>今日值班负责人：李龙</span><br>
            <span >值班人数：5人</span><br>
            <span>联系电话：1865632452</span>
          </div>
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
      <div style="height:952px"></div>
      <ul class="centerul">
        <li v-for="item in bottomdata" :key="item.name" class="areanav" style="text-align:center">
          <img :src="item.url" alt="">
          <span style="display:block;margin:0 auto">
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="leftone">
          <span style="color: #00FFFF;font-size: 16px">企业信息</span>
          <div class="leftoneright">
            <span>一企一档</span>
          </div>
          <div class="leftoneB" style="color: white; margin-top:20px; overflow:hidden">
            <div class="rightoneBb">
            </div>
            <div class="leftoneBa">
              <span>嘉兴海菱达精密传动科技有限公司</span><br><br>
              <span>经营范围：自动化设备</span>
            </div>
          </div>
      </div>
      <div class="righttwo">
        <div class="righttwoa">
          <p style="color:#B8741A">2000万</p>
          <span>营销收入</span>
        </div>
        <div style="border-left: 1px solid #797979;border-right: 1px solid #797979" class="righttwoa">
          <p style="color:#B8741A">55万</p>
          <span>税收</span>
        </div>
        <div class="righttwoa">
          <p style="color:#68A809">优</p>
          <span>健康指标</span>
        </div>
      </div>
      <div class="rightthree">
        <div>
          <div style="width:15px;height:15px;background:#009DD9;border-radius:50%;float:left;margin-top: 3px;margin-right: 10px;"></div>
          <span>上年度总产值：2.0256 排名 2</span>
        </div>
        <div style="margin-top:10px">
          <div style="width:15px;height:15px;background:#009DD9;border-radius:50%;float:left;margin-top: 3px;margin-right: 10px;"></div>
          <span>上月产值：整理中...</span>
        </div>
        <div style="margin-top:20px;">
          <div class="leftfouraa" style="width:100px;height:100px;margin-right:10px">
          </div>
          <div>
            <span>本科及以上：25</span><br>
            <span>高中：25</span><br>
            <span>初中及以下：25</span><br>
            <span>员工人数：25</span>
          </div>
        </div>
      </div>
      <div class="rightfour">
        <span style="color: #00FFFF;font-size: 16px;display: block">核心团队</span>
          <p style="height:10px"></p>
          <div v-for="item in teamdata" :key="item.name" style="float:left;width:50%;margin-top:10px">
            <div class="rightfourc">
            </div>
            <div class="rightfourb">
              <span style="color:#8400FF">{{ item.name }}</span><br>
              <span>{{ item.position }}</span><br>
              <span>{{ item.phone }}</span>
            </div>
          </div>
      </div>
      <div class="rightfive">
        <span style="color: #00FFFF;font-size: 16px;display: block">产能变化趋势</span>
          <p style="height:10px"></p>
          <div class="rightfivea">

          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tablelist: [
        {type: '灯具维修', time: '2020/02/03 10:29:24', status: '#00FEFE'},
        {type: '灯具维修', time: '2020/02/04 10:20:25', status: '#BEBE00'},
        {type: '灯具维修', time: '2020/02/05 10:21:51', status: '#BEBE00'},
        {type: '灯具维修', time: '2020/02/06 10:23:31', status: '#00FEFE'},
        {type: '灯具维修', time: '2020/02/07 10:22:51', status: '#BEBE00'},
        {type: '灯具维修', time: '2020/02/08 10:24:39', status: '#00FEFE'}
      ],
      navdata: [
        { name: '占地面积', area: '3033亩' },
        { name: '建筑面积', area: '45万平方米' },
        { name: '数字楼宇', area: '8栋' },
        { name: '入园企业', area: '109家' }
      ],
      bottomdata: [
        { name: '安防管理', url: '/afico.png' },
        { name: '消防管理', url: '/xfico.png' },
        { name: '能耗管理', url: '/nhico.png' }
      ],
      teamdata: [
        {name: '小龙女', position: '掌门', phone: '17342923379'},
        {name: '风清扬', position: '祖师', phone: '18342943379'},
        {name: '任我行', position: '掌门', phone: '15342963379'},
        {name: '张无忌', position: '掌门', phone: '13342927379'},
      ]
    }
  }
}
</script>
<style scoped>
.overview {
  /* height: 100%; */
  /* background-image:url("../assets/globalImg/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%; */
  overflow: hidden;
  padding: 0 20px;
  padding-bottom:20px;
}
.left {
  width: 22%;
  float: left;
  overflow: hidden;
}
.leftoneright {
  float: right;
}
.leftoneright span {
  border: 1px solid #797979;
  text-align: center;
  padding: 0 15px;
  color: white;
  border-radius: 2px;
  margin-left: 20px;
}
.center {
  width: 53%;
  float: left;
}
.right {
  width: 25%;
  float: right;
}
.leftone {
  margin-top: 20px;
}
.leftoneBa {
  float: left;
}
.leftoneBaspan{
  font-size: 20px;
  margin-right: 10px;
}
.leftoneBaspans{
  font-size: 14px;
}
.leftoneBaspanbutton {
  font-size: 14px;
  border: 1px solid #797979;
  text-align: center;
  padding: 0 15px;
  color: white;
  border-radius: 2px;
}
.leftoneBb {
  width: 65%;
  height: 135px;
  float: right;
  background: white;
}
.lefttwoa {
  width: 20%;
  margin-top: 10px;
  float: left;
}
.lefttwoa span{
  width: 66px;
  font-size: 14px;
  color: white;
  text-align: center;
}
.lefttwoa1 {
  width: 66px;
  height: 66px;
  border-radius:50%;
  background: #00FEFE;
  text-align: center;
  color: white;
  font-size: 25px;
  line-height: 66px;
}
.lefttwoa2 {
  width: 66px;
  height: 66px;
  border-radius:50%;
  background: #BEBE00;
  text-align: center;
  color: white;
  font-size: 25px;
  line-height: 66px;
}
.lefttwob {
  width: 75%;
  float: right;
  /* width: 290px;
  height: 180px; */
}
.lefttwob table, td, th {
    border: 1px solid #797979;
    color: white;
}
.leftthree {
  width: 100%;
  margin-top: 10px;
}
.leftthreea {
  width: 78%;
  border: 1px solid #797979;
  padding: 20px 30px;
  overflow: hidden;
}
.lefttherraa {
  width: 45%;
  height: 110px;
  background: white;
  float: left;
}
.leftfour {
  width: 100%;
}
.leftfouraa {
  width: 44%;
  height: 110px;
  background: white;
  float: left;
}
.leftfive {
  width: 100%;
  padding-bottom: 20px;
}
.leftfivec {
  width: 25%;
  height: 120px;
  background: white;
  display: inline-block;
} 
.leftfiveb {
  width: 68%;
  color: white;
  float: right;
  line-height: 30px;
  padding: 10px;
}
/* center */
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
/* right */
.rightoneBb {
  margin-right: 10px;
  float: left;
  background: white;
  width: 80px;
  height: 80px
}
.righttwo {
  margin-top: 20px;
  display: flex;
  color: white;
  text-align: center;
}
.righttwo span {
  font-size: 14px;
}
.righttwoa p{
  font-size: 18px;
}
.righttwoa {
  flex: 1;
}
.rightthree {
  color: white;
  margin-top: 20px;
}
.rightfour {
  color: white;
  margin-top: 40px;
  overflow: hidden;
}
.rightfourc {
  width:77px;
  height: 84px;
  background: white;
  float: left;
  margin-right: 10px;
}
.rightfourb {
  line-height: 30px;
  font-size: 14px;
}
.rightfive {
  margin-top: 20px;
}
.rightfivea {
  width:100%;
  height: 156px;
  background: white;
}
</style>