<template>
  <div class="contentLeft">

    <div class="boxWrapperInner">

      <div class="videoBoxInner">
        <a data-fancybox href="https://www.youtube.com/watch?v=_2PDV-OWwP8&amp;autoplay=1&amp;rel=0">
          <img id="videoBackgroundInner" :src="baseUrl+'/site/templates/images/video_bg.png'" alt=""> <img id="movieFilmInner" :src="baseUrl+'/site/templates/images/movieFilm.png'" alt="">
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
</template>

<script>
export default {
  name: "SideBarQl",
  data: () => ({
    baseUrl: process.env.rootUrl
  })
}
</script>

<style scoped>
</style>
