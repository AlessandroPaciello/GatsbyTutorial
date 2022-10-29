
import {Link} from 'gatsby';
import * as React from 'react';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.scss'

const Layout = ({pageTitle, children }: any) => {

    return (
        <div className={container}>
          <nav>
            <ul className={navLinks}>
              <li  className={navLinkItem}><Link to="/">Home</Link></li>
              <li className={navLinkText}><Link to="/about">About</Link></li>
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