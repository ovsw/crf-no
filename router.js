import Vue from "vue"
import Router from "vue-router"

import Home from "~/templates/index"
import InnerPage from "~/templates/inner-page"
import Special from "~/templates/special"

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        component: Home
      },
      {
        path: "/special",
        component: Special
      },
      {
        path: "/:mainPageSlug",
        component: InnerPage
      },
      {
        path: "/:mainPageSlug/:childPageSlug",
        component: InnerPage
      },
      {
        path: "/:mainPageSlug/:childPageSlug/:grandChildPageSlug",
        component: InnerPage
      }
    ]
  })
}
