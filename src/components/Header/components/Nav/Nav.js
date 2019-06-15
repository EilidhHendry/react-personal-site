// @flow
import React from 'react';

import { MenuItemsStyled, MenuItemStyled } from './Nav.style';
import Link from '../../../Link';

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
