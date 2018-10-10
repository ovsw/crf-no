<template>
  <div>
    <div class="hpVideoBg" style="padding:0 10px;position:relative;">
      <video autoplay="autoplay" loop="loop" poster="https://crfvideo-ac97.kxcdn.com/camp-roosevelt-firebird-intro-video-poster.jpg" style="background-image: url('https://crfvideo-ac97.kxcdn.com/camp-roosevelt-firebird-intro-video-cover.jpg'); width:100%">
        <source src="https://crfvideo-ac97.kxcdn.com/camp-roosevelt-firebird-intro-video.webm" data-wf-ignore="">
        <source src="https://crfvideo-ac97.kxcdn.com/camp-roosevelt-firebird-intro-video.mp4" data-wf-ignore="">
        <source src="https://crfvideo-ac97.kxcdn.com/camp-roosevelt-firebird-intro-video.ogv" data-wf-ignore="">
      </video>
      <a href="https://www.youtube.com/embed/_2PDV-OWwP8?rel=0&amp;showinfo=0" data-fancybox class="fullVideoButton mainVideo">See Full Video</a>
      
    </div>
    <!-- /.hpVideoBg -->

    <div class="homepage-content-wrapper">

      <h1 class="home-main-heading" v-html="pf.headline" />

      <div class="homepage-intro-para" v-html="pf.homepage_rich_text" />
      <!-- /.homepage-intro-para -->

      <div v-html="pf.homepage_content_matrix" />

    </div>
    <!--end topContentWrapper-->

    <div class="hpBottomSection">

      <h2 class="facebook-feed-heading">Fresh from Facebook</h2>

      <div class="facebook-posts-wrapper" v-html="pf.news" />
    </div>
    <!--end hpBottomSection-->
  </div>
</template>

<script>
const axios = require("axios")

export default {
  name: "Home",
  components: {},
  asyncData(context) {
    return axios
      .get(process.env.apiUrl + "/")
      .then(res => {
        return {
          pf: res.data.fields
        }
      })
      .catch(err => context.error(err))
  }
}
</script>

<style>
</style>
