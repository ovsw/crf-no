<template>
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
</template>

<script>
import TreeNavItem from "~/components/TreeNavItem.vue"

export default {
  name: "SideNav",
  components: {
    TreeNavItem
  },
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
