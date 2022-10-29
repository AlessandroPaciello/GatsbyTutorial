import { HeadFC } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import {Link, useStaticQuery, graphql} from 'gatsby';

export const query = graphql`
query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
        nodes {
          name
        }
      }
  }
`

const BlogPage = ({data}: any) => {

    console.log(data);
    return (
        <Layout pageTitle="Blog">
            <p>Benvenuto nel mio Blog</p>
            <ul>
            {
                data.allFile.nodes.map( (node: any) => {
                    return <li key={node.name}>{node.name}</li>
                })
            }
            </ul>
        </Layout>
    )
}

export default BlogPage;

export const Head: HeadFC = () => <Seo titlePage="Blog"></Seo>