<template>
  <div>
    <div class="contentTwoCollumns">
      <side-nav />

      <BasicPageContent :main_content_matrix="pf.main_content_matrix" :headline="pf.headline" />

      <side-bar-ql />

    </div>
  </div>
</template>

<script>
import BasicPageContent from "~/components/BasicPageContent.vue"
import SideNav from "~/components/SideNav.vue"
import SideBarQl from "~/components/SideBarQl.vue"

const axios = require("axios")

export default {
  name: "InnerPage",
  components: {
    BasicPageContent,
    SideNav,
    SideBarQl
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
  })
}
</script>

<style scoped>
</style>
