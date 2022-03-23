<template>
  <div class="homepage-con">
    <div class="banner-con">
      <VueSlickCarousel v-bind="settings">
        <div class="banner-box" v-for="banner in banners">
            <img width="100%" :src="banner.url" />
        </div>
        <template #prevArrow>
          <div class="arrowpage-left middle-item">
            <i class="las la-angle-left"></i>
          </div>
        </template>
        <template #nextArrow>
          <div class="arrowpage-right middle-item">
            <i class="las la-angle-right"></i>
          </div>
        </template>
      </VueSlickCarousel>
    </div>
    <div class="product-home-con">
      <v-container>
        <div class="switch-con">
          <div class="switch-box"
            :class="{ 'active': switchproduct == 1 }"
            @click="switchproduct = 1">
            New Arrivals
          </div>
          <div class="switch-box"
            :class="{ 'active': switchproduct == 2 }"
            @click="switchproduct = 2">
            Trends
          </div>
        </div>
        <div v-if="switchproduct == 1">
          <VueSlickCarousel v-bind="settings2">
            <div class="productslider-box" v-for="n in 8">
              <Productbox type="1" />
            </div>
            <template #prevArrow>
              <div class="arrowpage-left middle-item">
                <i class="las la-angle-left"></i>
              </div>
            </template>
            <template #nextArrow>
              <div class="arrowpage-right middle-item">
                <i class="las la-angle-right"></i>
              </div>
            </template>
          </VueSlickCarousel>
        </div>
        <div v-if="switchproduct == 2">
          <VueSlickCarousel v-bind="settings2">
            <div class="productslider-box" v-for="n in 8">
              <Productbox  type="2" />
            </div>
            <template #prevArrow>
              <div class="arrowpage-left middle-item">
                <i class="las la-angle-left"></i>
              </div>
            </template>
            <template #nextArrow>
              <div class="arrowpage-right middle-item">
                <i class="las la-angle-right"></i>
              </div>
            </template>
          </VueSlickCarousel>
        </div>
        <div class="adbox-con">
          <v-row>
            <v-col lg="6" md="6" cols="12">
              <div class="adbox">
                <div class="textfront middle-item t2">
                  VIEW PRODUCT
                </div>
                <img src="/mockad.jpg" width="100%">
              </div>
            </v-col>
            <v-col lg="6" md="6" cols="12">
              <div class="adbox">
                <div class="textfront middle-item t2">
                  VIEW PRODUCT
                </div>
                <img src="/mockad.jpg" width="100%">
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
        <div class="video-con">
          <iframe width="100%" height="600" src="https://www.youtube.com/embed/P3tBF0f7C1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="bloghome-con">
          <v-container>
            <div class="title">
              <h1>
                Blogs
              </h1>
              <nuxt-link to="blog" class="seeall-butt">
                See All
              </nuxt-link>
            </div>
            <VueSlickCarousel v-bind="settings3">
              <div class="productslider-box" v-for="n in 8">
                <Blogbox />
              </div>
              <template #prevArrow>
                <div class="arrowpage-left middle-item">
                  <i class="las la-angle-left"></i>
                </div>
              </template>
              <template #nextArrow>
                <div class="arrowpage-right middle-item">
                  <i class="las la-angle-right"></i>
                </div>
              </template>
            </VueSlickCarousel>
          </v-container>
        </div>
        <div class="homeinstagram">
          <v-container>
            <div class="embedsocial-hashtag" data-ref="2281a1b5b1a2e23bd4e8ccf920e6d8caa9215f52"></div>
          </v-container>
        </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import Productbox from "~/components/Productbox.vue";
import Blogbox from "~/components/Blogbox.vue";
export default {
  components: {
    VueSlickCarousel,
    Productbox,
    Blogbox
  },
  data () {
    return {
      switchproduct: 1,
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
      settings2: {
        nextArrow: 'nextArrow',
        prevArrow: 'prevArrow',
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: false,
        draggable: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: true,
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          }
        ]
      },
      settings3: {
        nextArrow: 'nextArrow',
        prevArrow: 'prevArrow',
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
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
          { url: '/mock/3.webp', link: '/' },
          { url: '/mock/1.webp', link: '/' },
          { url: '/mock/2.webp', link: '/' },
      ]
    }
  },
  mounted () {
    (function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialHashtagScript"));
  },
  methods: {
    setVideoheight () {
      let videoH = 0
      videoH = $(".video-con .video1").height()
      alert(videoH)
    },
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
.homepage-con {
  background-color: #fafafa;
}
.banner-con {
  width: 100%;
  position: relative;
  .arrowpage-left {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 20px;
    top: 50%;
    margin-top: -25px;
    z-index: 1000;
    border-radius: 100px;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
  }
  .arrowpage-right {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 20px;
    top: 50%;
    margin-top: -25px;
    z-index: 1000;
    border-radius: 100px;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
  }
}

.product-home-con {
  width: 100%;
  padding-top: 15px;
  padding-bottom: 30px;
  position: relative;
  .productslider-box {
    padding: 10px;
    padding-bottom: 25px;
  }
  .arrowpage-left {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 20px;
    top: 50%;
    margin-top: -25px;
    z-index: 1000;
    border-radius: 100px;
    font-size: 2rem;
    color: $primary;
    cursor: pointer;
    margin-left: -40px;
  }
  .arrowpage-right {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 20px;
    top: 50%;
    margin-top: -25px;
    z-index: 1000;
    border-radius: 100px;
    font-size: 2rem;
    color: $primary;
    cursor: pointer;
    margin-right: -40px;
  }
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
      font-size: 0.85rem;
      margin-top: -15px;
    }
  }
}
.video-con {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}
.switch-con {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  .switch-box {
    display: inline-block;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1rem;
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 4px;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
    &.active {
      border-bottom: 2px #000 solid;
    }
  }
}
.adbox-con {
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
  .adbox {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    .textfront {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      background-color: rgba(0,0,0,0.6);
      color: #fff;
      text-transform: uppercase;
      opacity: 0;
    }
    &:hover {
      .textfront {
        opacity: 1;
      }
    }
  }
}

.bloghome-con {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  //background-color: #fff;
}

.homeinstagram {
  background-color: #fff;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
