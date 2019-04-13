<template>
  <div>
    <div class="header">
      <nav-bar></nav-bar>
      <index-searchBar :default-text="defaultText"></index-searchBar>
      <menu-bar :menu-list="MenuList" :category-list="CategoryList"></menu-bar>
    </div>
    <scroll-banner></scroll-banner>
  </div>
</template>
<script>
import IndexSearchBar from '_c/search-bar/index'
import NavBar from '_c/nav-bar'
import MenuBar from '_c/menu-bar'
import ScrollBanner from '_c/scroll-banner'
import CategoryTree from '_c/category-tree'

import {
  getCategoryList1,
  getCategoryList2,
  getCategoryList3
} from '@/api/data'
import { IntegrateJsonNested } from '@/lib/util.js'

export default {
  components: {
    IndexSearchBar,
    NavBar,
    MenuBar,
    ScrollBanner,
    CategoryTree
  },
  data() {
    return {
      defaultText: 'sad',
      MenuList: [
        { id: 1, name: '首页', type:'selected'},
        { id: 2, name: '家具城' },
        { id: 3, name: '建材城' },
        { id: 4, name: '家居家饰' },
        { id: 5, name: '团购' }
      ],
      CategoryList: []
    }
  },
  mounted() {
    Promise.all([
      getCategoryList1(),
      getCategoryList2(),
      getCategoryList3()
    ]).then(res => {
      /* this.folderList = res[0]
      this.fileList = res[1] */
      this.CategoryList = IntegrateJsonNested(res[0],IntegrateJsonNested(res[1],res[2]))
      //console.log(res[0], res[1], res[2])
      console.log(this.CategoryList)

    })
  }
}
</script>

<style lang="less">
</style>
