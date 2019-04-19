<template>
  <div>
    <div class="header">
      <nav-bar></nav-bar>
      <index-searchBar :default-text="defaultText"></index-searchBar>
      <menu-bar :menu-list="menuList" :category-list="categoryList"></menu-bar>
    </div>
    <scroll-banner :img-list="bannerList"></scroll-banner>

    <typeDetailsShow>

    </typeDetailsShow>
  </div>
</template>
<script>
import IndexSearchBar from '_c/search-bar/index'
import NavBar from '_c/nav-bar'
import MenuBar from '_c/menu-bar'
import ScrollBanner from '_c/scroll-banner'
import CategoryTree from '_c/category-tree'
import typeDetailsShow from '_c/type-details-show'


import {
  getCategoryList1,
  getCategoryList2,
  getCategoryList3
} from '@/api/data'
import { integrateJsonNested, sortDelayering } from '@/lib/util.js'

export default {
  components: {
    IndexSearchBar,
    NavBar,
    MenuBar,
    ScrollBanner,
    CategoryTree,
    typeDetailsShow
  },
  data() {
    return {
      defaultText: 'sad',
      menuList: [
        { id: 1, name: '首页', type: 'selected' },
        { id: 2, name: '家具城' },
        { id: 3, name: '建材城' },
        { id: 4, name: '家居家饰' },
        { id: 5, name: '团购' }
      ],
      categoryList: [],
      bannerList: [
        { address: require('../../static/img/banner-img-1.jpg'), id: 1 },
        { address: require('../../static/img/banner-img-2.jpg'), id: 2 }
      ]
    }
  },
  mounted() {
    Promise.all([
      getCategoryList1(),
      getCategoryList2(),
      getCategoryList3()
    ]).then(res => {
      this.categoryList = sortDelayering(
        integrateJsonNested(res[0], integrateJsonNested(res[1], res[2])),
        integrateJsonNested(res[1], res[2])
      )
      //console.log(this.CategoryList)
    })
  }
}
</script>

<style lang="less">
</style>
