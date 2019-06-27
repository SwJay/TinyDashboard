<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h2>{{ auth }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '面向淘宝数据的大数据看版',
      auth: '孙伟杰 陈俊儒 林泽钦'
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
