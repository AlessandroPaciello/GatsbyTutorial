import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'


export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY", locale: "it")
      }
    }
  }
`

const BlogPost = ({data, children}: any ) => { 
    console.log(data, children)
    return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const Head = ({data}: any) => <Seo titlePage={data.mdx.frontmatter.title} />

export default BlogPost