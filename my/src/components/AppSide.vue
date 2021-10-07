<template>
<div id="AppSide">
  <!--个人信息-->
  <Personal></Personal>
  <!--用于固定定位-->
  <div
      class="fixed"
      :class="{
        true: ifFixed
      }"
  >
    <!--热门文章-->
    <HotArticle></HotArticle>
    <!--最近访客-->
    <Visitor></Visitor>
  </div>
</div>
</template>

<script>
import Personal from "./AppSide/Personal";
import HotArticle from "./AppSide/HotArticle"
import Visitor from "./AppSide/Visitor"
export default {
  name: "AppSide",
  components: {Personal,HotArticle,Visitor},
  data(){
    return{
      ifFixed:''
    }
  },
  methods: {
    /*根据滚动高度检测要不要加上固定定位*/
    scrollEventFn() {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      this.ifFixed = scrollTop >= 240 ? 'true' : ''
    }
  },
  mounted() {
    //手动触发一次，然后再监听事件
    this.scrollEventFn()
    window.addEventListener("scroll",this.scrollEventFn)
  }
}
</script>

<style scoped lang="less">
#AppSide{
  width:270px;

  .fixed.true {
    position: fixed;
    top: 65px;
    width: 270px;
  }
}
</style>