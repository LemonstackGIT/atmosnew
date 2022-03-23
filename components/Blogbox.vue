<template>
  <div class="blog-box t2">
    <Nuxt-link to="/blog/view">
      <div class="image">
        <img src="/blog.jpg" width="100%">
      </div>
      <div class="date">
        15 Mar 2022
      </div>
      <div class="name ec-text">
        Blog' Title or Name will Show Here
      </div>
    </Nuxt-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
  },
  data() {
    return {
    }
  },
  props: ["data", "type"],
  mounted () {
  },
  methods: {
    viewRoute(link) {
      this.$router.push({
        path: link
      });
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
  .blog-box {
    width: 100%;
    margin-bottom: 20px;
    .image {
      width: 100%;
    }
    .date {
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: 2px;
      color: #999;
      text-transform: uppercase;
      margin-top: 5px;
    }
    .name {
      font-size: 1rem;
      line-height: 1rem;
      font-weight: 300;
      color: #000;
    }
  }
</style>
