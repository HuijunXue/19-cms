<template>
<div>
    <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item,index) in pics" :key="index"> 
        <img :src="item.img" alt="">
    </mt-swipe-item>
  </mt-swipe>
    <div class="mui-content">
		    <ul class="mui-table-view mui-grid-view mui-grid-9">
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news">
		                <img src="../../assets/images/menu1.png" alt="">
		                <div class="mui-media-body">新闻资讯</div></router-link></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/pics">
		                <img src="../../assets/images/menu2.png" alt="">
		                <div class="mui-media-body">图片分享</div></router-link></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/pics">
		                <img src="../../assets/images/menu3.png" alt="">
		                <div class="mui-media-body">商品购买</div></router-link></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/pics">
		                <img src="../../assets/images/menu4.png" alt="">
		                <div class="mui-media-body">留言反馈</div></router-link></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/pics">
		                <img src="../../assets/images/menu5.png" alt="">
		                <div class="mui-media-body">视频专区</div></router-link></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/pics">
		                <img src="../../assets/images/menu6.png" alt="">
		                <div class="mui-media-body">联系我们</div></router-link></li>
		    </ul> 
		</div>
</div> 
</template>
<script>
import { Swipe, SwipeItem } from "mint-ui";
import axios from "axios";
export default {
  data() {
    return {
      pics: []
    };
  },
  methods: {
    getPics() {
      axios({
        url: "http://www.escook.cn:3000/api/getlunbo"
      }).then(res => {
        this.pics = res.data.message;
        console.log(res);
      });
    }
  },
  created() {
    this.getPics();
  }
};
</script>
<style scoped>
.mint-swipe {
  height:157px;
}

.mint-swipe img {
  width: 100%;
  display: block;
}

.mui-table-view-cell img{
    width: 60%;
}

.mui-grid-view.mui-grid-9{
    background-color: white;
}

.mui-content > .mui-table-view:first-child{
    margin-top:0; 
}
</style>