<template>
  <div class="type-details-show layout--center">
    <details-header></details-header>
    <details-body></details-body>
  </div>
</template>

<script>
import DetailsHeader from './details-header'
import DetailsBody from './details-body'


export default {
  name: 'typeDetailsShow',
  components: {
    DetailsHeader,
    DetailsBody
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" >
.type-details-show {
  padding-top: 50px;
}
</style>
