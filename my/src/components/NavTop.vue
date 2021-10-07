<template>
  <div id="NavTop">
    <div class="main">
         <!--logo-->
      <div class="logo">
        <a href="/">azhi.alone</a>
      </div>
      <!--导航 -->
      <div class="nav">
        <ul>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/article">文章</router-link>
          </li>
          <li>
            <router-link to="/message">留言</router-link>
          </li>
          <li>
            <router-link to="/link">友链</router-link>
          </li>
          <li>
            <router-link to="/about">关于</router-link>
          </li>
        </ul>
      </div>
       <!--登陆成功之后显示用户头像-->
      <UserPhoto v-if="userInfo.user"></UserPhoto>
      <!--登陆与注册按钮-->
      <div class="login" v-else>
        <el-button
            type="success"
            size="mini"
            @click="loginBtnClick"
        >登陆 / 注册
        </el-button>
      </div>
      <!-- 登录弹窗 -->
      <LognBox v-show="ifShowLoginBox" @closeBox="closeBox"></LognBox>
    </div>
  </div>
</template>

<script>
import LognBox from "./LognBox.vue";
import UserPhoto from './UserPhoto.vue'
import {mapState} from 'vuex'
export default {
  name: "NavTop",
  components: {LognBox,UserPhoto},
  computed:{
    ...mapState(["userInfo"])
  },
  data(){
    return{
      ifShowLoginBox: false
    }
  },
  methods:{
    //用户登录/注册
    loginBtnClick(){
      this.ifShowLoginBox=true
    },
    //登录成功后关闭弹窗
    closeBox(){
      this.ifShowLoginBox=false
    }
  }
}
</script>

<style scoped lang="less">
#NavTop{
  width:100%;
  height: 50px;
  box-shadow: 0 0 2px #999;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 10;

  .main{
    display:flex;
    justify-content: space-between;
    box-sizing: border-box;
    max-width: 1300px;
    height: 100%;
    margin: 0 auto;
    padding: 0 15px;
    //logo
    .logo {
      width: 130px;
      height: 50px;

      a {
        font-family: "Pacifico";
        line-height: 50px;
        font-size: 26px;
        letter-spacing: 5px;
        color: rgba(0, 0, 0, .7);
      }
    }
  //  导航
    .nav {
      ul {
        display: flex;
        height: 50px;

        li {
          height: 50px;

          a {
            display: block;
            height: 98%;
            border-bottom: 2px solid transparent;
            padding: 0 25px;
            color: #777;
            line-height: 48px;
            font-weight: bolder;
            transition: all .3s;

            &:hover {
              color: #00b7ff;
            }

            &.router-link-active {
              color: #00b7ff;
              border-color: #00b7ff;
            }
          }
        }
      }
    }
    //登录与注册
    .login {
      .el-button {
        margin-top: 11px;
      }
    }
  }
}
</style>