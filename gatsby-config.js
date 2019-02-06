module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
    description: ``,
    author: `@author`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
    `gatsby-plugin-tslint`
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: '',
    //     short_name: '',
    //     icon: 'src/assets/icon.png',
    //     start_url: './index.html',
    //     display: 'standalone',
    //     background_color: '',
    //     theme_color: ''
    //   }
    // },
    // 'gatsby-plugin-offline'
  ]
};
