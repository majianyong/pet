<template>
    <div>
      <div class="videosss">
        <div class="title">
          <div class="touxiang"><img :src="item.user.avatar" alt=""></div>
          <div class="frtitle">
            <div class="user">{{item.user.nick}}</div>
            <div class="time">
              <i></i>
              <span>{{item.create_time}}</span>
            </div>
          </div>
        </div>
        <div class="mask"></div>
        <img :src="item.picture" alt="">
      </div>
      <div class="comment">
          <div class="comment2">
            <div class="like">
              <i></i>
              <span>{{item.like_num}} 喜欢</span>
            </div>
            <div class="pinglun like">
              <i></i>
              <span>{{item.comment_num}} 评论</span>
            </div>
          </div>
      </div>
    </div>
</template>
<script>
    export default {
        props:["item"],
        name: "KTY",
        data(){
          return{

          }
        }
    }
</script>

<style scoped>
    .videosss{
      position: relative;
    }
    .videosss .title{
      z-index: 2;
      width: auto;
      position: absolute;
      bottom: 18px;
      left: 22px;
    }
    .videosss .title .touxiang{
      position: relative;
      float: left;
      width: 50px;
      height: 50px;
    }
    .videosss .title .touxiang img{
      border-radius: 50%;
      width: 100%;
    }
    .videosss .title .frtitle{
      position: relative;
      margin-left: 60px;
    }
    .videosss .title .frtitle .user{
      font-size: 20px;
      color: #ff5656;
      line-height: 25px;
      padding-top: 3px;
    }
    .videosss .title .frtitle .time{
      font-size: 13px;
      color: #aaa;
    }
    .videosss .title .frtitle .time i{
      display: block;
      float: left;
    }
    .videosss .title .frtitle .time span{
      display: block;
      float: left;
      padding-top: 2px;
      padding-left: 2px;
    }
    .videosss .mask{
      height: 70%;
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      background: url(../../assets/flshadow.png) bottom no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;
      z-index: 1;
    }
  .videosss img{
    width: 100%;
  }
  .comment{
    background: #fff;
    height: 50px;
    width: 100%;
  }
  .comment .comment2{
      float: left;
      padding-top: 5px;
      padding-left: 19px;
      color: #222;
  }
  .comment .comment2 .like{
    display: block;
    float: left;
    font-size: 14px;
    padding-top: 5px;
  }
  .comment .comment2 .like i{
    display: block;
    float: left;
    margin-right: 3px;
    font-size: 18px;
  }
  .comment .comment2 .like span{
      display: block;
      float: left;
      font-size: 12px;
      margin-right: 10px;
      padding-top: 5px;
      font-family: '微软雅黑';
  }
</style>
