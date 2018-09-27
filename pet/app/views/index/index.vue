<style>
  *{
    margin: 0;
    padding: 0;
  }
  .box{
    width: 100%;
    margin: 0 auto;
  }
  .swiper-container img {
    width: 100%;
  }
</style>
<template>
  <div class="box">
    <vui-swiper :swiper="swiper" v-if="isShowSwiper"></vui-swiper>
    <category :category="category"></category>
  </div>
</template>
<script>
  import VuiSwiper from "../../components/swiper.vue";
  import category from "../../components/category.vue";
  export default {
    data() {
      return {
        swiper: [],
        isShowSwiper:false,
        category:[]
      }
    },
    created() {
      var self = this;
      this.axios.get("../../../data/data.json").then((res) => {
        console.log(res.data.list.category);
        self.swiper = res.data.list.carousel;
        self.category = res.data.list.category;
        self.isShowSwiper = true
      })
    },
    components:{
      VuiSwiper,category
    }
  }

</script>
