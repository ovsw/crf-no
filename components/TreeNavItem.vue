<template>
  <nuxt-link :to="model.path" :class="[isFolder ? 'has_children' : '']" tag="li" active-class="active">
    <a>{{ model.title }}</a>
    <span class="arrow" />
    <ul v-if="model.children" class="secondMenu">
      <tree-nav-item v-for="(model, index) in model.children" :key="index" :model="model" />
    </ul>
  </nuxt-link>
</template>

<script>
export default {
  name: "TreeNavItem",
  props: {
    model: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data: function() {
    return {
      level: false
    }
  },
  computed: {
    isFolder: function() {
      return this.model.children && this.model.children.length
    }
  }
}
</script>
