require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID || `i1ri1xca7nyi`,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN || `9a393f9a9c5d6901cf8df1642e23654f5a3f10c469e6e1cd9cfe8583a2fc5c52`,
        host: process.env.GATSBY_CONTENTFUL_HOST || undefined
      }
    }
  ]
}
