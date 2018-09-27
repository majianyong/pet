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
    padding: 0 10px;
    width: 100%;
    height: 50px;
    background: #303435;
    overflow: hidden;
    text-align:center;
    position:fixed;
    z-index:999;
  .lt{
    line-height: 30px;
    width: 40px;
    font-size:40px;
    color: #918f90;
    padding:10px 0px;
    border-right:1px solid #4c4a4b;
    height: 51px;
    float: left;
  text-align: center
  img{
    width: 30px;
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
    color: #fff;
    line-height:50px;
    font-size: 1.6rem;
  }
  .icon{
    height: 23px;
    margin-right: 20px;
    margin-top: 14px;
  }
  }
</style>
<template>
  <div>
    <header class="header">
      <div class="fl">
        <a href="/" class="lt"><img src="../../assets/gt.png"></a>
      </div>
      <span class="name">{{title}}</span>
      <div class="fr">
        <img src="../../assets/more.png" class="icon">
      </div>
    </header>
  </div>
</template>
<script>
  export default {
    props:["title"],
    data() {
      return {}
    }
  }
</script>
