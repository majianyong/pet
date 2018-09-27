<style scoped>
  .swiper-container img {
    width: 100%;
  }
  .swiper-slide{
    position: relative;
  }
  .text{
    position: absolute;
    bottom: 1%;
    color:#fff;
    padding-left: 10px;
  }
</style>
<template>
  <div>
    <div class="swiper-container photos">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in swiper" id="swiper">
          <a :href="item.path"><img :src="item.banner"></a>
          <p class="text">{{item.title}}</p>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import Swiper from "../../lib/swiper.min.js"
  export default {
    props: ["swiper"],
    data() {
      return {}
    },
    mounted() {
      console.log(this.swiper)
      var mySwiper = new Swiper('.photos', {
        loop: true,
        grabCursor: true,
        paginationClickable: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination'
      });
    }
  }
</script>
