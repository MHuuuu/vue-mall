<template>
  <div class="scroll-banner">
    <el-carousel :height="`${height}px`" :arrow="arrow">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <div class="layout--center">
          <img :src="item.address">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: 'ScrollBanner',
  data() {
    return {
    }
  },
  props: {
    height: {
      type: Number,
      default: 450
    },
    arrow: {
      type: String,
      default: 'never'
    },
    imgList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    completeAddress(old) {
      return require(old);
    }
  }
}
</script>

<style>
.scroll-banner {
  z-index: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
