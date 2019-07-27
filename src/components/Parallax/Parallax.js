// @flow
import React, { type Node } from 'react';
import { WrapperStyled, SectionStyled } from './Parallax.style';

const ParallaxPerspectiveContext = React.createContext(1);

type ParallaxContainerProps = {
    children: Node,
    className: string,
    perspective: number,
};

const ParallaxContainer = ({
    children,
    className,
    perspective = 1,
}: ParallaxContainerProps) => (
    <ParallaxPerspectiveContext.Provider value={perspective}>
        <WrapperStyled className={className} perspective={perspective}>
            {children}
        </WrapperStyled>
    </ParallaxPerspectiveContext.Provider>
);

type ParallaxSectionProps = {
    children: Node,
    className: string,
    perspective: number,
    translateZ: number,
};

const ParallaxSection = ({
    children,
    className,
    perspective,
    translateZ = -1,
}: ParallaxSectionProps) => {
    const calculateScale = perspective => 1 + (translateZ * -1) / perspective;
    return (
        <ParallaxPerspectiveContext.Consumer>
            {value => (
                <SectionStyled
                    className={className}
                    translateZ={translateZ}
                    scale={calculateScale(value)}
                >
                    {children}
                </SectionStyled>
            )}
        </ParallaxPerspectiveContext.Consumer>
    );
};

export { ParallaxContainer, ParallaxSection };
