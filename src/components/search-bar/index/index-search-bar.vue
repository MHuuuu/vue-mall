<template>
  <div>
    <div class="layout--center">
      <el-row type="flex" align="middle" class="search-bar">
        <el-col :span="4">
          <img class="logo" src="@/assets/img/logo.png" alt="emmo">
        </el-col>
        <el-col :span="16">
          <div class="search-bar__input">
            <el-input :placeholder="defaultText" v-model="input" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IndexSearchBar',
  data() {
    return {
      input: '',
      select: ''
    }
  },
  props: {
    defaultText: {
      type: String,
      default: '请输入内容'
    }
  }
}
</script>
<style lang="less">

.search-bar{
  height: 120px;
  overflow: auto;
  &__input{
    width: 600px;
    margin: 0px auto;
  }
}

.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>

