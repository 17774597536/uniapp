<template>
  <view class="footer-tabbar">
    <view class="item" v-for="item in tabs" @tap="tapTabBar(item.path)">
      <view class="icon">
        <zui-svg-icon :icon="item.icon" :color="currentIconColor(item.path)"></zui-svg-icon>
      </view>
      <view class="item-label">{{ item.label }}</view>
    </view>
  </view>
</template>
<script setup lang="ts">
import ZuiSvgIcon from "@/uni_modules/zui-svg-icon/components/zui-svg-icon/zui-svg-icon.vue";
import PagesJson from '../../pages.json'
import UseGetPageInfo from "@/composables/useGetPageInfo";

const modelValue = $ref()
const activeTab = computed(()=>modelValue)

const tabs = [
  { name: 'home',path:'pages/home/index', label: '首页',icon: 'znak1-home' },
  { name: 'profile',path:'pages/user/index', label: '个人中心',icon: 'znak1-user' },
]
const currentIconColor = (path) =>{
  let color = '#ccc'
  let currentRoutePath = UseGetPageInfo.currentRoute()
  if (path === currentRoutePath) {
    color = '#2e73d5'
  }
  return color
}
const tapTabBar = (path) =>{
  let currentRoutePath = UseGetPageInfo.currentRoute()
  if (currentRoutePath !== path) {
    uni.switchTab(
      {
        url:'/'+ path,
        fail:(e)=>{
          console.log(e);
          uni.switchTab({url:'/' + path})
        }
      },
    )
  }
}
onMounted(()=>{
})
</script>
<style scoped lang="scss">
.footer-tabbar{
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border-radius: 50rpx;
  box-shadow: 0 0 32rpx 0 rgba(17, 17, 26, 0.1);
  @include flex-row(space-around);
  .item{
    width: 25%;
    height: 100%;
    @include flex-column(center);
    .icon{
      width: 48rpx;
      height: 48rpx;
      object-fit: contain;
    }
    .item-label{
      font-size: 24rpx;
    }
  }

}
</style>