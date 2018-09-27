<template>
  <!--中图下备注组件-->
  <div>
    <div class="list">
      <ul class="ul">
        <li class="li">
          <div class="title">
            <div class="titleLeft">
              <div class="portrait"><img :src="item.banner" alt=""></div>
              <div class="username">{{item.name}}</div>
            </div>
            <div class="titleRight fr">
              <div>萌专题</div>
            </div>
          </div>
          <div class="content">
            <ul>
              <li>
                <a href="#">
                  <img :src="item.banner" alt="">
                </a>
              </li>
            </ul>
            <div class="remarks">
              {{item.intro}}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "list",
    props:["item"],
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  .ovh{
    overflow: hidden;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .list .ul .li{
    padding-bottom: 20px;
    margin-bottom: 7px;
    padding-top: 10px;
    border-bottom: 1px solid #f1f1f1;
  }
  .list ul li .title{
    width: 100%;
    clear: both;
    height: 30px;
  }
  .list ul li .title .titleLeft{
    float:left;
  }
  .list ul li .title .titleLeft .portrait{
    width: 26px;
    height: 26px;
    float: left;
    border-radius: 50%;
    overflow: hidden;
  }
  .list ul li .title .titleLeft .portrait img{
    width: 100%;
    height: 100%;
  }
  .list ul li .title .titleLeft .username{
    color: #7f2d00;
    float: left;
    font-size: 18px;
    height: 26px;
    line-height: 26px;
    text-indent: .5em;
    font-weight:bold;
  }
  .list ul li .title .titleRight div{
    border-right: 3px solid #7f2d00;
    color: #7f2d00;
    height: 20px;
    line-height: 20px;
    padding-right: 8px;
    margin: 3px 0;
    font-size: 12px;
  }
  .list .content{

  }
  .list .content ul{
    padding: 8px 0;
    display: flex;
    justify-content:space-between;
  }
  .list .content ul li{
    width: 100%;
  }
  .list .content ul li a img{
    width: 100%;
  }
  .list .content .remarks{
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-height: 1.3em;
    -webkit-line-clamp: 2;
    max-height: 2.6em;
    color: #757575;
  }
</style>
