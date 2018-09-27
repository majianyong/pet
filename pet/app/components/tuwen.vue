<style scoped lang="stylus">
  .main{
    width: 96%;
    margin:0 auto;
    overflow: hidden;
    .content {
      font-size: 20px;
      line-height: 1.7;
      margin:3px 0;
      padding:3px 0;
      text-align: center
    }
    .number{
      padding:0 20px;
      font-size: 16px;
    }
    .img {
      width: 80%;
      margin:0px auto;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
  }
</style>
<template>
  <div style="margin-top: -80px">
    <div class="main" v-for="item of tuwen">
      <div class="img"><img :src="item.img"></div>
      <p class="content">{{item.content}}</p>
      <p class="number">{{item.no1}}</p>
      <p class="number">{{item.no2}}</p>
      <p class="number">{{item.no3}}</p>
      <p class="number">{{item.no4}}</p>
      <p class="number">{{item.no5}}</p>
      <p class="number">{{item.no6}}</p>
    </div>
  </div>
</template>

<script>
  export default{
    props:["tuwen"],
    data(){
      return{

      }
    },
    mounted(){

    }
  }
</script>


