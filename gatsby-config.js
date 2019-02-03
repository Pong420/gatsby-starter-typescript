module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
    description: ``,
    author: `@author`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `@import '~scss/index.scss';`
      }
    },
    {
      resolve: 'gatsby-plugin-resolve-src',
      options: {
        addSassLoader: false
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: '',
    //     short_name: '',
    //     icons: [
    //       {
    //         src: 'icons/android-chrome-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png'
    //       },
    //       {
    //         src: 'icons/android-chrome-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png'
    //       }
    //     ],
    //     icon: 'src/assets/icon.png',
    //     start_url: './index.html',
    //     display: 'standalone',
    //     background_color: '',
    //     theme_color: ''
    //   }
    // },
    'gatsby-plugin-offline'
  ]
};
