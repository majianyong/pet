<template>
    <!--左字右图组件-->
    <div>
        <div class="list">
          <ul>
            <li>
                <div class="title">
                  <div class="titleLeft">
                      <div class="portrait"><img :src="item.admin.avatar" alt=""></div>
                      <div class="username">{{item.admin.name}}</div>
                  </div>
                  <div class="titleRight fr">
                      <div>{{item.article_tags}}</div>
                  </div>
                </div>
                <div class="content">
                    <div class="text fl">
                      <h3>{{item.title}}</h3>
                      <div>{{item.intro}}</div>
                    </div>
                    <div class="rightPhoto fr">
                      <img :src="item.picture1">
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
    .list ul li{
      padding-bottom: 20px;
      margin-bottom: 7px;
      padding-top: 10px;
      border-bottom: 1px solid #f1f1f1;
    }
    .list ul li .title{
      width: 100%;
      clear: both;
      height: 30px;
      margin-bottom: 10px;
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
    }
    .list ul li .title .titleLeft .username{
      color: #757575;
      float: left;
      font-size: 12px;
      height: 26px;
      line-height: 26px;
      text-indent: .5em;
    }
    .list ul li .title .titleRight div{
      border-right: 3px solid #764f9c;
      color: #764f9c;
      height: 20px;
      line-height: 20px;
      padding-right: 8px;
      margin: 3px 0;
      font-size: 12px;
    }
    .list .content{
      overflow: hidden;
      position:relative;
    }
    .list .content  .text{
      width: 66%;

    }
    .list .content  .text div{
      width: 66%;
      color: #757575;
      font-size: 1.3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      line-height: 1.3em;
      -webkit-line-clamp: 2;
      max-height: 2.6em;
      position:absolute;
      bottom:0px;
    }
    .list .content h3{
      line-height: 22px;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      font-size: 134%;
    }
    .list .content  .rightPhoto{
      width: 33%;
      padding-left: 1rem;
    }
    .list .content  .rightPhoto img{
      width: 100%;
    }

</style>
