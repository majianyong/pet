<template>
    <div>
      <ding :title="title"></ding>
      <div class="box">
        <div v-for="item in  Cosmetology">
          <listt :item="item"></listt>
        </div>
      </div>
    </div>
</template>
<script>
    import ding from "../../components/header2.vue"
    import listt from "../../components/listt.vue"
    export default {
        name: "index",
        data(){
          return{
            title:"美容",
            Cosmetology:[]
          }
        },
        created(){
          var vm=this
          this.axios.get("../../../data/Cosmetology.json").then((response) => {
            vm.Cosmetology=response.data.data.list
          })
        },
        components:{
          listt,
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
