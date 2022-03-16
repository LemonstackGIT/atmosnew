<template>
  <div>
    asdasdasdasdasdasd
  </div>
</template>
<script>
export default {
  methods: {
    viewRoute(link) {
      this.$router.push({
        path: link
      });
    },
    redirectTo(path) {
      this.$router.replace({ path });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
