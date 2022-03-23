<template>
  <div class="product-box t2">
    <Nuxt-link to="/product/view">
      <div class="image middle-item">
        <img src="/product.png" v-if="type == 1">
        <img src="/product2.jpg" v-if="type == 2">
        <img src="/men.webp" v-if="type == 3">
        <img src="/brand.webp" v-if="type == 4">
        <img src="/access.webp" v-if="type == 5">
        <img src="/sale2.jpg" v-if="type == 6">
      </div>
      <div class="product-name ec-text">
        NIKE DUNK HI RETRO PRM EMB
      </div>
      <div class="product-detail">
        Red
      </div>
      <div class="price" v-if="type!=6">
        ฿ 5,000.00
      </div>
      <div class="price" v-if="type==6">
        <span class="saletext">
          ฿ 1,250.00
        </span>
        <span class="discounttext">
          ฿ 4,550.00
        </span>
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

<style lang="scss">
  .product-box {
    width: 100%;
    background-color: #fff;
    padding: 0px;
    padding-bottom: 10px;
    &:hover {
      box-shadow: 0px 8px 30px -10px rgba(0,0,0,0.35);
      -webkit-box-shadow: 0px 8px 30px -10px rgba(0,0,0,0.35);
      -moz-box-shadow: 0px 8px 30px -10px rgba(0,0,0,0.35);
    }
    .image {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .product-name {
      width: 100%;
      text-align: center;
      font-weight: 400;
      color: #000;
      font-size: 0.85rem;
      letter-spacing: 0.5px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .product-detail {
      width: 100%;
      text-align: center;
      font-weight: 300;
      color: #777;
      font-size: 0.85rem;
      padding-left: 10px;
      padding-right: 10px;
    }
    .price {
      width: 100%;
      text-align: center;
      font-weight: 300;
      color: #000;
      .saletext {
        color: red;
        display: inline-block;
        font-weight: 400;
      }
      .discounttext {
        text-decoration: line-through;
        color: #888;
        display: inline-block;
        font-size: 0.80rem;
      }
    }
  }
</style>
