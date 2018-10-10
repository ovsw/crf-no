<template>
  <div>
    <div class="contentTwoCollumns">
      <h1>Special Page</h1>
    </div>
  </div>
</template>

<script>
import SideNav from "~/components/SideNav.vue"
const axios = require("axios")

export default {
  name: "BasicPage",
  components: {
    SideNav
  },
  data: () => ({
    baseUrl: process.env.rootUrl,
    pf: {}
  })
}
</script>

<style scoped>
</style>
