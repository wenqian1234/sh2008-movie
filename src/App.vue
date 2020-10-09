<template>
  <div id="app">
    <!-- 底部导航 -->
    <FooterNav></FooterNav>
    <router-view/>
  </div>
</template>

<script>
// 导入需要使用组件
import FooterNav from'@/components/FooterNav'
export default {
  // 注册
  components:{
    FooterNav,
  },
};
</script>

<style lang="scss">
*{
    margin:0;
    padding:0;
}
html,
body{
    height:100%;
    touch-action:none;
    ul,
    li{
        list-style:none;
    }

}
</style>

