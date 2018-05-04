<template>
  <div class="comment">
      <h4>发表评论</h4>
      <hr>
      <textarea cols="30" rows="3" v-model="content"></textarea>
      <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
      <ul class="mui-table-view">
		<li class="mui-table-view-cell mui-media" v-for="(item,index) in commentList" :key="index">
			<a href="javascript:;" class="">
				<div class="mui-media-body">
					<p class="comment-info">
                        <span class="floor">第{{index+1}}楼</span>
                        <span class="post-time">{{item.add_time | dateformat("YYYY-MM-DD HH:mm:ss")}}</span>
                        <span class="mui-pull-right">{{item.user_name}}</span>
                    </p>
					<p class="mui-ellipsis mui-pull-left">{{item.content}}</p>
                    <img class="mui-media-object mui-pull-right" src="../../assets/images/menu1.png">
				</div>
			</a>
		</li>
	</ul>
    <mt-button size="large" type="danger" :plain="true" v-show="isShow" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import axios from "axios";
import dateformat from "../filter/dateformat";
import { Toast } from "mint-ui";
export default {
  data(){
      return{
          commentList:[],
          currentPage:1,
          content:"",
          isShow:true,
        //   comment:{
        //       postTime:new Date(),
        //       username:"",

        //   }
      }
  },
  props:["id"],
  methods:{
      getComentList(){
          axios({
              url:"http://www.escook.cn:3000/api/getcomments/"+this.$route.params.id+"?pageindex="+this.currentPage
          }).then(res => {
              console.log(res);
              if(res.data.status == 0)
              {
                   this.commentList.push(...res.data.message);
                   if(res.data.message.length == 0)
                   {
                        this.isShow = false;
                        Toast("没有更多数据了！");
                   }
              }
          });
      },
      postComment(){
          axios({
              url:"http://www.escook.cn:3000/api/postcomment/"+this.$route.params.id,
              method:"post",
              data:"content="+this.content
          }).then(res => {
              console.log(res);
              if(res.data.status == 0)
              {
                  this.commentList.unshift({
                      add_time:new Date(),
                      user_name:"匿名用户",
                      content:this.content
                  });
              }
              this.content = "";
          });
      },
      getMore(){
          this.currentPage++;
          this.getComentList();
      }
  },
  created(){
      this.getComentList();
  },
  filters:{
      dateformat
  }
}
</script>
<style scoped>
    .comment{
        margin-bottom:10px; 
    }
    .comment textarea{
        margin-bottom:0; 
    }
</style>


