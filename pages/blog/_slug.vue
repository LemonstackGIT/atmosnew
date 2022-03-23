<template>
  <div class="blogview-con">
    <v-container>
      <div class="mainbread">
        <div class="mainbread-box" @click="viewRoute('/')">
          Homepage
        </div>
        <div class="mainbread-arrow">
          <i class="las la-angle-right"></i>
        </div>
        <div class="mainbread-box" @click="viewRoute('/blog')">
          Blogs
        </div>
        <div class="mainbread-arrow">
          <i class="las la-angle-right"></i>
        </div>
        <div class="mainbread-box active">
          Blogs's Name
        </div>
      </div>
      <v-row>
        <v-col lg="2" cols="12"></v-col>
        <v-col lg="8" cols="12">
          <div class="content-blog-con">
            <div class="mainimage">
              <img src="/blog.jpg" width="100%">
            </div>
            <div class="maincontent">
              <div class="date">
                15 Mar 2022
              </div>
              <div class="name ec-text">
                Blog' Title or Name will Show Here
              </div>
            </div>
            <b>What is Lorem Ipsum?</b><br><br>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <br><br>
            <b>Why do we use it?</b>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            <br><br>
            <b>Where does it come from?</b>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
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
  .blogview-con {
    width: 100%;
    min-height: 100vh;
    padding-top: 40px;
    padding-bottom: 50px;
    @media (max-width: $mobile-size) {
      padding-left: 10px;
      padding-right: 10px;
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
          // background-color: #444;
          // color: #fff;
          border-left: 2px $primary solid;
        }
      }
    }
  }
  .content-blog-con {
    padding-top: 30px;
    @media (max-width: $mobile-size) {
      padding-top: 0px;
    }
    .mainimage {
      margin-bottom: 20px;
    }
  }
  .maincontent {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px #eee solid;
    .date {
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 1px;
      color: #666;
      text-transform: uppercase;
    }
    .name {
      font-size: 1.2rem;
      font-weight: 400;
      text-transform: uppercase;
    }
  }
</style>
