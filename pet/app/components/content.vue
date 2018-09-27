<style scoped lang="stylus">
  .box{
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    background:#fff;
    .main {
      width: 94%;
      margin: 0px auto;
      overflow: hidden;
      padding: 80px 0;
      .tit {
        color: #222;
        font-weight: bolder;
        font-size: 28px;
        overflow:hidden;
        line-height: 1.5;
      }
      .content{
        font-size: 20px;
        line-height: 1.7;
      }
      .date {
        color: #aaa;
        font-size: 15px;
        margin-bottom: 10px;
        height: 30px;
        line-height: 30px
      }
    }
   }
</style>
<template>
    <div class="box">
      <div v-for="item of content">
        <div class="main">
          <h2 class="tit">{{item.title}}</h2>
          <div class="date">{{item.date}}</div>
          <p class="content">{{item.text}}</p>
        </div>
      </div>
    </div>
</template>
<script>
  export default{
    props:["content"]
  }
</script>

