import styled from 'styled-components';

const MenuItemsStyled = styled.ul`
    list-style: none;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.screenSize.smallTablet}px) {
        flex-direction: row;
        display: flex;
    }
`;

const MenuItemStyled = styled.li`
    padding: 8px 0;

    @media (min-width: ${({ theme }) => theme.screenSize.smallTablet}px) {
        padding: 0 12px;
    }
`;

export { MenuItemsStyled, MenuItemStyled };
