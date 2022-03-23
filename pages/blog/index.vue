<template>
  <div class="blog-con">
    <v-container>
      <div class="mainbread">
        <div class="mainbread-box">
          Homepage
        </div>
        <div class="mainbread-arrow" @click="viewRoute('/')">
          <i class="las la-angle-right"></i>
        </div>
        <div class="mainbread-box active">
          Blogs
        </div>
      </div>
      <v-row>
        <v-col lg="3" md="3" cols="12">
          <div class="category-con">
            <div class="category-header">
              Blog Categories
            </div>
            <nuxt-link to="/blog" class="category-box t1" v-for="category in categorys">
              {{ category.name }}
            </nuxt-link>
          </div>
        </v-col>
        <v-col lg="9" md="9" cols="12">
          <div class="blogbody-con">
            <v-row>
              <v-col lg="6" cols="12" v-for="n in 8">
                <Blogbox />
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import Blogbox from "~/components/Blogbox.vue";
export default {
  components: {
    VueSlickCarousel,
    Blogbox
  },
  data () {
    return {
      categorys: [
        { name: 'Category 1', link: 'cat1' },
        { name: 'Category 2', link: 'cat2' },
        { name: 'Category 3', link: 'cat3' },
        { name: 'Category 4', link: 'cat4' },
        { name: 'Category 5', link: 'cat5' },
      ]
    }
  },
  mounted () {
    //this.setVideoheight()
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
  .blog-con {
    width: 100%;
    min-height: 100vh;
    padding-top: 40px;
    @media (max-width: $mobile-size) {
      padding-left: 15px;
      padding-right: 15px;
    }
    .blogbody-con {
      margin-top: 20px;
    }
    .category-con {
      margin-top: 20px;
      .category-header {
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      .category-box {
        width: 100%;
        display: block;
        padding-left: 10px;
        height: 40px;
        line-height: 40px;
        background-color: #fafafa;
        margin-top: 10px;
        color: #000;
        text-transform: uppercase;
        border-left: 2px transparent solid;
        &:hover {
          border-left: 2px $primary solid;
        }
        @media (max-width: $mobile-size) {
          display: inline-block;
          border: 1px $primary solid;
          width: auto;
          border-radius: 100px;
          height: 35px;
          line-height: 33px;
          padding-left: 15px;
          padding-right: 15px;
          background-color: transparent;
          font-size: 0.8rem;
          margin-right: 10px;
          &:hover {
            border-left: 1px $primary solid;
          }
        }
      }
    }
  }
</style>
