<template>
  <div>
    <div class="contentTwoCollumns">
      <div class="menuBgLeft contentLeft">
        <div class="menuBgRight">
          <div id="menuDropdown">
            <span>Select a page...</span>
          </div>
          <ul id="leftMenu">

            <tree-nav-item v-for="item in subNav" :model="item" :key="item.title" />
            <!-- <nuxt-link v-for="item in subNav" :key="item.title" :to="item.path" tag="li">
              <a>{{ item.title }}</a>
            </nuxt-link> -->
          </ul>
        </div>
      </div>

      <BasicPageContent :main_content_matrix="pf.main_content_matrix" :headline="pf.headline" />

      <div class="contentLeft">
        <div class="boxWrapperInner">
          <div class="videoBoxInner">
            <a href="https://www.youtube.com/watch?v=_2PDV-OWwP8&amp;autoplay=1&amp;rel=0" class="mainVideo"> <img id="videoBackgroundInner" :src="baseUrl+'/site/templates/images/video_bg.png'" alt=""> <img id="movieFilmInner" :src="baseUrl+'/site/templates/images/movieFilm.png'" alt="">
              <span>Watch Our Video</span>
            </a>
          </div>
          <ul class="imageBoxWrapperInner">
            <li class="imageBoxleftInner">
              <a href="https://www.camprooseveltfirebird.com/learn-about-camp/you-can-trust-us/helping-kids-grow/"> <img id="campDayInner" :src="baseUrl+ '/site/templates/images/helping-kids-grow.png'" alt="Growing at Camp Roosevelt-Firebird">
                <span>Helping Kids Grow</span>
              </a>
            </li>
            <li class="imageBoxcenterInner">
              <a href="/learn-about-camp/camp-environment/"> <img id="interactiveMapInner" :src="baseUrl+ '/site/templates/images/camp-environment.png'" alt="Fun Environment at Camp Roosevelt-Firebird">
                <span>Camp Environment</span>
              </a>
            </li>
            <li class="imageBoxrightInner">
              <a href="/fullscreen-gallery/" target="_blank"> <img id="photoGalleryInner" :src="baseUrl+ '/site/templates/images/photoGaleryInner.png'" alt="Gallery Button">
                <span>View our Photo Gallery</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicPageContent from "~/components/BasicPageContent.vue"
import TreeNavItem from "~/components/TreeNavItem.vue"

const axios = require("axios")

export default {
  name: "InnerPage",
  components: {
    BasicPageContent,
    TreeNavItem
  },
  asyncData(context) {
    return axios
      .get(process.env.apiUrl + context.route.path)
      .then(res => {
        return { pf: res.data.fields }
      })
      .catch(e => {
        context.error({ statusCode: 404, message: "Page not found" })
      })
  },
  data: () => ({
    baseUrl: process.env.rootUrl
  }),
  computed: {
    mainNav() {
      return this.$store.getters.mainNav
    },
    subNav() {
      var currentPage = this.mainNav.find(
        route => route.path === "/" + this.$route.params.section + "/"
      )
      if (currentPage) {
        //console.log("currentpage:", currentPage)
        return currentPage.children
      } else {
        return undefined
      }
    }
  }
}
</script>

<style scoped>
</style>
