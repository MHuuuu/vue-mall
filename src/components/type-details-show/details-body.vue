<template>
  <div class="details-body">
    <el-row class="goods-list" type="flex" justify="space-between">
      <el-col :span="5" class="goods-list__item">1</el-col>
      <el-col :span="5" class="goods-list__item">1</el-col>
      <el-col :span="5" class="goods-list__item">1</el-col>
      <el-col :span="5" class="goods-list__item">1</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DetailsBody',
  data() {
    return {}
  }
}
</script>

<style lang="less" >
.details-body {
  margin-top: 20px;
  background-color: antiquewhite;
}
.goods-list__item {
  background-color: gray;
  height: 350px;
}
</style>
