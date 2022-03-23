<template>
  <div class="productpage-view">
    <v-container>
      <v-row>
        <v-col lg="7" md="7" cols="12" xs="12">
          <div class="imageslider">
            <VueSlickCarousel v-bind="settings">
              <div class="image-box"><img src="/product/1.webp"></div>
              <div class="image-box"><img src="/product/2.webp"></div>
              <div class="image-box"><img src="/product/3.webp"></div>
              <div class="image-box"><img src="/product/4.webp"></div>
              <div class="image-box"><img src="/product/5.webp"></div>
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
        </v-col>
        <v-col lg="5" md="5" cols="12" xs="12">
          <div class="product-bread">
            <div class="product-bread-box">
              Homepage
            </div>
            <div class="product-bread-arrow" @click="viewRoute('/')">
              <i class="las la-angle-right"></i>
            </div>
            <div class="product-bread-box">
              Collection
            </div>
            <div class="product-bread-arrow" @click="viewRoute('/collection')">
              <i class="las la-angle-right"></i>
            </div>
            <div class="product-bread-box active">
              NIKE LEBRON IX
            </div>
          </div>
          <div class="product-name-con">
            <div class="brand">
              NIKE
            </div>
            <div class="name">
              NIKE LEBRON IX
            </div>
            <div class="price">
              ฿ 6,250.00
            </div>
          </div>
          <div class="detail">
            In the beginning there was just basketball. Well, maybe. Either way, this "Big Bang" release (originally dropped during 2012's All-Star Weekend) brings back a coveted classic not seen anywhere else in the galaxy. An explosive orange upper is sure to turn heads while the glow-in-the-dark outsole finishes off your cosmic altering style.
            <br><br>
            <b>Big Bang</b><br>
            Nodding to the city where the 2012 All-Star Weekend took place, which is home to one of America's space centers, the design looks into the universe for inspiration. From the glow-in-the-dark outsole to the starlight speckled midsole, it lets you leave your mark.
            Cushioned Comfort<br>
            Snappy and responsive, Zoom Air cushioning helps provide a quick-off-the-ground sensation.<br><br>
            <b>Style for the Rest of Time</b><br>
            A rich mixture of materials including engineered textile with a woven appearance add structure, durability and off-court style.
            Flywire cables integrate with the laces to secure your midfoot.
            Foam in the midsole provides lasting comfort.
            Rubber outsole gives you durable traction.
          </div>
          <div class="size-con">
            <div class="product-mintitle">
              Size
            </div>
            <div class="size-box t1"
              v-for="size in sizes"
              @click="setSize(size)"
              :class="{ 'active': sizeSelect == size.name, 'outofstock': size.outofstock }">
              {{ size.name }}
            </div>
          </div>

          <div class="button-con">
            <div class="text-qty">
              QTY
            </div>
            <div class="qty-box">
              <div class="qtyminus" @click="qtyMinus()">
                <i class="las la-minus"></i>
              </div>
              <div class="qtyplus" @click="qtyPlus()">
                <i class="las la-plus"></i>
              </div>
              <input type="text" v-model="quantity">
            </div>
            <div class="button1 t2">
              Add to Cart
            </div>
            <div class="button2 t2">
              <i class="lar la-heart"></i>
              Add to Wishlist
            </div>
          </div>

        </v-col>
      </v-row>
      <div class="relate-con">
        <div class="header">
          YOU MAY ALSO LIKE
        </div>
        <v-row>
          <v-col lg="3" md="3" sm="6" cols="6" xs="6">
            <Productbox type="1" />
          </v-col>
          <v-col lg="3" md="3" sm="6" cols="6" xs="6">
            <Productbox type="2" />
          </v-col>
          <v-col lg="3" md="3" sm="6" cols="6" xs="6">
            <Productbox type="3" />
          </v-col>
          <v-col lg="3" md="3" sm="6" cols="6" xs="6">
            <Productbox type="6" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import Productbox from "~/components/Productbox.vue";
export default {
  components: {
    VueSlickCarousel,
    Productbox
  },
  data () {
    return {
      quantity: 1,
      pageslug: this.$route.params.slug,
      sizeSelect: '',
      sizes: [
        { name: 'UK 4' },
        { name: 'UK 4.5' },
        { name: 'UK 5', outofstock: true },
        { name: 'UK 5.5' },
        { name: 'UK 6', outofstock: true },
        { name: 'UK 6.5' },
        { name: 'UK 7' },
        { name: 'UK 7.5', outofstock: true },
        { name: 'UK 8' },
        { name: 'UK 8.5', outofstock: true },
      ],
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
    }
  },
  computed: {
  },
  watch: {
    quantity () {
      if (this.quantity) {
        this.quantity = parseInt(this.quantity)
        if (Number.isInteger(this.quantity)) {
          if (this.quantity < 1) {
            this.quantity = 1
          }
        } else {
          this.quantity = 1
        }
      }
    }
  },
  mounted () {
  },
  methods: {
    qtyPlus () {
      this.quantity = this.quantity + 1
    },
    qtyMinus () {
      this.quantity = this.quantity - 1
    },
    setSize (size) {
      if (size.outofstock != true) {
        this.sizeSelect = size.name
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
.product-bread {
  @media (max-width: $mobile-size) {
    position: absolute;
    top: 90px;
    left: 0px;
    padding-left: 15px;
    background-color: #fff;
    width: 100%;
  }
}
.productpage-view {
  width: 100%;
  padding-top: 30px;
  padding-bottom: 60px;
  min-height: 100vh;
  .imageslider {
    width: 100%;
    position: relative;
    .arrowpage-left {
      width: 50px;
      height: 50px;
      position: absolute;
      left: 20px;
      bottom: 0%;
      margin-top: -25px;
      z-index: 1000;
      border-radius: 100px;
      font-size: 2rem;
      color: $primary;
      cursor: pointer;
    }
    .arrowpage-right {
      width: 50px;
      height: 50px;
      position: absolute;
      right: 20px;
      bottom: 0%;
      margin-top: -25px;
      z-index: 1000;
      border-radius: 100px;
      font-size: 2rem;
      color: $primary;
      cursor: pointer;
    }
    .image-box {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .product-bread {
    border-bottom: 1px #aaa solid;
    padding-bottom: 15px;
    margin-bottom: 10px;
    .product-bread-box {
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
      &.active {
        font-weight: 500;
        cursor: normal;
      }
    }
    .product-bread-arrow {
      padding-left: 10px;
      padding-right: 10px;
      display: inline-block;
      vertical-align: middle;
      color: $primary;
    }
  }
  .product-name-con {
    width: 100%;
    margin-top: 20px;
    .brand {
      font-size: 1.2rem;
      font-weight: 500;
      color: $primary;
      text-align: center;
    }
    .name {
      font-size: 1.4rem;
      font-weight: 300;
      text-align: center;
    }
    .price {
      font-size: 1.1rem;
      font-weight: 300;
      text-align: center;
    }
  }
  .detail {
    margin-top: 20px;
    @media (max-width: $mobile-size) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  .size-con {
    width: 100%;
    margin-top: 10px;
    @media (max-width: $mobile-size) {
      padding-left: 15px;
      padding-right: 15px;
    }
    .size-box {
      height: 40px;
      line-height: 38px;
      padding-left: 10px;
      padding-right: 10px;
      border: 1px #aaa solid;
      display: inline-block;
      margin-bottom: 8px;
      margin-right: 8px;
      cursor: pointer;
      &.active {
        background-color: $primary;
        color: #fff;
        border: 1px $primary solid;
      }
      &.outofstock {
        opacity: 0.5;
      }
    }
  }
  .button-con {
    width: 100%;
    margin-top: 30px;
    @media (max-width: $mobile-size) {
      padding-right: 0px;
    }
    .button1 {
      height: 41px;
      padding-left: 20px;
      padding-right: 20px;
      background-color: #eee;
      text-align: center;
      line-height: 40px;
      font-size: 0.9rem;
      display: inline-block;
      margin-left: 10px;
      cursor: pointer;
      text-transform: uppercase;
      @media (max-width: $mobile-size) {
        display: block;
        margin-top: 10px;
        height: 51px;
        line-height: 50px;
      }
      &:hover {
        background-color: #111;
        color: #fff;
      }
    }
    .button2 {
      height: 41px;
      padding-left: 20px;
      padding-right: 20px;
      background-color: $primary;
      color: #fff;
      text-align: center;
      line-height: 40px;
      font-size: 0.9rem;
      display: inline-block;
      margin-left: 10px;
      cursor: pointer;
      text-transform: uppercase;
      @media (max-width: $mobile-size) {
        display: block;
        margin-top: 10px;
        height: 51px;
        line-height: 50px;
      }
      &:hover {
        opacity: 0.7;
      }
    }
    .text-qty {
      display: inline-block;
      font-weight: 500;
      font-size: 0.8rem;
      margin-right: 7px;
      @media (max-width: $mobile-size) {
        margin-left: 10px;
      }
    }
    .qty-box {
      display: inline-block;
      position: relative;
      padding-right: 15px;
      @media (max-width: $mobile-size) {
        display: block;
        padding-right: 0px;
        padding-left: 10px;
      }
      input {
        height: 40px;
        line-height: 38px;
        width: 70px;
        border: 1px #aaa solid;
        text-align: center;
        @media (max-width: $mobile-size) {
          width: 100%;
        }
      }
      .qtyplus {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: $primary;
        color: #fff;
        top: 0px;
        right: 0px;
        cursor: pointer;
        line-height: 20px;
        text-align: center;
        @media (max-width: $mobile-size) {
          width: 30px;
          height: 30px;
          top: 0px;
          right: 5px;
          line-height: 30px;
          border-radius: 100px;
          top: 5px;
        }
        &:hover {
          background-color: #333;
          color: #fff;
        }
      }
      .qtyminus {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: $primary;
        color: #fff;
        top: 20px;
        right: 0px;
        cursor: pointer;
        line-height: 20px;
        text-align: center;
        @media (max-width: $mobile-size) {
          width: 30px;
          height: 30px;
          top: 0px;
          right: 40px;
          line-height: 30px;
          border-radius: 100px;
          top: 5px;
        }
        &:hover {
          background-color: #333;
          color: #fff;
        }
      }
    }
  }
}
.product-mintitle {
  font-size: 1rem;
  margin-top: 25px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px #aaa solid;
}
.relate-con {
  width: 100%;
  padding-top: 50px;
  .header {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 1.5px;
  }
}
</style>
