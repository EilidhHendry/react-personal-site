// @flow
import React, { type Node } from 'react';
import { HeroStyled, ContentWrapper, ButtonStyled } from './Hero.style';

const Hero = () => (
    <HeroStyled>
        <ContentWrapper>
            <div>
                <p>Plant Lady</p>
                <p>Engineering Manager</p>
                <p>Full-stack Developer</p>
            </div>
            <ButtonStyled>Work with me</ButtonStyled>
        </ContentWrapper>
    </HeroStyled>
);

export default Hero;
