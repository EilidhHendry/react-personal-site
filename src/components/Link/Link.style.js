import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const defaultStyles = css`
    color: ${({ theme }) => theme.palette.darkestGrey};

    :hover {
        color: ${({ theme }) => theme.palette.lightGrey};
    }
`;

const primaryStyles = css`
    color: ${({ theme }) => theme.palette.primary};

    :hover {
        text-decoration: underline;
    }
`;

const LinkStyled = styled(Link)`
    text-decoration: none;
    ${({ variant }) => (variant === 'primary' ? primaryStyles : defaultStyles)};
`;

export { LinkStyled };
