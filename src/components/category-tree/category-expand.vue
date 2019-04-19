<template>
  <div class="expand-windows">
    <div v-for="item in content" :key="`expand__item-${item.level}-${item.id}`">
      <el-row class="group" :gutter="20">
        <el-col :span="4" class="group__title">
          <a :href="item.link">{{item.label}}</a>
        </el-col>
        <el-col :span="16" class="group__content">
          <a
            v-for="citem in item.children"
            :key="`expand__item-${citem.level}-${citem.id}`"
            :href="citem.link"
            :class="citem.isHot?'hotTag':'tag'"
          >{{citem.label}}</a>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryExpand',
  data() {
    return {}
  },
  props: {
    content: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less">
.expand-windows {
  padding: 10px 20px;
  overflow-y: auto;
  cursor: default;
}

.group {
}

.group__title {
  text-align: center;
}

.group__content {
  border-bottom: @lesser-color 1px dashed;
  padding-bottom: 10px;
  white-space:normal;
  word-wrap: break-word;
  word-break: normal;

  & > a {
    margin: 5px;
    &:hover {
      color: red;
    }
  }
}

.hotTag {
  color: rgb(192, 0, 0);
}
</style>
