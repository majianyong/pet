<style scoped>
  .category{
    width: 100%;
    font-weight: 400;
    color: #333;
    font-size: 1.6rem;
    background: #ececec;
    overflow: hidden;
  }
  .category{
    padding: 25px 0px;
  }
  ul,li{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .category li{
    float: left;
    width: 25%;
    margin-bottom: 15px;
  }
  .category li a {
    border-radius: 50%;
    width: 55px;
    height: 55px;
    display: block;
    margin: 0 auto;
    color: #fff;
    text-align: center;
    line-height: 55px;
    font-size: 35px;
    position: relative;
    transition: all 0.2s ease;
  }
  .category li span {
    display: block;
    width: 100%;
    text-align: center;
    padding-top: 5px;
    font-size: 14px;
  }
  .category li a img{
    position: absolute;
    width:70% ;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>
<template>
    <div>
        <div class="category">
        <ul>
          <li v-for="item in category"  @click="goto(item.path)">
            <a href="#" class="btn" :style="{background:item.bgc}">
              <img :src="item.icon">
            </a>
            <span class="txt">{{item.category}}</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        props:["category"],
        data(){
          return{

          }
        },
      methods:{
          goto(url){
            this.$router.push({path:url})
          }
      }
    }
</script>


