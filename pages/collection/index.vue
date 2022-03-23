<template>
  <div class="brand-con">
    <v-container>
      <div class="mainbread">
        <div class="mainbread-box" @click="viewRoute('/')">
          Homepage
        </div>
        <div class="mainbread-arrow">
          <i class="las la-angle-right"></i>
        </div>
        <div class="mainbread-box active">
          Collections
        </div>
      </div>
      <h1 class="brand-header">
        Brand
      </h1>
      <div class="letter-con">
        <div class="letter-box"
          v-for="letter in letters"
          :class="{ 'active': getBrand(letter).length > 0 }">
          {{ letter }}
        </div>
      </div>
      <div class="letter-body">
        <div class="letter-body-box" v-for="letter in letters" v-if="getBrand(letter).length > 0">
          <div class="left-letter-section middle-item">
            <div class="letter">{{letter}}</div>
          </div>
          <div class="right-content">
            <v-row>
              <v-col lg="4" md="4" cols="12" v-for="brand in getBrand(letter)">
                <div class="brand-box" @click="viewRoute('/collection/'+brand.name)">
                  {{ brand.name }}
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-container>
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
    Productbox
  },
  data () {
    return {
      letters: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
      brands: [
        { name: '24bottles', check: false },
        { name: 'Adidas', check: false },
        { name: 'Atmos', check: false },
        { name: 'Bearbrick', check: false },
        { name: 'Columbia', check: false },
        { name: 'Converse', check: false },
        { name: 'Newbalance', check: false },
        { name: 'Newera', check: false },
        { name: 'Nike', check: false },
        { name: 'Puma', check: false },
        { name: 'Salomon', check: false },
        { name: 'Vans', check: false },
      ]
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    getBrand(letter) {
      let arr = []
      for (var i = 0; i < this.brands.length; i++) {
        if (this.brands[i].name.charAt(0).toLowerCase() == letter) {
          arr.push(this.brands[i])
        }
      }
      return arr
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
.brand-con {
  padding-top: 50px;
  padding-bottom: 60px;
  @media (max-width: $mobile-size) {
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .brand-header {
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
  }
  .letter-con {
    width: 100%;
    .letter-box {
      background-color: #f0f0f0;
      line-height: 30px;
      height: 30px;
      width: 28px;
      text-align: center;
      margin: 3px;
      display: inline-block;
      text-transform: uppercase;
      color: #aaa;
      &.active {
        background-color: #555;
        color: #fff;
        cursor: pointer;
      }
    }
  }

  .letter-body {
    .letter-body-box {
      margin-top: 30px;
      padding-left: 50px;
      position: relative;
      min-height: 30px;
      .left-letter-section {
        position: absolute;
        width: 50px;
        left: 0px;
        top: 0px;
        height: 100%;
        border-right: 1px #aaa solid;
        text-transform: uppercase;
        font-weight: 300;
        font-size: 1.3rem;
        text-align: left !important;
      }
      .brand-box {
        width: 100%;
        line-height: 40px;
        height: 40px;
        background-color: #f0f0f0;
        //border: 1px #aaa solid;
        padding-left: 15px;
        cursor: pointer;
        &:hover {
          background-color: #111;
          color: #fff;
        }
      }
      .letter-body {
      }
    }
  }
}
</style>
