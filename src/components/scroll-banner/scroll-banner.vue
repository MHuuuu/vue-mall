<template>
  <div class="scroll-banner">
    <el-carousel :height="`${height}px`" :arrow="arrow">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 >{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: 'ScrollBanner',
  data() {
    return {}
  },
  props: {
    height: {
      type: Number,
      default: 450
    },
    arrow:{
      type: String,
      default: "never"
    }
  }
}
</script>

<style>

.scroll-banner{
  z-index: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
