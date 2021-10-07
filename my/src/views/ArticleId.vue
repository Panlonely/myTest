<template>
  <div id="ArticleId">
    <article>
      <div id="article-main"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: "ArticleId",
  data(){
    return{
      id:''
    }
  },
  methods: {
    async init(){
      let {data} = await this.$axios({
        method: "POST",
        url: "/art/address",
        data: {
          _id: this.id
        }
      })
      // console.log(data.data)
      if (data.code) {
        return this.$message.error("文章id错误，查询失败")
      }

      $.get(this.baseURL + data.data, (md) => {
        editormd.markdownToHTML("article-main", {
          markdown: md
        })
      })
    }
  },
  // watch:{
  //   '$route'(to, from) {
  //     if(to.params.id != from.params.id){
  //       this.id = to.params.id;
  //       this.init();//重新加载数据
  //     }
  //   }
  // },
 created() {
   this.id = this.$route.params.id;
   this.init();
  }
}
</script>

<style scoped>

</style>














