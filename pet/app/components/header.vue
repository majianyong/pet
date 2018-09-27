<style scoped lang="stylus">
  *{
    margin: 0;
    padding: 0;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right
  }
  a{
    text-decoration: none
  }
  .header{
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 50px;
    background: #303435;
    overflow: hidden;
  .lt{
    line-height: 30px;
    width: 50px;
    color: #918f90;
    padding:10px;
    border-right:1px solid #4c4a4b;
    height: 30px;
    margin-top:10px;
    float: left;
  img{
    width: 25px;
    margin-top:-25px;
  }
  }
  .head{
    margin: 12px 10px 0 10px;
    height: 25px;
    vertical-align: top;
    width: 26px;
    float: left;
    border-radius: 50%;
  }
  .name{
    color: #918f90;
    font-size: 15px;
    text-align: text;
    float:left;
    line-height:50px
  }
  .icon{
    height: 20px;
    margin-right:20px;
    margin-top:15px;
  }
  }
</style>
<template>
  <div style="width: 100%">
    <header class="header" v-for="item of header">
      <div class="fl">
        <a href="/index" class="lt"><img :src="item.lt"></a>
        <img :src="item.head" class="head">
        <span class="name">{{item.name}}</span>
      </div>
      <div class="fr">
        <img :src="item.icon" class="icon">
      </div>
    </header>
  </div>
</template>
<script>
  export default {
    props: ["header"],
    data() {
      return {}
    }
  }
</script>
