<template>
  <div class="category">
    <ul class="category__body">
      <template v-for="item in list">
        <li
          :id="`category__item-${item.level}-${item.id}`"
          class="category__item"
          :key="item.id"
          @mouseenter="handleChangeDetail(`${item.level}-${item.id}`)"
          @mouseleave="handleClodeDetail"
        >
          <a :href="item.link">{{item.label}}</a>
        </li>

        <template v-for="cItem in item.children">
          <li
            :id="`category__item-${item.level}-${item.id}`"
            class="category__item--lesser"
            :key="cItem.id"
            @mouseenter="handleChangeDetail(`${cItem.level}-${cItem.id}`)"
            @mouseleave="handleClodeDetail"
          >
            <transition name="el-fade-in">
              <div
                class="category__expand"
                @mouseenter="handleKeepDetail"
                @mouseleave="handleClodeDetail"
              >{{text}}</div>
            </transition>
            <a :href="cItem.link">{{cItem.label}}</a>
            <a
              v-for="ccItem in cItem.children"
              :v-if="ccItem.isHot"
              :key="ccItem.id"
              :href="ccItem.link"
            >{{ccItem.label}}</a>
          </li>
        </template>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryBody',
  data() {
    return {
      //isHide: false,
      selectId: '-1',
      text:"?"
    }
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleChangeDetail(id) {
      this.text = id ? id : ''
      //this.selectId = id ? id : ''
      //this.isHide = true
      //console.log(id)
    },
    //保持左栏的选中状态
    handleKeepDetail() {
      //const selectedItem = 'item-' + this.selectId
      this.isHide = true
    },
    handleClodeDetail() {
      //this.isHide = false
    },
    handleInterDetail() {}
  }
}
</script>

<style lang="less" scoped>
@category-bg-color: #303133;
@default-height: 450px;

.category__body {
  width: 200px;
  list-style-type: none;
  padding: 0px;
  float: left;

  background-color: @category-bg-color;
  height: @default-height;
  border-top: 2px rgba(255, 0, 0, 0.5) solid;
  z-index: 10;
  position: relative;
}

.category__item--lesser {
  color: @unimportance-color;
  text-align: left;
  font-size: small;
  padding: 0px 10px;
  height: 34px;
  line-height: 34px;
  -webkit-transition-property: background-color, color;
  -webkit-transition-duration: 0.2s;
  -webkit-transition-delay: 0.05s;
  -webkit-transition-timing-function: ease;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  &:hover {
    background-color: @lesser-bg-color;
    & a {
      color: @primary-color;
    }

    & .category__expand{
      display:block;
    }
  }

  & a {
    color: @unimportance-color;
    padding: 0px 3px;
    &:hover {
      color: @focus-item-color;
    }
  }
}

//一阶继承二阶所有特性
.category__item {
  .category__item--lesser;
  font-weight: bold;
  & a {
    color: @primary-color-white;
  }
}

.category__expand {
  height: @default-height;
  width: 800px;
  position: absolute;
  top: 0px;
  left: 0px;
  margin-left: 200px;
  background-color: rgba(255, 255, 255, 0.8);
  color: @primary-color;
  display: none;
}
</style>
