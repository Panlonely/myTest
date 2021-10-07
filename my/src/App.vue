<template>
  <!--  头部导航栏-->
  <NavTop></NavTop>
  <!--  内容部分-->
  <div id="main">
    <!-- 左侧 -->
    <div class="leftSide">
      <AppSide></AppSide>
    </div>
    <!--路由页面-->
    <div class="m_right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavTop from './components/NavTop.vue'
import AppSide from "./components/AppSide";
import { mapMutations } from 'vuex';

export default {
  name: 'App',
  components: {
    AppSide,
    NavTop
  },
   methods:{
    ...mapMutations(["updateUserInfo"])
  },
  async created() {
    //检测用户是否登录
    let {data} = await this.$axios({
      method: "post",
      url: "/login/check"
    })
    if (data.code)return

    //代表已经登录
    this.updateUserInfo(data.data)
  },
}
</script>

<style lang="less">
@import './assets/css/reset.css';
@import './assets/css/font.css';
@import './assets/css/font/iconfont.css';

/*自定义滚动条*/
::-webkit-scrollbar { /*滚动条整体样式*/
  width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 167, 232, .3);
}

::-webkit-scrollbar-track { /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #EDEDED;
}

body {
  background: url("./assets/img/bg/bg-left.png") no-repeat left 50px,
  url("./assets/img/bg/bg-right.png") no-repeat right 50px;
  background-color: #f2f2f2;
  user-select: none;
}

#app{
  padding-top:65px;
  min-width: 900px;
  #main{
    max-width:1300px;
    padding:0 15px;
    display:flex;
    margin:0 auto;
    box-sizing: border-box;

    .leftSide{
      width:270px;
      margin-right:15px;
    }
    .m_right{
      flex: 1;
    }
  }
}

.el-popover.but{
    // width:80px !important;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size:18px;

    .second{
      margin-left:0px !important;
      margin-top:10px;
    }
}
</style>
