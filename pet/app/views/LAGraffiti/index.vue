<template>
  <div>
    <ding :title="title"></ding>
    <div class="box">
      <div v-for="item in  LAGraffiti">
        <kty :item="item"></kty>
      </div>
    </div>
  </div>
</template>
<script>
  import ding from "../../components/header2.vue"
  import kty from "../../components/KTY.vue"
  export default {
    name: "index",
    data(){
      return{
        title:"看涂鸦",
        LAGraffiti:[]
      }
    },
    created(){
      var vm=this
      this.axios.get("../../../data/LAGraffiti.json").then((response) => {
        vm.LAGraffiti=response.data.data.list
      })
    },
    components:{
      kty,
      ding
    }
  }
</script>

<style scoped>
  .box {
    padding-top: 50px;
  }
</style>
