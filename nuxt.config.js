const pkg = require("./package")
const webpack = require("webpack")

module.exports = {
  mode: "universal",
  env: {
    apiUrl: "https://dev3.ovswebsites.com/api/pages",
    rootUrl: "https://dev3.ovswebsites.com"
    // mainNav: [
    //   {
    //     title: "About Camp",
    //     path: "/learn-about-camp/",
    //     children: [
    //       {
    //         title: "About Us",
    //         path: "/learn-about-camp/about-us/",
    //         children: [
    //           {
    //             title: "Our Director",
    //             path: "/learn-about-camp/about-us/our-director/"
    //           },
    //           {
    //             title: "What Makes Us Special",
    //             path: "/learn-about-camp/about-us/what-makes-us-special/"
    //           },
    //           {
    //             title: "Location",
    //             path: "/learn-about-camp/about-us/location/"
    //           },
    //           {
    //             title: "Since 1918",
    //             path: "/learn-about-camp/about-us/since-1918/"
    //           }
    //         ]
    //       },
    //       {
    //         title: "Camp Staff",
    //         path: "/learn-about-camp/camp-staff/",
    //         children: [
    //           {
    //             title: "Camp Director",
    //             path: "/learn-about-camp/camp-staff/camp-director/"
    //           }
    //         ]
    //       },
    //       {
    //         title: "Camp Environment",
    //         path: "/learn-about-camp/camp-environment/"
    //       },
    //       {
    //         title: "Compassion and Trust",
    //         path: "/learn-about-camp/you-can-trust-us/"
    //       },
    //       { title: "FAQs", path: "/learn-about-camp/faqs/" }
    //     ]
    //   },
    //   { title: "New Campers", path: "/for-new-campers/" },
    //   { title: "Dates & Rates", path: "/dates-rates/" },
    //   { title: "Summer Job?", path: "/summer-job/" },
    //   { title: "Current Families", path: "/current-families/" },
    //   { title: "Contact", path: "/contact-us/" }
    // ]
    // ,mainNav: {
    //   "/learn-about-camp/": {
    //     title: "About Camp",
    //     children: [
    //       { title: "About Us", path: "/learn-about-camp/about-us/" },
    //       { title: "Camp Staff", path: "/learn-about-camp/camp-staff/" },
    //       {
    //         title: "Camp Environment",
    //         path: "/learn-about-camp/camp-environment/"
    //       },
    //       {
    //         title: "Compassion and Trust",
    //         path: "/learn-about-camp/you-can-trust-us/"
    //       },
    //       { title: "FAQs", path: "/learn-about-camp/faqs/" }
    //     ]
    //   },
  },
  router: {
    linkActiveClass: "active"
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "/css/main.css" },
      // {
      //   rel: "stylesheet",
      //   type: "text/css",
      //   href: "/css/flexslider.css"
      // },
      // {
      //   rel: "stylesheet",
      //   type: "text/css",
      //   href: "/css/jquery.fancybox.css"
      // },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/sm-core-css.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/sm-clean.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Droid+Sans:400,700|Oswald:400|Fira+Sans:700"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css"
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/icons/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/icons/apple-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/icons/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/icons/apple-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/icons/apple-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/icons/apple-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/icons/apple-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/icons/apple-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/icons/apple-icon-180x180.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/icons/android-icon-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icons/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/icons/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/icons/favicon-16x16.png"
      }
    ],
    script: [
      // {
      //   src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
      // },
      // {
      //   src: "/js/plugins.js"
      // },
      // {
      //   src: "/js/plugins/jquery.smartmenus.min.js"
      // },
      // {
      //   src: "/js/jquery.flexslider-min.js"
      // },
      // {
      //   src: "/js/jquery.fancybox.pack.js"
      // },
      // {
      //   src: "/js/jquery.fancybox-media.js"
      // }
      // ,
      // {
      //   src: "/js/scripts.js"
      // }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: "white",
    height: "10px"
  },

  /*
  ** Global CSS
  */
  css: [
    // { src: "smartmenus/dist/css/sm-core-css.css", lang: "css" },
    // { src: "smartmenus/dist/css/sm-clean/sm-clean.css", lang: "css" }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/smartmenus.js", ssr: false },
    { src: "~/plugins/fancybox.js", ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios"
    // "@nuxtjs/router"
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery"
        // ...etc.
      })
    ],
    vendor: ["jquery", "smartmenus", "@fancyapps/fancybox"],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.entry.app.push("jquery", "smartmenus", "@fancyapps/fancybox")
      }
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
