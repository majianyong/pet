<template>
  <div>
    <ding :title="title"></ding>
    <div class="box">
      <div v-for="item in  newthings"  @click="detailed(item.id)">
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
            newthings:[],
            title:"新鲜事",
            // detail:[]
          }
        },
        methods:{
          detailed(id){
            // this.detail=this.newthings.filter(item=>item.id==id);
            this.$router.push({path:'/detaild'})
          }
        },
        created(){
          var vm=this
          this.axios.get("../../../data/NThings.json").then((response) => {
            vm.newthings=response.data.data.list
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
