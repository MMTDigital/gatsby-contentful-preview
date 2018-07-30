import React from 'react'
import { graphql } from 'gatsby'

const GeneralPage = ({ data }) => {
  const { title, content } = data.contentfulPage

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
    </div>
  )
}

export const query = graphql`
  query pageQuery($slug: String) {
    contentfulPage(slug: { eq: $slug }) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default GeneralPage
