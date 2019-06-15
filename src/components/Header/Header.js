// @flow
import React, { useState } from 'react';
import { Menu as MenuIcon } from '@material-ui/icons';

import Nav from './components/Nav';
import { HeaderStyled, MenuButtonStyled } from './Header.style';
import Link from '../Link';

type Props = {
    siteTitle: String,
};

const Header = ({ siteTitle }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <HeaderStyled>
            <h1>
                <Link to="/">{siteTitle}</Link>
            </h1>
            <MenuButtonStyled onClick={toggleMenu}>
                <MenuIcon />
            </MenuButtonStyled>
            <Nav isOpen={isOpen} />
        </HeaderStyled>
    );
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
