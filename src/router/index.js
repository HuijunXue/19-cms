import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Tabber/Home';
import Member from '@/components/Tabber/Member';
import Cart from '@/components/Tabber/Cart'
import Search from '@/components/Tabber/Search';
import NewsDetail from '@/components/News/NewsDetail';
import NewsList from '@/components/News/NewsList';
import GoodsList from '@/components/Goods/GoodsList';
import GoodsDetail from '@/components/Goods/GoodsDetail';
import PicsList from '@/components/Pics/PicsList';
import PicsDetail from '@/components/Pics/PicsDetail';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path:'/news',
      component:NewsList
    },
    {
      path:'/news/newsDetail/:id',
      component:NewsDetail
    },
    {
      path:'/pics',
      component:PicsList
    },
    {
      path:'/pics/picsDetail',
      component:PicsDetail
    },
    {
      path:'/goods',
      component:GoodsList
    },
    {
      path:'/goods/goodsDetail',
      component:GoodsDetail
    },
    {
      path:'/member',
      component:Member
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/search',
      component:Search
    }
  ],
  linkActiveClass: "mui-active"
})
