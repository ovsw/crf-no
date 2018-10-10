<template>
  <div class="contentRight">
    <div class="headerImageWrapper"><img :src="baseUrl+'/site/assets/files/2060/image00.-banner_size.jpg'" class="photo" alt=""></div>
    <div class="mainContentInner">
      <h1>{{ headline }}</h1>
      <div v-html="main_content_matrix" />
    </div>
  </div>

</template>

<script>
export default {
  props: {
    headline: {
      type: String,
      default: ""
    },
    main_content_matrix: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      baseUrl: process.env.rootUrl
    }
  }
}
</script>

<style scoped>
</style>
