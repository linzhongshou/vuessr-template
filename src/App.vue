<template>
  <div id="app">
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
// 异步加载组件
const AppHeader = () => import('./components/Header.vue')
const AppFooter = () => import('./components/Footer.vue')

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>


<style lang="stylus">
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  background-color lighten(#eceef1, 30%)
  margin 0
  padding-top 55px
  color #34495e
  overflow-y scroll

a
  color #34495e
  text-decoration none
</style>
