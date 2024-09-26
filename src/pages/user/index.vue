<template>
  <LayoutPage>
    <template #layoutHeader>
      <view class="user-header">
        <view class="user-info"></view>
      </view>
    </template>
  </LayoutPage>

</template>
<script lang="ts" setup>

</script>

<style scoped lang="scss">
.user-header{
  width: 100%;
  height: 460rpx;
  padding: 200rpx 56rpx 40rpx 56rpx;
  box-sizing: border-box;
  @include flex-row;
  .user-info{
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border-radius: 40rpx;
  }
}
</style>
