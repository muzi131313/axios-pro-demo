<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul class="about-list">
      <li v-for="d in data" :key="d.code">{{d.name}}</li>
    </ul>
  </div>
</template>
<script>
/**
 * @file views/About.vue
 * @description 关于页面
 * @created 2019年11月26日10:39:33
 */
export default {
  name: 'About',
  data() {
    return {
      data: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const resp = await this.$api.queryOrg({
        jsonConditions: {
          op: 'or',
          elements: [
            {
              param: 'name',
              op: 'contains',
              values: '北京'
            }
          ]
        }
      })
      const content = resp.content
      this.data = content
    }
  }
}
</script>
<style lang="scss" scoped>
.about {
  &-list {
    list-style: none;
  }
}
</style>
