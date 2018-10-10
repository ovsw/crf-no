<template>

  <div>
    <BasicPageContent :headline="pf.headline" :banner-image="pf.innerPageBanner" :main_content_matrix="pf.main_content_matrix" />
  </div>
</template>

<script>
import BasicPageContent from "~/components/BasicPageContent.vue"

const axios = require("axios")

export default {
  name: "InnerPage",
  layout: "leftcolumn",
  components: {
    BasicPageContent
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
