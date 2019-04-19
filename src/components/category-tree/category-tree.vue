<template>
  <div class="category">
    <ul class="category__body">
      <template v-for="item in list">
        <li
          :id="`category__item-${item.level}-${item.id}`"
          :class="`category__item${item.level && item.level===1?'':'--lesser'}`"
          :key="item.id"
        >
          <category-expand
            v-if="item.level && item.level===1"
            :class="`category__expand`"
            :content="item.children"
          ></category-expand>
          <category-expand v-else :class="`category__expand`" :content="[item]"></category-expand>
          <a :href="item.link">{{item.label}}</a>
          <template v-if="item.level && item.level===2">
            <template v-for="cItem in item.children">
              <a v-if="cItem.isHot" :key="cItem.id" :href="cItem.link">{{cItem.label}}</a>
            </template>
          </template>
        </li>

        <!-- <li :id="`category__item-${item.level}-${item.id}`" class="category__item" :key="item.id">
          <category-expand class="category__expand" :content="item.children"></category-expand>
          <a :href="item.link">{{item.label}}</a>
        </li>-->

        <!-- 扁平化问题 导致代码重复 待解决-->
        <!-- <template v-for="cItem in item.children">
          <li
            :id="`category__item-${item.level}-${item.id}`"
            class="category__item--lesser"
            :key="cItem.id"
          >
            <category-expand class="category__expand" :content="[cItem]"></category-expand>
            <a :href="cItem.link">{{cItem.label}}</a>
            <template v-for="ccItem in cItem.children">
              <a v-if="ccItem.isHot" :key="ccItem.id" :href="ccItem.link">{{ccItem.label}}</a>
            </template>
          </li>
        </template>-->
      </template>
    </ul>
  </div>
</template>

<script>
import CategoryExpand from './category-expand.vue'
import { integrateJsonNested, sortDelayering } from '@/lib/util.js'
import { nextTick } from 'q'

export default {
  name: 'CategoryBody',
  components: {
    CategoryExpand
  },
  data() {
    return {}
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    sortList() {}
  },
  mounted() {
    /* setTimeout(() => {
      this.$nextTick(() => {
        console.log(this.list)
      })
    }, 2000) */
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
  opacity: 0.95;
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

  white-space: normal;
  word-wrap: break-word;
  word-break: normal;

  overflow: hidden;
  &:hover {
    background-color: @lesser-bg-color;
    & > a {
      color: @primary-color;
    }
    & .category__expand {
      display: block;
    }
  }
  & > a {
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
  & > a {
    font-weight: bold;
    color: @primary-color-white;
  }
}

//expand窗的基本信息
.category__expand {
  height: @default-height;
  color: @primary-color;
  width: 800px;
  margin-left: 200px;
  position: absolute;
  display: none;
  top: 0px;
  left: 0px;
  background-color: rgba(255, 255, 255,.9);
}
</style>
