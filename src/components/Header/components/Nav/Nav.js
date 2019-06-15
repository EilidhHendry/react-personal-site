// @flow
import React from 'react';
import { Link } from 'gatsby';

import { MenuItemsStyled, MenuItemStyled } from './Nav.style';

type Props = {
    isOpen: Boolean,
};

const Nav = ({ isOpen }: Props) => (
    <nav>
        <MenuItemsStyled isOpen={isOpen}>
            <MenuItemStyled>
                <Link to="/">Page 1</Link>
            </MenuItemStyled>
            <MenuItemStyled>
                <Link to="/">Page 1</Link>
            </MenuItemStyled>
            <MenuItemStyled>
                <Link to="/">Page 1</Link>
            </MenuItemStyled>
        </MenuItemsStyled>
    </nav>
);

export default Nav;
