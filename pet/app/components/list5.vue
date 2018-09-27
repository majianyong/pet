<template>
  <!--六图下备注组件-->
  <div>
    <div class="list">
      <ul class="ul">
        <li class="li">
          <div class="title">
            <div class="titleLeft">
              <div class="portrait"><img src="http://img.petshow.cc/ueditor/2015_09/07113337144159681719730824893895826899.jpg" alt=""></div>
              <div class="username">涂鸦推荐</div>
            </div>
            <div class="titleRight fr">
              <div>看涂鸦</div>
            </div>
          </div>
          <div class="content">
            <ul>
              <li>
                <a href="#">
                  <img alt="你们都要乖乖长大哦" src="http://img.petshow.cc/pet_show/2018_09/667c8924d025f6726a8d9a9178bdd61d.jpg">
                </a>
              </li>
              <li>
                <a href="#">
                  <img alt="你们都要乖乖长大哦" src="http://img.petshow.cc/pet_show/2018_09/667c8924d025f6726a8d9a9178bdd61d.jpg">
                </a>
              </li>
              <li>
                <a href="#">
                  <img alt="你们都要乖乖长大哦" src="http://img.petshow.cc/pet_show/2018_09/667c8924d025f6726a8d9a9178bdd61d.jpg">
                </a>
              </li>
              <li>
                <a href="#">
                  <img alt="你们都要乖乖长大哦" src="http://img.petshow.cc/pet_show/2018_09/667c8924d025f6726a8d9a9178bdd61d.jpg">
                </a>
              </li>
              <li>
                <a href="#">
                  <img alt="你们都要乖乖长大哦" src="http://img.petshow.cc/pet_show/2018_09/667c8924d025f6726a8d9a9178bdd61d.jpg">
                </a>
              </li>
              <li>
                <a href="#">
                  <img alt="你们都要乖乖长大哦" src="http://img.petshow.cc/pet_show/2018_09/667c8924d025f6726a8d9a9178bdd61d.jpg">
                </a>
              </li>
            </ul>
            <div class="remarks">
              偌大的北极熊极不情愿地被牵着前行，不禁令人担心，如若它发起狂来，后果肯定不堪设想。今天为大家盘点了高大上的土豪宠物，看完小编不禁想问，土豪朋友们，还缺宠物不?其实小编我也挺乖的!
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "list"
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
  }
  .list ul li .title .titleLeft .username{
    color: #6f68df;
    float: left;
    font-size: 18px;
    height: 26px;
    line-height: 26px;
    text-indent: .5em;
    font-weight:bold;
  }
  .list ul li .title .titleRight div{
    border-right: 3px solid #6f68df;
    color: #6f68df;
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
    overflow: hidden;
  }
  .list .content ul li{
    float:left;
    width: 31%;
    margin-right: 13px;
  }
  .list .content ul li a img{
    width: 100%;
  }
  .list .content ul li:nth-child(3n){
    margin-right: 0!important;
  }
  .list .content ul li:nth-child(-n+3){
    margin-bottom: 7px;
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
