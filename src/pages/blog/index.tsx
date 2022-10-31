import { HeadFC, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMdx {
            nodes {
                frontmatter {
                date(formatString: "MMMM D, YYYY", locale: "it-IT")
                title
                slug
                }
                excerpt
                id
            }
            }
        }
        `)

    console.log(data)
    return (
        <Layout pageTitle="Blog">
            <p>Benvenuto nel mio Blog</p>
            {
                data.allMdx.nodes.map( (node: any) => {
                    return  <article key={node.id}>
                                <h2><Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link></h2>
                                <p>{node.frontmatter.date}</p>
                                <p>{node.excerpt}</p>
                            </article>
                })
            }
        </Layout>
    )
}

export default BlogPage;

export const Head: HeadFC = () => <Seo titlePage="Blog"></Seo>