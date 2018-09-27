<template>
  <div>
    <ding :title="name"></ding>
    <div class="box">
      <div v-for="item in  Raiseknowledge">
        <list v-if="item.picture1 && item.picture2==''" :item="item"></list>
        <list2 v-if="item.picture3" :item="item"></list2>
      </div>
    </div>
  </div>
</template>
<script>
  import ding from "../../components/header2.vue"
  import list from "../../components/list.vue"
  import list2 from "../../components/list2.vue"
  export default {
    name: "index",
    data(){
      return{
        Raiseknowledge:[],
        name:"涨知识"
      }
    },
    created(){
      var vm=this
      this.axios.get("../../../data/knowledge.json").then((response) => {
        vm.Raiseknowledge=response.data.data.list
      })
    },
    components:{
      list,
      list2,
      ding
    }
  }
</script>

<style scoped>
  .box{
    padding:0px 20px;
    padding-top: 50px;
  }
</style>
