module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
    description: ``,
    author: `@author`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `@import './src/scss/index.scss';`,
        implementation: require('sass')
      }
    },
    {
      resolve: 'gatsby-plugin-resolve-src',
      options: {
        addSassLoader: false
      }
    }
    //
  ]
};
