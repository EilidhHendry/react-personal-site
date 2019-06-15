import styled from 'styled-components';

const HeroStyled = styled.div`
    background-color: ${({ theme }) => theme.palette.primary};
    min-height: 460px;
    display: flex;
`;

const ContentWrapper = styled.div`
    margin: auto;
    text-align: center;
    color: white;
`;

const ButtonStyled = styled.button`
    color: white;
    background-color: ${({ theme }) => theme.palette.accent};
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-radius: 25px;
    padding: 8px 20px;
    margin-top: 16px;
`;

export { HeroStyled, ContentWrapper, ButtonStyled };
