// @flow
import React, { type Node, Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import Header from '../Header';
import { GlobalStyle } from './Layout.style';
import theme from '../../theme/default';

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
            <ThemeProvider theme={theme}>
                <Fragment>
                    <GlobalStyle />
                    <Header siteTitle={data.site.siteMetadata.title} />
                    <div>
                        <main>{children}</main>
                        <footer>
                            © {new Date().getFullYear()}, Built with
                            {` `}
                            <a href="https://www.gatsbyjs.org">Gatsby</a>
                        </footer>
                    </div>
                </Fragment>
            </ThemeProvider>
        )}
    />
);

export default Layout;
