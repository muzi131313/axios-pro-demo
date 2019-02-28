<template>
  <div class="home">
    This is home page!
    <i class="logo"></i>
    <ul>
      <li v-for="(org, key) in orgs" :key="key">
        {{org.name}}&nbsp;&nbsp;
        {{org.address}}&nbsp;&nbsp;
        {{org.crpName}}&nbsp;&nbsp;
        {{org.phone}}
      </li>
    </ul>
  </div>
</template>

<script>
/**
 * @file Home.vue
 * @description index page
 * @createTime 2019年02月21日14:43:47
 */
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters({
      'orgs': 'org/orgs'
    })
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      await this.$store.dispatch('org/getOrgs')
    }
  }
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
ul {
  list-style: none;
}
</style>
