import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

const Seo = ({titlePage}: any) => {

    const data = useStaticQuery(graphql`
    query MyQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    return (
        <>
        <title>{titlePage} | {data.site.siteMetadata.title}</title>
        <meta name="description" content="Your description" />
        </>
    )
}

export default Seo