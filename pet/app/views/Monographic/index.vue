<template>
  <div>
    <ding :title="title"></ding>
    <div class="box">
      <div v-for="item in  Monographic">
        <list3 :item="item"></list3>
      </div>
    </div>
  </div>
</template>
<script>
  import ding from "../../components/header2.vue"
  import list3 from "../../components/list3.vue"
  export default {
    name: "index",
    data(){
      return{
        title:"萌专题",
        Monographic:[]
      }
    },
    created(){
      var vm=this
      this.axios.get("../../../data/Monographic.json").then((response) => {
        vm.Monographic=response.data.data.list
      })
    },
    components:{
      list3,
      ding
    }
  }
</script>

<style scoped>
  .box {
    padding: 0px 20px;
    padding-top: 50px;
  }
</style>
