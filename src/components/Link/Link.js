// @flow
import React, { type Node } from 'react';
import { LinkStyled } from './Link.style';

const LinkVariants = {
    PRIMARY: 'primary',
    ACCENT: 'accent',
};

type Props = {
    to: String,
    children: Node,
    className: String,
    variant: typeof LinkVariants,
};

const Link = ({ to, children, className, variant }: Props) => (
    <LinkStyled to={to} className={className} variant={variant}>
        {children}
    </LinkStyled>
);

export default Link;
