<template>
  <div class="categorypage-con">
    <div class="category-name">
      <div class="resfilter t2"
        :class="{ 'active': resfilter }"
        @click="resfilter = !resfilter">
        <i class="las la-sliders-h t2"></i>
      </div>
      {{ pageName }}
    </div>
    <v-container>
      <v-row>
        <v-col lg="3" md="3" cols="12" v-if="resfilter == true">
          <div class="filter-mainheader">
            Filter / Sort
          </div>
          <div class="filter-con" style="padding: 0px; margin: 0px;" v-if="false">
            <div class="filter-header">
              Sort
            </div>
            <v-select solo v-model="sort" :items="sortBys" style="padding: 0px; margin: 0px;"></v-select>
          </div>
          <div class="filter-con">
            <div class="filter-header" @click="brandexpand = !brandexpand" :class="{ 'active': brandexpand }">
              Brand
              <div class="arrow t2">
                <i class="las la-angle-down"></i>
              </div>
            </div>
            <transition name="fade">
              <div v-if="brandexpand">
                <v-row>
                  <v-col class="nospace" lg="6" md="12" cols="12" v-for="brand in brands">
                    <div class="filter-checkbox"
                      @click="brand.check = !brand.check"
                      :class="{ 'active': brand.check }">
                      <div class="checkbox">
                        <div class="checkbox-inner t3"></div>
                      </div>
                      <div class="text">
                        {{ brand.name }}
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </transition>
          </div>
          <div class="filter-con">
            <div class="filter-header" @click="sizeexpand = !sizeexpand" :class="{ 'active': sizeexpand }">
              Size
              <div class="arrow t2">
                <i class="las la-angle-down"></i>
              </div>
            </div>
            <transition name="fade">
              <div v-if="sizeexpand">
                <div class="size-box t2"
                  v-for="size in sizes"
                  @click="size.check = !size.check"
                  :class="{ 'active': size.check }">
                  {{ size.name }}
                </div>
              </div>
            </transition>
          </div>
          <div class="filter-con">
            <div class="filter-header" @click="colorexpand = !colorexpand" :class="{ 'active': colorexpand }">
              Color
              <div class="arrow t2">
                <i class="las la-angle-down"></i>
              </div>
            </div>
            <transition name="fade">
              <div v-if="colorexpand">
                <v-row>
                  <v-col class="nospace" lg="6" md="12" cols="12" v-for="color in colors">
                    <div class="filter-checkbox"
                      @click="color.check = !color.check"
                      :class="{ 'active': color.check }">
                      <div class="checkbox">
                        <div class="checkbox-inner t3"></div>
                      </div>
                      <div class="text">
                        {{ color.name }}
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </transition>
          </div>
        </v-col>
        <v-col lg="9" md="9" cols="12">
          <v-row>
            <v-col lg="3" md="3" cols="6" v-for="n in 20">
              <Productbox :type="typeselect" />
            </v-col>
          </v-row>
          <div class="pagination-con">
            <div class="arrow-box">
              <i class="las la-angle-left"></i>
            </div>
            <div class="pagination-box" v-for="n in 4" :class="{ 'active': n == 1 }">
              {{ n }}
            </div>
            <div class="arrow-box">
              <i class="las la-angle-right"></i>
            </div>
          </div>
        </v-col>
      </v-row>
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
      pageslug: this.$route.params.slug,
      resfilter: true,
      brandexpand: true,
      colorexpand: true,
      sizeexpand: true,
      sort: 'a-z',
      sortBys: [
        { text: 'A-Z', value: 'a-z' },
        { text: 'Z-A', value: 'z-a' },
      ],
      sizes: [
        { name: 'UK 4', check: false },
        { name: 'UK 4.5', check: false },
        { name: 'UK 5', check: false },
        { name: 'UK 5.5', check: false },
        { name: 'UK 6', check: false },
        { name: 'UK 6.5', check: false },
        { name: 'UK 7', check: false },
        { name: 'UK 7.5', check: false },
        { name: 'UK 8', check: false },
        { name: 'UK 8.5', check: false },
      ],
      colors: [
        { name: 'Beige', check: false },
        { name: 'Brown', check: false },
        { name: 'Cream', check: false },
        { name: 'Green', check: false },
        { name: 'Multicolor', check: false },
        { name: 'Navy', check: false },
        { name: 'Orange', check: false },
        { name: 'Pink', check: false },
      ],
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
    pageName () {
      let name = this.pageslug.replace("-", " ");
      return name
    },
    typeselect () {
      if (this.pageslug == 'new-arrival') {
        return 1
      } else if (this.pageslug == 'women') {
        return 2
      } else if (this.pageslug == 'men') {
        return 3
      } else if (this.pageslug == 'accessories') {
        return 5
      } else if (this.pageslug == 'sale') {
        return 6
      } else {
        return 4
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
        this.resfilter = false
      } else {
        this.resfilter = true
      }
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
.categorypage-con {
  background-color: #fff;
  min-height: 100vh;
  padding-bottom: 20px;
  @media (max-width: $mobile-size) {
    padding-left: 10px;
    padding-right: 10px;
  }
  .filter-mainheader {
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 15px;
    border-bottom: 1px $primary solid;
    padding-bottom: 10px;
    @media (max-width: $mobile-size) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  .category-name {
    padding-top: 25px;
    padding-bottom: 25px;
    text-align: center;
    border-bottom: 1px #ccc solid;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.5px;
    font-size: 1.1rem;
    position: relative;
    .resfilter {
      position: absolute;
      left: 10px;
      font-size: 1.4rem;
      height: 40px;
      width: 40px;
      text-align: center;
      line-height: 40px;
      top: 50%;
      margin-top: -20px;
      display: none;
      @media (max-width: $mobile-size) {
        display: block;
      }
      &.active {
        background-color: $primary;
        color: #fff;
        i {
          -ms-transform: rotate(90deg);
          transform: rotate(90deg);
        }
      }
    }
  }
  .filter-con {
    margin-top: 30px;
    .filter-header {
      font-size: 0.9rem;
      text-transform: uppercase;
      color: $primary;
      position: relative;
      cursor: pointer;
      border-bottom: 1px #aaa solid;
      padding-bottom: 10px;
      margin-bottom: 20px;
      .arrow {
        position: absolute;
        font-size: 1rem;
        right: 0px;
        height: 30px;
        line-height: 30px;
        top: 50%;
        margin-top: -20px;
      }
      &.active {
        .arrow {
          transform: rotate(180deg);
          -ms-transform: rotate(180deg);
        }
      }
    }
    .size-box {
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      padding-right: 10px;
      border: 1px #ddd solid;
      margin-right: 5px;
      margin-bottom: 5px;
      display: inline-block;
      color: #888;
      cursor: pointer;
      &.active {
        background-color: $primary;
        border: 1px $primary solid;
        color: #fff;
      }
    }
    .filter-checkbox {
      padding-left: 25px;
      position: relative;
      margin-top: 15px;
      cursor: pointer;
      .checkbox {
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 4px;
        border: 1px #aaa solid;
        left: 0px;
        top: 50%;
        margin-top: -9px;
        .checkbox-inner {
          background-color: transparent;
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 3px;
          top: 50%;
          margin-top: -6px;
          left: 50%;
          margin-left: -6px;
        }
      }
      &.active {
        .checkbox-inner {
          background-color: $primary;
        }
      }
    }
  }
}

.nospace {
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
