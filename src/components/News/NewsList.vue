<template>
  <ul class="mui-table-view">
 	<li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList" :key="index">
 		<router-link :to="'/news/newsDetail/'+item.id">
 			<img class="mui-media-object mui-pull-left" :src="item.img_url">
 			<div class="mui-media-body">
 				{{item.title}}
 				<p class="mui-ellipsis">{{item.zhaiyao}}</p>
 			</div>
 		</router-link>
 	</li>
 </ul>
</template>
<script>
import axios from 'axios'
export default {
  data(){
      return{
          newsList:[]
      }
  },
  methods:{
      getNewsList(){
          axios({
              url:"http://www.escook.cn:3000/api/getnewslist"
          }).then(res=>{
              console.log(res);
              this.newsList = res.data.message;
          });
      }
  },
  created(){
      this.getNewsList();
  }
}
</script>
<style>

</style>