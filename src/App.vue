<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">大数据大作业</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">题目</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon @click.native="menuVisible = !menuVisible">
              <router-link to="/q1" style="text-decoration:none">attach_money</router-link>
            </md-icon>
            <span class="md-list-item-text" @click="menuVisible = !menuVisible">
              <router-link to="/q1">销售额统计</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon @click.native="menuVisible = !menuVisible">
              <router-link to="/q2" style="text-decoration:none">local_mall</router-link>
            </md-icon>
            <span class="md-list-item-text" @click="menuVisible = !menuVisible">
              <router-link to="/q2">商品分类</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon @click.native="menuVisible = !menuVisible">
              <router-link to="/q4" style="text-decoration:none">store_mall_directory</router-link>
            </md-icon>
            <span class="md-list-item-text" @click="menuVisible = !menuVisible">
              <router-link to="/q4">店铺分类</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon @click.native="menuVisible = !menuVisible">
              <router-link to="/q7" style="text-decoration:none">cloud</router-link>
            </md-icon>
            <span class="md-list-item-text" @click="menuVisible = !menuVisible">
              <router-link to="/q7">标签云</router-link>
            </span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 1px solid rgba(#000, .12);
  }
  .page-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
export default {
  name: 'Reveal',
  data: () => ({
    menuVisible: false
  })
}
</script>
