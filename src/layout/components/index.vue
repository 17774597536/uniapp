<template>
  <view class="uni-layout">
    <view class="layout-header">
      <slot name="layoutHeader" >
        <view class="header-statusBar"></view>
        <TopNav></TopNav>
      </slot>
    </view>
    <view class="layout-main">
      <slot />
    </view>
    <view class="layout-footer" @tap.stop>
      <footer-tabbar></footer-tabbar>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  name:'LayoutPage'
}
</script>
<script setup lang="ts">
import TopNav from "@/layout/components/top-nav.vue";
import FooterTabbar from "@/layout/components/footer-tabbar.vue";

const sysSafeArea = $ref<any>(uni.getSystemInfoSync()?.safeArea?.top)
const statusBarHeight = computed(()=>sysSafeArea * 2 - 15 + 'rpx')

</script>
<style lang="scss" scoped>
.uni-layout{
  .layout-header{
    width: 100vw;
    /* global 94%+ browsers support */
    background: radial-gradient(ellipse,#0477F4 0%,#18D1DF 76.56%);

    /* safari 5.1+,chrome 10+ */
    background: -webkit-radial-gradient(ellipse,#0477F4 0%,#18D1DF 76.56%);

    /* ff 3.6+ */
    background: -moz-radial-gradient(ellipse,#0477F4 0%,#18D1DF 76.56%);

    /* opera 11.10+ */
    background: -o-radial-gradient(ellipse,#0477F4 0%,#18D1DF 76.56%);

    /* ie 10+ */
    background: -ms-radial-gradient(ellipse,#0477F4 0%,#18D1DF 76.56%);
    position: sticky;
    top: 0;
    z-index: 3000;
    .header-statusBar{
      width: 100vw;
      height: v-bind(statusBarHeight);
    }
  }
  .layout-main{
    padding: 24rpx;
    box-sizing: border-box;
    overflow: scroll;
    //background: #000;
    width: 100vw;
    //height: 100vh;
  }
  .layout-footer{
    position: fixed;
    bottom: 2%;
    left: 0;
    width: 100vw;
    height: 120rpx;
    padding: 0 24rpx;
    box-sizing: border-box;
  }
}
</style>