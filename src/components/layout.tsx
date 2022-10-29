
import {Link, useStaticQuery, graphql} from 'gatsby';
import * as React from 'react';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.scss'

const Layout = ({ pageTitle, children }: any) => {

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
        <div className={container}>
          <header className={siteTitle}>
              <h1>{data.site.siteMetadata.title}</h1>
            </header>
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}><Link to="/">Home</Link></li>
              <li className={navLinkItem}><Link to="/about">About</Link></li>
              <li className={navLinkItem}><Link to="/blog">Blog</Link></li>
            </ul>
          </nav>
          <main>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
          </main>
        </div>
      )
}

export default Layout;