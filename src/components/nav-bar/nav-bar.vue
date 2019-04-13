<template>
  <div class="nav-bar">
    <div class="layout--center">
      <ul class="nav-bar__fouce">信息栏</ul>
      <ul class="nav-bar__customer">业务栏</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {}
  }
}
</script>

<style lang="less">
//@import './nav-bar.less';
.nav-text(@dir) {
  color: @lesser-color;
  float: @dir;
  margin: 3px;
  padding: 0px;
}

.nav-bar {
  background-color: @lesser-bg-color;
  overflow: hidden;
  &__fouce {
    .nav-text(left);
  }

  &__customer {
    .nav-text(right);
  }
}
</style>
