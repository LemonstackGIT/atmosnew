<template>
  <nav>
    <div class="res-menu"
      @click="menushow = !menushow"
      :class="{ 'active': menushow }">
      <div class="line line1 t2"></div>
      <div class="line line2 t2"></div>
    </div>
    <div class="subheader" v-if="false">
      SHOP NOW! WE DELIVER EVERYDAY, 7 DAYS A WEEK
    </div>
    <div class="menu-header">
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
        <div class="lang-con">
          <img src="/thai.png" width="20" height="12">
          <div class="arrow-box">
            <i class="las la-angle-down"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="resaction">
      <div class="resaction-box">
        <i class="las la-shopping-cart"></i>
      </div>
      <div class="resaction-box">
        <i class="las la-search"></i>
      </div>
    </div>
    <div class="menu-body">
      <div class="search-box">
        <div class="iconsearch">
          <i class="las la-search"></i>
        </div>
        <input type="text" placeholder="Search...">
      </div>
      <nuxt-link to="/" class="logo-con">
        <img src="/logo-w.png" class="logow">
        <img src="/logo.png" class="logob">
      </nuxt-link>
      <transition name="fade">
        <div class="menu-con" v-if="menushow">
          <div class="menu-box" v-for="menu in menus"
            @mouseenter="menu.expand = true"
            @mouseleave="menu.expand = false">
            <nuxt-link :to="menu.link" class="header" :class="menu.class">
              {{ menu.name }}
            </nuxt-link>
            <div class="resexpand t2"
              v-if="menu.child"
              :class="{ 'active': menu.expand == true }"
              @click="menu.expand = !menu.expand">
              <i class="las la-angle-down"></i>
            </div>
            <div class="menuchild-con" v-if="menu.expand && menu.child">
              <v-container>
                <v-row>
                  <v-col
                    lg="3" md="4" xs="12" cols="12"
                    v-for="child in menu.child"
                    class="nospace">
                    <div class="child-box">
                      <nuxt-link :to="child.link">
                        {{ child.text }}
                      </nuxt-link>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
          <div class="userlogin-res" @click="viewRoute('/login')">
            <i class="las la-user"></i> LOGIN / REGISTER
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
  },
  data() {
    return {
      endhome: 0,
      windowWidth: 0,
      menushow: false,
      menus: [
        {
          name: 'New Arrival',
          name_th: 'สินค้าใหม่',
          link: '/collection/new-arrival',
          expand: false,
        },
        {
          name: 'Brands',
          name_th: 'แบรนด์',
          link: '/collection',
          expand: false,
          child: [
            { text: '24bottles', link:'/collection/24bottles' },
            { text: 'Adidas', link:'/collection/Adidas' },
            { text: 'Atmos', link:'/collection/Atmos' },
            { text: 'Bearbrick', link:'/collection/Bearbrick' },
            { text: 'Columbia', link:'/collection/Columbia' },
            { text: 'Converse', link:'/collection/Converse' },
            { text: 'Newbalance', link:'/collection/Newbalance' },
            { text: 'Newera', link:'/collection/Newera' },
            { text: 'Nike', link:'/collection/Nike' },
            { text: 'Puma', link:'/collection/Puma' },
            { text: 'Salomon', link:'/collection/Salomon' },
            { text: 'Vans', link:'/collection/Vans' },
          ]
        },
        {
          name: 'Men',
          name_th: 'ผู้ชาย',
          link: '/collection/men',
          expand: false,
        },
        {
          name: 'Women',
          name_th: 'ผู้หญิง',
          link: '/collection/women',
          expand: false,
        },
        {
          name: 'Accessories',
          name_th: 'เครื่องประดับ',
          link: '/collection/accessories',
          expand: false,
        },
        {
          name: 'Sale',
          name_th: 'Sale',
          class: 'textred',
          link: '/collection/sale',
          expand: false,
        },
        {
          name: 'Blogs',
          name_th: 'blog',
          link: '/blog',
          expand: false,
        }
      ]
    }
  },
  watch: {
    $route() {
      if (this.windowWidth <= 992) {
        this.menushow = false
      } else {
        this.menushow = true
      }
    }
  },
  mounted() {
    this.onResize()
    this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
    })
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 992) {
        this.menushow = false
      } else {
        this.menushow = true
      }
    },
    viewRoute (data) {
      this.$router.push({
        path: data
      })
    },
  }
};
</script>
<style lang="scss" scoped>
  nav {
    background-color: $primary;
    position: fixed;
    width: 100%;
    left: 0px;
    top: 0px;
    z-index: 10000;
    height: 97px;
    .res-menu {
      display: none;
      @media (max-width: $mobile-size) {
        display: block;
        position: fixed;
        left: 20px;
        top: 20px;
        z-index: 20000;
        width: 30px;
        height: 30px;
        .line {
          width: 30px;
          height: 1px;
          background-color: #fff;
          position: absolute;
          left: 50%;
          margin-left: -15px;
          &.line1 {
            top: 50%;
            margin-top: -6px;
          }
          &.line2 {
            top: 50%;
            margin-top: 6px;
          }
        }
      }
      &.active {
        .line {
          background-color: $primary;
        }
        .line1 {
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
          margin-top: 0px;
        }
        .line2 {
          -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
          margin-top: -0px;
        }
      }
    }
    @media (max-width: $mobile-size) {
      height: 70px;
    }
    .logow {
      display: block;
    }
    .logob {
      display: none;
    }
    .subheader {
      width: 100%;
      text-align: center;
      background-color: #fff;
      padding: 5px;
      letter-spacing: 1px;
      font-size: 0.8rem;
      font-weight: 400;
    }
    .menu-con {
      position: relative;
      left: 0px;
      height: 36px;
      text-align: center;
      width: 100%;
      margin-top: 6px;
      @media (max-width: $mobile-size) {
        position: fixed;
        z-index: 19000;
        width: 100%;
        height: 100%;
        background-color: rgba(255,255,255,0.95);
        top: 0px;
        left: 0px;
        margin: 0px;
        padding: 60px;
        overflow-y: scroll;
        overflow-x: hidden;
      }
      a {
        color: #fff;
      }
      .menu-box {
        font-size: 0.88rem;
        font-weight: 300;
        text-transform: uppercase;
        display: inline-block;
        color: #fff;
        margin-right: 25px;
        height: 39px;
        line-height: 39px;
        cursor: pointer;
        @media (max-width: $mobile-size) {
          width: 100%;
          display: block;
          position: relative;
          height: auto;
        }
        .resexpand {
          position: absolute;
          right: 0px;
          top: 15px;
          font-size: 1.4rem;
          color: #000;
          z-index: 10000;
          &.active {
            -ms-transform: rotate(180deg);
            transform: rotate(180deg);
          }
        }
        .header {
          display: block;
          text-align: center;
          padding-left: 10px;
          padding-right: 10px;
          @media (max-width: $mobile-size) {
            color: #000;
            font-weight: 400;
            width: 100%;
            text-align: left;
            font-size: 1.2rem;
            padding-top: 15px;
            padding-bottom: 15px;
            position: relative;
          }
          &.textred {
            color: red;
            font-weight: 500;
          }
        }
        &:hover {
          border-bottom: 2px #fff solid;
        }
        .menuchild-con {
          position: absolute;
          width: 100vw;
          background-color: #fff;
          top: 39px;
          padding-top: 30px;
          padding-bottom: 30px;
          left: 0px;
          border-bottom: 1px #aaa solid;
          @media (max-width: $mobile-size) {
            position: relative;
            width: 80%;
            z-index: 10000;
            top: 0px;
            margin-left: 10%;
            margin-top: -20px;
            padding-top: 20px;
          }
          a {
            color: #000;
            &:hover {
              color: $primary;
            }
          }
          .nospace {
            margin: 0px;
            padding: 0px;
          }
          .child-box {
            width: 100%;
            color: #000;
            cursor: pointer;
            height: 30px;
            line-height: 30px;
            text-align: left;
            @media (max-width: $mobile-size) {
              font-weight: 500;
            }
          }
        }
      }
    }
    .logo-con {
      position: relative;
      left: 0px;
      height: 30px;
      top: 0px;
      text-align: center;
      width: 100%;
      display: block;
      margin-top: 22px;
      z-index: 10000;
      img {
        height: 30px;
      }
      .logow {
        display: inline-block;
      }
      .logob {
        display: none;
      }
    }
    .search-box {
      position: absolute;
      right: 20px;
      height: 30px;
      width: 180px;
      top: 30px;
      @media (max-width: $mobile-size) {
        display: none;
      }
      .iconsearch {
        position: absolute;
        right: 0px;
        height: 30px;
        line-height: 31px;
        color: #fff;
        width: 25px;
        font-size: 1.2rem;
        cursor: pointer;
        &:hover {
          opacity: 0.5;
        }
      }
      input {
        width: 100%;
        height: 30px;
        line-height: 28px;
        border-radius: 0px;
        border: 1px #fff solid;
        padding-left: 10px;
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
      height: 35px;
      position: absolute;
      z-index: 12000;
      right: 20px;
      top: 8px;
      @media (max-width: $mobile-size) {
        display: none;
      }
      .inner-con {
        position: relative;
        height: 35px;
        line-height: 35px;
        text-align: right;
        .link-box {
          .cart-number {
            width: 18px;
            height: 18px;
            vertical-align: middle;
            display: inline-block;
            //border: 1px #fff solid;
            //background-color: $primary;
            background-color: rgba(0,0,0,0.4);
            border-radius: 100px;
            text-align: center;
            line-height: 18px;
            color: #fff;
            font-size: 0.7rem;
          }
          .icon {
            display: inline-block;
            height: 22px;
            line-height: 22px;
            font-size: 1.1rem;
            vertical-align: middle;
            color: #fff;
          }
          .text {
            display: inline-block;
            font-size: 0.8rem;
            vertical-align: middle;
            color: #fff;
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
            border-right: 1px rgba(255,255,255,0.4) solid;
          }
        }
      }
    }
    .menu-body {
      width: 100%;
      position: relative;
      .inner-con {
        position: relative;
        width: 100%;
      }
    }
    .lang-con {
      display: inline-block;
      vertical-align: middle;
      padding-left: 5px;
      .arrow-box {
        vertical-align: middle;
        display: inline-block;
        color: #fff;
      }
      img {
        vertical-align: middle;
      }
    }
    &.invert {
      background-color: #fff;
      border-bottom: 1px $primary solid;
      .menu-box {
        color: #000;
      }
      .divider {
        border-right: 1px rgba(0,0,0,0.4) solid !important;
      }
      .logow {
        display: none;
      }
      .logob {
        display: inline-block;
      }
      .arrow-box {
        vertical-align: middle;
        display: inline-block;
        color: #000;
      }
      .link-box {
        .cart-number {
          background-color: $primary !important;
        }
        .icon {
          color: #000 !important;
        }
        .text {
          color: #000 !important;
        }
      }
      .search-box {
        .iconsearch {
          color: $primary !important;
        }
        input {
          border: 1px $primary solid;
          padding-left: 20px;
          outline: none;
          color: $primary;
          &::-webkit-input-placeholder {
            color: $primary;
          }

          &:-ms-input-placeholder {
            color: $primary;
          }

          &::placeholder {
            color: $primary;
          }
        }
      }
    }
  }
  .resaction {
    position: absolute;
    right: 20px;
    top: 15px;
    display: none;
    @media (max-width: $mobile-size) {
      display: block;
    }
    .resaction-box {
      display: inline-block;
      color: #fff;
      height: 40px;
      width: 40px;
      text-align: center;
      line-height: 40px;
      font-size: 1.7rem;
    }
  }

  .userlogin-res {
    width: 100%;
    height: 45px;
    line-height: 43px;
    border: 1px $primary solid;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 10px;
    display: none;
    @media (max-width: $mobile-size) {
      display: block;
    }
  }
</style>
