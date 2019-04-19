<template>
  <div class="menu-bar">
    <div class="layout--center">
      <ul class="menu-bar__list">
        <li class="menu-bar__item--title">
          {{title}}
          <category-tree :list="CategoryList"></category-tree>
        </li>
        <li
          v-for="item in MenuList"
          :key="item.id"
          :class="`menu-bar__item${item.type && item.type==='selected' ? '--selected':''}`"
        >
          <a>{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CategoryTree from '../category-tree'

export default {
  name: 'MenuBar',
  components: {
    CategoryTree
  },
  data() {
    return {
    }
  },
  props: {
    title:{
      type:String,
      default:'商品分类'
    },
    MenuList: {
      type: Array,
      default: () => []
    },
    CategoryList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="less">
@default-height: 36px;

.menu-bar {
  border-bottom: 2px rgba(255, 0, 0, 0.5) solid;
}

.menu-bar__list {
  height: (@default-height - 4);
  line-height: @default-height;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  display: inline-block;
}

.menu-bar__item(@item-width:100px) {
  width: @item-width;
  float: left;
  text-align: center;
  cursor: pointer;
}

.menu-bar__item--title {
  .menu-bar__item(200px);
  background-color: @focus-item-color;
  color: white;
}

.menu-bar__item {
  .menu-bar__item(100px);
  &--selected {
    .menu-bar__item(100px);
    color: @focus-item-color;
  }
  & a {
    color: @primary-color;
  }
  & a:hover {
    color: @focus-item-color;
  }
}
</style>
