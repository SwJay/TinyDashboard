<template>
  <div class="q">
    <h1>{{ msg }}</h1>
    <div id="myChart" :style="{width: '1600px', height: '15000px'}"></div>
  </div>
</template>

<script>
// axios
let axios = require('axios')
// echarts
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
  name: 'q1',
  data () {
    return {
      msg: '销售额统计',
      file: 'http://localhost:8080/static/q1.json',
      shops: [],
      sales: [],
      keyword: []
    }
  },
  mounted () {
    axios.get(this.file).then(response => {
      response.data.forEach(item => {
        this.shops.push(item.name)
        this.sales.push(item.sale)
        this.keyword.push(String(item.keyword))
      })
    }).then(() => (this.drawLine()))
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {},
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            var result = ''
            result += params[0].name + '</br>'
            result += params[0].marker + ' ' + params[0].seriesName + ' : ' + params[0].value + '</br>'
            result += params[0].marker + ' ' + params[1].seriesName + ' : ' + params[1].value + '</br>'
            return result
          }
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: this.shops
        },
        series: [
          {
            name: '销售额',
            type: 'bar',
            data: this.sales
          },
          {
            name: '店铺标签',
            type: 'bar',
            data: this.keyword
          }
        ]
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: bold;
}
</style>
