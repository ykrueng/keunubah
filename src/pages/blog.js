import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Tulehsan">
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>{node.name}</li>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {ext: {eq: ".mdx"}}) {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="Tulehsan" />

export default BlogPage