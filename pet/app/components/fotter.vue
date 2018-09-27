<style scoped>
  .pet_article_dowload {
    border-top: 1px solid #f2f2f2;
    width: 100%;
    margin: 15px 0 0;
    overflow: hidden;
    padding-top: 15px;
  }
  .pet_article_dowload_title {
    width: 100%;
    font-size: 15px;
    color: #b2b2b2;
    padding: 0 16px 15px;
  }
  .pet_article_dowload_content {
    width: 100%;
    position: relative;
    background: #fafafa;
    padding: 23px 16px;
  }
  .pet_article_dowload_triangle {
    position: absolute;
    top: -40px;
    left: 13px;
    margin: 30px;
    height: 0;
    width: 0;
    border-bottom: solid 11px #f7f7f7;
    border-left: solid 11px #fff;
    border-right: solid 11px #fff;
  }
  .pet_article_dowload_ico {
    width: 35px;
    height: 35px;
    position: relative;
    float: left;
  }
  .pet_article_dowload_content_font {
    color: #b2b2b2;
    font-size: 12px;
    position: relative;
    margin-left: 45px;
    margin-top: -2px;
  }
  .pet_article_dowload_all {
    width: 100%;
    text-align: right;
    font-size: 13px;
    padding-top: 10px;
  }
  .pet_article_dowload_Az {
    display: inline-block;
    text-align: center;
    border: 1px solid #b9b8b8;
    color: #b9b8b8;
    border-radius: 10px;
    width: 100px;
    line-height: 19px;
    height: 21px;
  }
  .pet_article_dowload_ico img {
    width: 100%;
  }
  .pet_article_dowload_Pg {
    display: inline-block;
    text-align: center;
    border: 1px solid #b9b8b8;
    color: #b9b8b8;
    border-radius: 10px;
    width: 85px;
    height: 21px;
    line-height: 19px;
  }
  .pet_zlnr_pl_block:last-child {
    border-bottom: none;
  }
  .pet_zlnr_pl_block_title {
    background: #fff;
    position: relative;
    font-weight: bold;
    color: #222;
    font-size: 16px;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 15px;
    padding-top: 15px;
    text-indent: 15px;
  }
  .reply_text {
    width: 100%;
    height: 46px;
    background: #fff;
    padding: 10px;
    overflow: hidden;
  }
  .reply_text_download {
    width: 88%;
    float: left;
    position: relative;
    height: 34px;
    font-size: 12px;
    color: #000;
    line-height: 34px;
    text-indent: 10px;
    margin: 0 auto;
    background: #d1d1d1;
    display: block;
    border-radius: 3px;
  }
  .reply_text_submit {
    width: 10%;
    float: left;
    margin-left: 2%;
    border-radius: 3px;
    height: 34px;
    font-size: 12px;
    line-height: 34px;
    text-align: center;
    color: #fff;
    background: #ff5656;
  }
  .pet_zlnr_pl {
    width: 100%;
    padding: 0 10px;
    background: #fff;
    overflow: hidden;
    padding-bottom: 15px;
  }
  .am_news_load {
    max-width: 810px;
    margin: 0 auto;
    color: #d1d1d1;
    height: 43px;
    line-height: 43px;
    background: #fff;
    text-align: center;
    margin-top: 15px;
    cursor: pointer;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
  .am_news_load span {
    margin: 0 auto;
    display: inline-block;
  }
</style>
<template>
  <div>
    <div class="pet_article_dowload">
      <div class="pet_article_dowload_title">关于宠物秀</div>
      <div class="pet_article_dowload_content"><div class="pet_article_dowload_triangle"></div>
        <div class="pet_article_dowload_ico">
          <img src="http://assets.petshow.cc/wap/v2/img/footdonewm.png"></div>
        <div class="pet_article_dowload_content_font">
          一起Show我们的爱宠吧！宠物秀是图片配文字、涂鸦、COSPLAY的移动手机社区，这里有猫狗鱼龟兔子仓鼠龙猫等各种萌图。
        </div>
        <div class="pet_article_dowload_all">
          <a href="#" class="pet_article_dowload_Az am-icon-apple"> App store</a>
          <a href="#" class="pet_article_dowload_Pg am-icon-android"> Android</a>
        </div>
      </div>
    </div>
    <div class="pet_zlnr_pl_block">
      <div class="pet_zlnr_pl_block_title">精彩评论</div>
      <div class="reply_text">
        <a href="#" class="reply_text_download">发表评论</a>
        <div class="reply_text_submit">发送</div>
      </div>
      <div class="pet_zlnr_pl"><div style="height:100px; line-height:100px; text-align:center;">还没有评论，快来评论一下吧！(。・`ω´・)</div></div>
      <div class="am_news_load am_news_load_index" style="display: none;">
        <span><i class="am-icon-spinner am-icon-spin" style="display: none;"></i>更多精彩评论</span></div>
    </div>
  </div>
</template>

<script>
    export default {
       data(){
         return{
           props:['fotter']
         }
       }
    }
</script>
