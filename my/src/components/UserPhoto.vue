<template>
  <div id="UserPhoto">
    <el-popover
      placement="bottom"
      width="150"
      trigger="hover"
      popper-class="but"
    >
      <template #reference>
        <div
          class="img"
          :style="{
            backgroundImage: `url(${baseURL}${userInfo.photo})`,
          }"
          :title="userInfo.user"
        ></div>
      </template>
      <!--hover之后，显示的内容-->
      <!-- <div class="updateUser">修改资料</div>
            <div class="outLogin">退出登录</div> -->
      <el-button type="primary" size="mini" @click="userUpdate"
        >修改资料
      </el-button>
      <el-button class="second" type="danger" size="mini" @click="logout"
        >退出登录
      </el-button>
    </el-popover>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "UserPhoto",
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    ...mapMutations(['updateUserInfo']),
    //修改资料
    userUpdate() {
      this.$router.push('/userModify')
    },
    //退出登录
    logout() {
      this.$confirm("确定要退出登录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios({
            method: "POST",
            url: "/login/logout"
          })

          this.$message({
            type:'success',
            message:'退出登录完成',
            duration:1000
          })

          //清除vuex的数据
          this.updateUserInfo({})
          //回到首页(刷新页面)
           this.$router.replace("/")
        })
        .catch(() => {
        //   this.$message({
        //     type: "info",
        //     message: "已取消删除",
        //   });
        });
    },
  },
};
</script>

<style scoped lang="less">
#UserPhoto {
  height: 50px;

  .img {
    height: 40px;
    width: 40px;
    background-size: cover;
    background-position: center top;
    border-radius: 50%;
    margin-top: 5px;
    cursor: pointer;
  }
}
</style>
