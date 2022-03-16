<template>
  <nav class="menubar-con">
    <div class="menu-header">
      <v-container>
        <div class="inner-con">
          <nuxt-link class="link-box divider" to="login">
            <div class="icon">
              <i class="las la-power-off"></i>
            </div>
            <div class="text">
              LOGIN
            </div>
          </nuxt-link>
          <nuxt-link class="link-box divider" to="login">
            <div class="icon">
              <i class="las la-shopping-cart"></i>
            </div>
            <div class="cart-number">
              0
            </div>
          </nuxt-link>
        </div>
      </v-container>
    </div>
    <div class="menu-body">
      <v-container>
        <div class="inner-con">
          <div class="logo-con">
            <img src="/logo-w.png">
          </div>
          <div class="menu-con">
            <div class="menu-box" v-for="menu in menus">
              <div class="header">
                {{ menu.name }}
              </div>
            </div>
          </div>
          <div class="search-box">
            <input type="text" placeholder="Search...">
          </div>
        </div>
      </v-container>
    </div>
  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "default-layout",
  components: {
  },
  computed: {
  },
  data() {
    return {
      menus: [
        {
          name: 'New Arrival',
          name_th: 'สินค้าใหม่',
          link: '/new-arrival'
        },
        {
          name: 'Brands',
          name_th: 'แบรนด์',
          link: '/brand'
        },
        {
          name: 'Categories',
          name_th: 'หทวดหมู่',
          link: '/category'
        },
        {
          name: 'Sale',
          name_th: 'Sale',
          link: '/sale'
        },
        {
          name: 'Blogs',
          name_th: 'blog',
          link: '/blog'
        }
      ]
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
<style lang="scss" scoped>
  .menubar-con {
    background-color: $primary;
    position: fixed;
    width: 100%;
    left: 0px;
    top: 0px;
    z-index: 10000;
    .menu-con {
      position: absolute;
      left: 220px;
      top: 50%;
      margin-top: -15px;
      height: 30px;
      .menu-box {
        font-size: 0.9rem;
        font-weight: 300;
        text-transform: uppercase;
        display: inline-block;
        color: #fff;
        margin-right: 25px;
        height: 30px;
        line-height: 30px;
      }
    }
    .logo-con {
      position: absolute;
      left: 0px;
      height: 45px;
      top: 50%;
      margin-top: -22.5px;
      img {
        height: 100%;
      }
    }
    .search-box {
      position: absolute;
      right: 30px;
      height: 35px;
      width: 200px;
      top: 50%;
      margin-top: -17.5px;
      input {
        width: 100%;
        height: 35px;
        line-height: 33px;
        border-radius: 100px;
        border: 1px #fff solid;
        padding-left: 20px;
        outline: none;
        color: #fff;
        &::-webkit-input-placeholder { /* Edge */
          color: #fff;
        }

        &:-ms-input-placeholder { /* Internet Explorer 10-11 */
          color: #fff;
        }

        &::placeholder {
          color: #fff;
        }
      }
    }
    .menu-header {
      width: 100%;
      position: relative;
      //background-color: rgba(255,255,255,0.8);
      background-color: #f0f0f0;
      height: 35px;
      .inner-con {
        position: relative;
        width: 100%;
        height: 35px;
        line-height: 35px;
        margin-top: -12px;
        text-align: right;
        .link-box {
          .cart-number {
            width: 24px;
            height: 24px;
            vertical-align: middle;
            display: inline-block;
            background-color: $primary;
            border-radius: 100px;
            text-align: center;
            line-height: 24px;
            color: #fff;
            font-size: 0.9rem;
          }
          .icon {
            display: inline-block;
            height: 22px;
            line-height: 22px;
            font-size: 1.3rem;
            vertical-align: middle;
          }
          .text {
            display: inline-block;
            font-size: 0.8rem;
            vertical-align: middle;
          }
          display: inline-block;
          padding-left: 12px;
          padding-right: 15px;
          height: 22px;
          line-height: 22px;
          font-size: 0.8rem;
          color: #111;
          font-weight: 300;
          &.divider {
            border-right: 1px #aaa solid;
          }
        }
      }
    }
    .menu-body {
      width: 100%;
      height: 80px;
      position: relative;
      .inner-con {
        position: relative;
        width: 100%;
        height: 80px;
        margin-top: -12px;
      }
    }
  }
</style>
