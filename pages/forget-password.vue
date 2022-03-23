<template>
  <div class="login-con">
    <v-container>
      <h1 class="title">
        Forget Password
      </h1>
      <v-row>
        <v-col lg="3"></v-col>
        <v-col lg="6">
          <div class="content-login">
            Please enter your email address below to receive a password reset link.
          </div>
          <div class="input-box">
            <label>
              Email <span class="redtext">*</span>
            </label>
            <input type="text" placeholder="Email or Username">
          </div>
          <div class="button-con">
            <nuxt-link to="/login" class="button1 t2">
              Back to Login
            </nuxt-link>
            <nuxt-link to="/" class="button2 t2">
              Send
            </nuxt-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
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
.login-con {
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  min-height: 100vh;
  .title {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 1px #eee solid;
  }
  .text-list {
    padding-left: 10px;
    border-left: 1px $primary solid;
    margin-top: 15px;
  }
  .content-login {
    font-size: 1rem;
    b {
      display: block;
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
  }
  .input-box {
    width: 100%;
    margin-top: 20px;
    label {
      font-size: 1rem;
      display: block;
      .redtext {
        color: red;
      }
    }
    input {
      width: 100%;
      outline: none;
      border: 1px #bbb solid;
      height: 45px;
      line-height: 43px;
      padding-left: 20px;
      margin-top: 10px;
    }
  }
  .button-con {
    text-align: center;
    margin-top: 20px;
    .button1 {
      display: inline-block;
      height: 45px;
      line-height: 45px;
      background-color: #eee;
      padding-left: 20px;
      padding-right: 20px;
      text-align: center;
      color: #000;
      text-transform: uppercase;
      &:hover {
        background-color: #111;
        color: #fff;
      }
    }
    .button2 {
      display: inline-block;
      height: 45px;
      line-height: 45px;
      background-color: $primary;
      padding-left: 30px;
      padding-right: 30px;
      color: #fff;
      text-transform: uppercase;
      margin-left: 10px;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .forget-box {
    text-align: center;
    margin-top: 10px;
  }
}
</style>
