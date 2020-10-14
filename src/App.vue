<!--
 * @Author: your name
 * @Date: 2020-10-09 11:35:27
 * @LastEditTime: 2020-10-13 15:18:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\sh2008-movie\src\App.vue
-->
<template>
  <div id="app">
    <!-- 底部导航 -->
    <FooterNav v-if="is_show"></FooterNav>
    <router-view/>
  </div>
</template>

<script>
// 导入需要使用组件
import FooterNav from'@/components/FooterNav'
export default {
  data() {
    return {
      is_show:true
    }
  },
  // 注册
  components:{
    FooterNav,
  },
  created() {
    this.eventBus.$on('footernav',(mark)=>{
      this.is_show = mark

    })
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

