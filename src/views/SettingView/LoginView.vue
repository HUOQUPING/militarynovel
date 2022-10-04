<template>
  <div class="login">
    <router-view></router-view>
    <router-link tag="div"  to="/setting">
      <span>登录页面</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>