<template>
  <div class="container">
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>

  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {
        return { message: "Unknown error" }
      }
    }
  }
  //layout: "blog" // you can set a custom layout for the error page
}
</script>
