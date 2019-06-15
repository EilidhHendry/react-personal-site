// @flow
import React, { type Node } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../Header';

type Props = {
    children: Node,
};

const Layout = ({ children }: Props) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <Header siteTitle={data.site.siteMetadata.title} />
                <div>
                    <main>{children}</main>
                    <footer>
                        © {new Date().getFullYear()}, Built with
                        {` `}
                        <a href="https://www.gatsbyjs.org">Gatsby</a>
                    </footer>
                </div>
            </>
        )}
    />
);

export default Layout;
