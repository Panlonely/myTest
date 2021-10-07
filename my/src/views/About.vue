<template>
  <div id="About">
    <!--about me-->
    <article>
      <h2>ABOUT ME</h2>
      <p>帅气这个形容词，大概就是为我而创造的吧😏</p>
      <p>谢谢你这么好看还这么关注我鸭！我叫阿志，你可以亲切的叫我小志！</p>
      <p>有必要强调一下！我还没有脱发！大概是写的代码还不够多...</p>
    </article>

    <!--about site-->
    <article>
      <h2>ABOUT SITE</h2>
      <p><code>前  端：</code><span class="code">Vue + Element</span></p>
      <p><code>后  端：</code><span class="code">Node + Nuxt + Express + Mongodb</span></p>
      <p class="border"><code>服务器：</code><a target="_blank" href="https://www.aliyun.com/1111/new?userCode=xqfx5ty6">阿里云ECS</a></p>
      <p>这个博客我在2019年就开始构思了，终于在2021年底上线了！我真棒！😂</p>
      <p>这不能怪我...真的...每当我好不容易挤点时间写好代码准备上线时，总有前端技术在这个时间点做大的更新...ES2015、Node、Vue、Nuxt...我也很绝望啊，每次都是推翻重写，裂开...</p>
    </article>

    <!--ABOUT COPYRIGHT-->
    <article>
      <h2>ABOUT COPYRIGHT</h2>
      <p>源码开源：<a href="https://github.com/Panlonely/myTest" target="_blank">小志的github</a></p>
      <p>在注明出处的前提下，本站文章允许非商业用途的转载。</p>
    </article>

    <!--OTHER-->
    <article>
      <h2>OTHER</h2>
      <p>我是一名前端开发者，2019年初接触web前端，年底加入过学校的工作室，用layui做过后台。如果有合作相关事宜的话，可以<router-link to="/message">留言</router-link>。或者可以在👈左侧边栏找到我的联系方式哦。</p>
    </article>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="less" scoped>
#About {
  flex: 1;

  article {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 15px;
    box-shadow: 0 0 4px #ddd;
    padding: 25px 20px;
    background-color: #fff;
    font-family: Quicksand;

    h2 {
      margin-bottom: 15px;
      font-size: 20px;
      letter-spacing: 3px;
      line-height: 24px;
      border-left: 5px solid #73b899;
      text-indent: 10px;
    }

    p {
      text-indent: 2em;
      color: #444;
      font-size: 14px;
      letter-spacing: 4px;
      line-height: 30px;
      &.border{
        border-bottom: 1px dotted rgb(170, 170, 170);
      }
    }

    code{
      text-indent: 0;
      display: inline-block;
      font-family: "Quicksand";
      font-size: 14px;
    }
    span.code{
      color: #bd4147;
      background-color: rgba(27, 31, 35, 0.05);
      font-weight: 700;
    }
    a{
      color: #409eff;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}

</style>














