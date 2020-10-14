<template>
  <div class="prompt">
    <span>Hello World</span>
  </div>
</template>

<script>
// import { demoGetApi } from '../api'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {},
  data() {
    return {}
  },
  watch: {
    // $route: {
    //   immediate: true,
    //   handler(to) {
    //     this.active = to.path
    //   }
    // }
  },
  computed: {},
  methods: {
    // demoGetFun() {
    //   demoGetApi()
    //     .then(res => {
    //       console.log(res)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }
  },
  created() {
    // this.demoGetFun()
  },
  mounted() {},
  beforeDestroy() {}
}
</script>
<style scoped lang="scss">
.prompt {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
