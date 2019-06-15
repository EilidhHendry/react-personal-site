// @flow
import { Link } from 'gatsby';
import React from 'react';

type Props = {
    siteTitle: String,
};

const Header = ({ siteTitle }: Props) => (
    <header>
        <div>
            <h1>
                <Link to="/">{siteTitle}</Link>
            </h1>
        </div>
    </header>
);

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
