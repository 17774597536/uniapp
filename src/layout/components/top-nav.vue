<template>
  <view class="nav-top">
    <text class="nav-title">
      {{title}}
    </text>
  </view>
</template>
<script setup lang="ts">
import useGetPageInfo from "@/composables/useGetPageInfo";
const title = useGetPageInfo.currentTitle()
</script>
<style lang="scss" scoped>
.nav-top{
  width: 100vw;
  height: 100rpx;
  line-height: 80rpx;
  padding: 12rpx;
  box-sizing: border-box;
  //@include flex-row(space-between);
  text-align: center;
  .nav-title{
    font-family: '微软雅黑',sans-serif;
    font-size: 32rpx;
    color: #ffffff;
  }
}
</style>
