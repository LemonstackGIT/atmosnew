<template>
  <v-app>
    <Menubar />
    <v-main class="main-layout">
      <div class="layout-con">
        <transition name="fade">
          <Nuxt />
        </transition>
      </div>
    </v-main>
    <Mainfooter />
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Alertmodal from "~/components/Alertmodal.vue";
import Menubar from "~/components/Menubar.vue";
import Mainfooter from "~/components/Mainfooter.vue";
export default {
  name: "default-layout",
  components: {
    Alertmodal,
    Menubar,
    Mainfooter
  },
  computed: {
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
  body, html, div, h1,h2,h3,h4,p,span, input {
    font-family: 'Roboto';
  }
  .layout-con {
    padding-top: 97px;
    @media (max-width: $mobile-size) {
      padding-top: 70px;
    }
  }
  .slick-dots {
    margin: 0px;
    margin-top: 15px;
    padding: 0px;
    text-align: center;
    margin-left: -22.5px;
    .slick-active {
        background-color: $primary;
    }
    li {
        display: inline-block;
        width: 9px;
        height: 9px;
        border-radius: 10px;
        background-color: #aaa;
        margin: 6px;
        button {
            display: none;
        }
      }
    }
  .pagination-con {
      width: 100%;
      text-align: center;
      margin-top: 20px;
      .arrow-box {
        display: inline-block;
        margin-left: 5px;
        margin-right: 5px;
        font-size: 1.1rem;
        cursor: pointer;
        vertical-align: middle;
        &:hover {
          color: $primary;
        }
      }
      .pagination-box {
        background-color: #eee;
        border-radius: 100px;
        height: 30px;
        width: 30px;
        text-align: center;
        line-height: 30px;
        display: inline-block;
        margin: 3px;
        cursor: pointer;
        vertical-align: middle;
        &:hover {
          background-color: #bbb;
        }
        &.active {
          background-color: $primary;
          color: #fff;
        }
      }
  }
  .mainbread {
    border-bottom: 1px #aaa solid;
    padding-bottom: 15px;
    margin-bottom: 10px;
    .mainbread-box {
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
      &.active {
        font-weight: 500;
        cursor: normal;
      }
    }
    .mainbread-arrow {
      padding-left: 10px;
      padding-right: 10px;
      display: inline-block;
      vertical-align: middle;
      color: $primary;
    }
  }
</style>
