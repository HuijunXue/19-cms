<template>
    <div class="news">
        <div class="news-detail">
            <h4 class="news-title">{{newsDetail.title}}</h4>
            <p class="news-info">
                <span class="post-time">发表时间: {{newsDetail.add_time | dateformat("YYYY-MM-DD HH:mm:ss")}}</span>
                <span class="click-num mui-pull-right">点击: {{newsDetail.click}}次</span>
            </p>
            <hr>
            <div class="news-content" v-html="newsDetail.content"></div>
        </div>
        <div class="comment">
            <comment :id="$route.params.id"/>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import dateformat from "../filter/dateformat";
import comment from "../common/comment"
export default {
  data(){
      return{
          newsDetail:[]
      }
  },
  filters:{
      dateformat
  },
  components:{
      comment
  },
  methods:{
      getNewsDetail(){
          axios({
              url:"http://www.escook.cn:3000/api/getnew/"+this.$route.params.id
          }).then(res => {
              console.log(res);
              this.newsDetail = res.data.message[0];
          });
      }
  },
  created(){
      this.getNewsDetail();
  }
}
</script>
<style>
    .news{
        padding: 0 8px;
    }
    .news-content img{
        width: 100%;
    }
</style>