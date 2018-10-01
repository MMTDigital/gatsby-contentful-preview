module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID || `i1ri1xca7nyi`,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN || `ed373798af5ca06c3e78bed215777635f85a489f356ab830eadccb95dd1e339c`,
        host: process.env.GATSBY_CONTENTFUL_HOST || undefined
      }
    }
  ],
}
