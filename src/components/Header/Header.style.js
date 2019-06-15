import styled from 'styled-components';

const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid #333333;
    padding: 16px;

    @media (min-width: ${({ theme }) => theme.screenSize.smallTablet}px) {
        flex-direction: row;
    }
`;

const MenuButtonStyled = styled.button`
    align-self: flex-end;
    display: initial;
    position: absolute;

    @media (min-width: ${({ theme }) => theme.screenSize.smallTablet}px) {
        display: none;
    }
`;

export { HeaderStyled, MenuButtonStyled };
