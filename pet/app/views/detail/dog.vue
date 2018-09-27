<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .box{
    width: 100%;
    margin: 0 auto;
    background: #fff;
  }
  .nav{
    font-size: 20px;
    line-height: 1.7;
    padding: 0 20px;
  }
  .articleWX {
    width: 100%;
    padding: 20px 0;
    text-align: center;
    margin-top: 30px
  }
  .articleWX  img {
      width: 86%;
      margin: 0 auto;
      display: block;
    }

</style>
<template>
  <div class="box">
      <vui-header :header="header"></vui-header>
      <div id="main">
        <vui-content :content="content"></vui-content>
      </div>
      <vui-tuwen :tuwen="tuwen"></vui-tuwen>
      <p class="nav">想浏览更多更新的宠物资讯和宠物知识吗？即刻订阅或下载宠物秀手机APP。宠物秀APP集图片文字涂鸦娱乐于一体，打造完美宠物生活社区。还等什么？一起Show我们的爱宠吧！</p>
      <div class="articleWX" style="border-top: 1px solid #f2f2f2;">
        <img src="http://assets.petshow.cc/wap/v2/img/guanzhu.gif">
        <span>满地打滚求关注(。・`ω´・)</span>
      </div>
      <fotter :fotter="fotter"></fotter>
  </div>
</template>
<script>
  import VuiHeader from "../../components/header.vue";
  import VuiContent from "../../components/content.vue";
  import VuiTuwen from "../../components/tuwen.vue";
  import fotter from "../../components/fotter.vue";
  export default {
    data() {
      return {
          header:[],
          content:[],
          tuwen:[],
          fotter:[]
      }
    },
    created() {
      var self = this;
      this.axios.get("../../../data/data.json").then((res) => {
        console.log(res.data.list.detail.dog);
        self.header = res.data.list.detail.dog.header;
        self.content = res.data.list.detail.dog.content;
        self.tuwen = res.data.list.detail.dog.tuwen;
      })
    },
    components:{
      VuiHeader,VuiContent,VuiTuwen,fotter
    }
  }

</script>
