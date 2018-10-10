import Vuex from "vuex"

const axios = require("axios")

const createStore = () => {
  return new Vuex.Store({
    state: {
      mainNav: []
    },
    mutations: {
      getNav(state, pwNav) {
        state.mainNav = pwNav
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(process.env.rootUrl + "/api/nav/")
          .then(res => {
            //console.log("server response", res)
            const mainNav = res.data
            vuexContext.commit("getNav", mainNav)
          })
          .catch(err => console.log(err))
      },
      getNav(vuexContext, pwNav) {
        vuexContext.commit("getNav", pwNav)
      }
    },
    getters: {
      mainNav(state) {
        return state.mainNav
      }
    }
  })
}

export default createStore
