<template>
  <div class="card-expansion">
    <h1>{{ msg }}</h1>
    <cate-item v-for="cate in cates" :key="cate.category" :cate="cate"></cate-item>
  </div>
</template>

<script>
// vue
import Vue from 'vue'
// axios
let axios = require('axios')
// echarts
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入饼图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

Vue.component('cate-item', {
  props: ['cate'],
  template: `
  <div class="cate-item">
   <md-card>
      <md-card-media>
        <div :id="cate.category" :style="{left: '4px', width: '1350px', height: '450px', margin: '4px'}"></div>
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ cate.category }}</div>
      </md-card-header>
    </md-card>
  </div>
  `,
  mounted () {
    var names = []
    var sales = []
    this.cate.items.forEach(goods => {
      names.push(goods.name)
      sales.push(Number(goods.sale))
    })
    this.drawLine(this.cate.category, names, sales)
  },
  methods: {
    drawLine (cate, names, sales) {
      let myChart = echarts.init(document.getElementById(cate))
      myChart.setOption({
        title: {},
        tooltip: {},
        xAxis: {},
        yAxis: {
          data: names
        },
        grid: {
          left: 400,
          right: 20
        },
        series: [{
          name: '销售额',
          type: 'bar',
          data: sales
        }]
      })
    }
  }
})

export default {
  name: 'q2',
  data () {
    return {
      msg: '商品分类 Top10',
      file: 'http://localhost:8080/static/q2.json',
      cates: []
    }
  },
  mounted () {
    axios.get(this.file).then(response => {
      response.data.forEach(item => {
        this.cates.push(item)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: bold;
}
h2{
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.cate-item {
  width: 1400px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.md-card {
  width: 1400px;
  height: 500px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
