<template>
  <div class="q1">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'q1',
  data () {
    return {
      msg: '销售额统计'
    }
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
</style>
