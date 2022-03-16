<template>
  <div>
    <div class="banner-con">
      <VueSlickCarousel v-bind="settings">
        <div class="banner-box" v-for="banner in banners">
            <img width="100%" :src="banner.url" />
        </div>
        <template #prevArrow>
          <div class="arrow-left middle-item">
            <i class="las la-angle-left"></i>
          </div>
        </template>
        <template #nextArrow>
          <div class="arrow-right middle-item">
            <i class="las la-angle-right"></i>
          </div>
        </template>
      </VueSlickCarousel>
    </div>
    <div class="product-home-con">
      <v-container>
        <div class="title">
          <h1>New Arrivals</h1>
          <div class="seeall-butt">
            <nuxt-link to="product/newarrival">
              See All
            </nuxt-link>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      settings: {
        nextArrow: 'nextArrow',
        prevArrow: 'prevArrow',
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        draggable: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      },
      banners: [
          { url: '/mock/1.webp', link: '/' },
          { url: '/mock/2.webp', link: '/' },
          { url: '/mock/3.webp', link: '/' }
      ]
    }
  },
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
.banner-con {
  width: 100%;
  position: relative;
  .arrow-left {
    width: 50px;
    height: 50px;
    //background-color: $primary;
    position: absolute;
    left: 20px;
    top: 50%;
    margin-top: -25px;
    z-index: 1000;
    border-radius: 100px;
    font-size: 2rem;
  }
  .arrow-right {
    width: 50px;
    height: 50px;
    //background-color: $primary;
    position: absolute;
    right: 20px;
    top: 50%;
    margin-top: -25px;
    z-index: 1000;
    border-radius: 100px;
  }
}

.product-home-con {
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  .title {
    width: 100%;
    position: relative;
    h1 {
      text-align: center;
      font-size: 1.6rem;
      font-weight: 300;
      line-height: 30px;
    }
    .seeall-butt {
      position: absolute;
      right: 0px;
      height: 30px;
      top: 50%;
      margin-top: -15px;
    }
  }
}
</style>
