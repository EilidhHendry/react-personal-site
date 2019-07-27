import styled from 'styled-components';

const WrapperStyled = styled.div`
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: ${({ perspective }) => perspective}px;
`;

const SectionStyled = styled.section`
    display: flex;
    flex: 1 0 auto;
    position: relative;
    z-index: -1;
    height: 100vh;
    justify-content: center;
    align-items: center;
    transform: ${({ translateZ, scale }) =>
        `translateZ(${translateZ}px) scale(${scale})`};
`;

export { WrapperStyled, SectionStyled };
