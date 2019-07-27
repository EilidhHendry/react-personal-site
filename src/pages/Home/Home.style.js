import styled from 'styled-components';
import { ParallaxSection } from '../../components/Parallax';

const ParallaxSectionStyled = styled(ParallaxSection)`
    background-color: pink;
`;

const HeadingStyled = styled.h1`
    font-size: 80px;
    font-weight: 800;
    letter-spacing: -5px;
    color: white;
`;

const ContentSectionStyled = styled.section`
    background-color: white;
`;

const ContentStyled = styled.section`
    font-size: 20px;
    max-width: 750px;
    margin: 0 auto;
    padding: 75px 0;
`;

export {
    ParallaxSectionStyled,
    HeadingStyled,
    ContentStyled,
    ContentSectionStyled,
};
