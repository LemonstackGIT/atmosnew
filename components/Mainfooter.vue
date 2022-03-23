<template>
  <footer>
    <v-container>
      <v-row>
        <v-col lg="3" md="3" cols="12">
          <div class="footer-section">
            <div class="header">
              Quick Link
            </div>
            <nuxt-link :to="menu.link" v-for="menu in menus" class="footer-link-box t2">
              {{ menu.name }}
            </nuxt-link>
          </div>
        </v-col>
        <v-col lg="3" md="3" cols="12">
          <div class="footer-section">
            <div class="header">
              Brands
            </div>
            <nuxt-link :to="brand.link" v-for="brand in brands" class="footer-link-box t2">
              {{ brand.name }}
            </nuxt-link>
          </div>
        </v-col>
        <v-col lg="3" md="3" cols="12">
          <div class="footer-section">
            <div class="header">
              Supports
            </div>
            <nuxt-link :to="support.link" v-for="support in supports" class="footer-link-box t2">
              {{ support.name }}
            </nuxt-link>
          </div>
        </v-col>
        <v-col lg="3" md="3" cols="12">
          <div class="footer-section">
            <div class="header">
              Contact
            </div>
            <div v-for="contact in contacts" class="footer-link-box t2">
              {{ contact.name }}
            </div>
          </div>
        </v-col>
      </v-row>
      <div class="footer">
        © atmos Bangkok. All Rights Reserved.
      </div>
    </v-container>
  </footer>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    brands: {
      get () {
        return this.$nuxt.$store.state.brands
      }
    },
    supports: {
      get () {
        return this.$nuxt.$store.state.supports
      }
    },
    contacts: {
      get () {
        return this.$nuxt.$store.state.contacts
      }
    },
  },
  data() {
    return {
      menus: [
        {
          name: 'New Arrival',
          name_th: 'สินค้าใหม่',
          link: '/new-arrival',
        },
        {
          name: 'Brands',
          name_th: 'แบรนด์',
          link: '/brand',
        },
        {
          name: 'Men',
          name_th: 'ผู้ชาย',
          link: '/category/men',
        },
        {
          name: 'Women',
          name_th: 'ผู้หญิง',
          link: '/category/women',
        },
        {
          name: 'Accessories',
          name_th: 'เครื่องประดับ',
          link: '/category/accessories',
        },
        {
          name: 'Sale',
          name_th: 'Sale',
          link: '/sale',
        },
        {
          name: 'Blogs',
          name_th: 'blog',
          link: '/blog',
        }
      ],
    };
  },
  methods: {
    viewRoute(link) {
      this.$router.push({
        path: link
      });
    }
  },
  watch: {},
  mounted() {},
  components: {}
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  background: #000;
  .footer-section {
    padding-left: 10px;
    padding-right: 10px;
    .header {
      color: #fff;
      padding-bottom: 15px;
      border-bottom: 1px #fff solid;
      margin-bottom: 20px;
      font-size: 1rem;
      text-transform: uppercase;
    }
    a {
      color: #fff;
    }
    .footer-link-box {
      width: 100%;
      display: block;
      margin-top: 10px;
      font-weight: 300;
      text-transform: uppercase;
      color: #fff;
      font-size: 0.8rem;
      &:hover {
        opacity: 0.6;
      }
    }
  }
  .footer {
    width: 100%;
    color: #fff;
    margin-top: 30px;
    padding-left: 10px;
    font-weight: 300;
    text-transform: uppercase;
  }
}
</style>
