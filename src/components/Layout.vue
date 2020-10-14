<template>
  <el-container class="layout">
    <router-view></router-view>
    <!-- <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer> -->
  </el-container>
</template>

<script>
export default {
  name: 'Layout',
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  beforeDestroy() {}
}
</script>

<style lang="scss" scoped>
.layout {
  // height: 100vh;
  box-sizing: border-box;
}
</style>
