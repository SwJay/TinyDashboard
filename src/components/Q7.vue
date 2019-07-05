<template>
  <div class="q">
    <h1>{{ msg }}</h1>
    <div id="myChart" :style="{width: '1300px', height:'600px'}"></div>
  </div>
</template>

<script>
// axios
let axios = require('axios')
// echarts
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入字符云组件
require('echarts-wordcloud')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
  name: 'q7',
  data () {
    return {
      msg: '字符云',
      file: 'http://localhost:8080/static/q7.json',
      data: []
    }
  },
  mounted () {
    axios.get(this.file).then(response => {
      response.data.forEach(item => {
        this.data.push({
          name: item.name,
          value: item.value
        })
      })
    }).then(() => (this.drawLine()))
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '店铺标签'
        },
        tooltip: {
          show: true
        },
        series: [{
          type: 'wordCloud',

          // The shape of the "cloud" to draw. Can be any polar equation represented as a
          // callback function, or a keyword present. Available presents are circle (default),
          // cardioid (apple or heart shape curve, the most known polar equation), diamond (
          // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

          shape: 'circle',

          // A silhouette image which the white area will be excluded from drawing texts.
          // The shape option will continue to apply as the shape of the cloud to grow.

          // maskImage: maskImage,

          // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
          // Default to be put in the center and has 75% x 80% size.

          left: 'center',
          top: 'center',
          width: '70%',
          height: '80%',
          right: null,
          bottom: null,

          // Text size range which the value in data will be mapped to.
          // Default to have minimum 12px and maximum 60px size.

          sizeRange: [30, 90],

          // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

          rotationRange: [-90, 90],
          rotationStep: 45,

          // size of the grid in pixels for marking the availability of the canvas
          // the larger the grid size, the bigger the gap between words.

          gridSize: 8,
          // set to true to allow word being draw partly outside of the canvas.
          // Allow word bigger than the size of the canvas to be drawn
          drawOutOfBound: false,

          // Global text style
          textStyle: {
            normal: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              // Color can be a callback function or a color string
              color: function () {
                // Random color
                return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') + ')'
              }
            },
            emphasis: {
              shadowBlur: 5,
              shadowColor: '#333'
            }
          },

          // Data is an array. Each array item must have name and value property.
          data: this.data.sort(function (a, b) {
            return b.value - a.value
          })
        }]
      })
    }
  }
}
</script>
