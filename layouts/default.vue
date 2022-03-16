<template>
  <v-app>
    <Menubar />
    <v-main class="main-layout">
      <div class="layout-con">
        <Nuxt />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Alertmodal from "~/components/Alertmodal.vue";
import Menubar from "~/components/Menubar.vue";
export default {
  name: "default-layout",
  components: {
    Alertmodal,
    Menubar
  },
  computed: {
    ...mapState(["expand"]),
  },
  data() {
    return {
    }
  },
  watch: {
    $route() {
    }
  },
  mounted() {
  },
  methods: {
  }
};
</script>
<style lang="scss">
  .layout-con {
    padding-top: 115px;
  }
</style>
