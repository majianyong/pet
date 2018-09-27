<template>
  <!--左图右字组件-->
  <div>
    <div class="list">
      <ul>
        <li>
          <div class="content">
            <div class="text fr">
              <h3>拉布拉多的饲养和培训技巧 宠物健康小课堂</h3>
              <div>
                拉布拉多是宠物狗中的一种，很多喜欢养宠物狗的人都想知道拉布拉多好不好养。拉布拉多是比较容易饲养的，但是想要培养出一个听话乖巧的狗狗的话，保持训练是必不可少的，下面这些是饲养和培训拉布拉多的技巧。
              </div>
            </div>
            <div class="rightPhoto fl">
              <img src="http://img.petshow.cc/pet_show/2017_01/11dd8b8c10f867ad71531616360acbef.jpg">
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
    width: 60%;

  }
  .list .content  .text div{
    width: 60%;
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
  .list .content  .text div .p{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
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
    width: 36%;
  }
  .list .content  .rightPhoto img{
    width: 100%;
  }

</style>
