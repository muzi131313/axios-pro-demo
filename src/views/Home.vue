<template>
  <div class="home">
    This is home page!
    <i class="logo"></i>
  </div>
</template>

<script>
/**
 * @file Home.vue
 * @description index page
 * @createTime 2019年02月21日14:43:47
 */
export default {
  name: 'home'
}
</script>
<style lang="scss" scoped>
.logo {
  display: block;
  height: 100px;
  width: 100px;
  background: url(@/../../assets/logo.png) center center no-repeat;
  background-size: cover;
  margin: 0 auto;
}
</style>
