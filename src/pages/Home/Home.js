import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import { ParallaxContainer } from '../../components/Parallax';
import SEO from '../../components/SEO';

import {
    ParallaxSectionStyled,
    HeadingStyled,
    ContentStyled,
    ContentSectionStyled,
} from './Home.style';

const HomePage = () => (
    <Layout>
        <SEO title="Home" />
        <ParallaxContainer>
            <ParallaxSectionStyled>
                <HeadingStyled>Hello</HeadingStyled>
            </ParallaxSectionStyled>
            <ContentSectionStyled>
                <ContentStyled>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. In fermentum et sollicitudin ac orci
                        phasellus egestas tellus rutrum. Platea dictumst quisque
                        sagittis purus sit amet volutpat consequat mauris. Purus
                        viverra accumsan in nisl nisi scelerisque eu ultrices.
                        In cursus turpis massa tincidunt dui ut ornare lectus.
                        Euismod in pellentesque massa placerat duis ultricies
                        lacus sed. Pellentesque sit amet porttitor eget dolor
                        morbi non arcu risus. Orci a scelerisque purus semper
                        eget duis at tellus at. Mauris augue neque gravida in
                        fermentum et sollicitudin ac orci. Congue mauris rhoncus
                        aenean vel. Est velit egestas dui id. Pulvinar neque
                        laoreet suspendisse interdum consectetur libero id
                        faucibus nisl. Senectus et netus et malesuada fames ac
                        turpis egestas. Duis convallis convallis tellus id
                        interdum velit laoreet. Dignissim convallis aenean et
                        tortor at risus. Fringilla urna porttitor rhoncus dolor
                        purus non enim praesent elementum. Neque egestas congue
                        quisque egestas diam.
                    </p>

                    <p>
                        Posuere urna nec tincidunt praesent semper feugiat nibh
                        sed pulvinar. Consectetur libero id faucibus nisl
                        tincidunt eget. Tortor vitae purus faucibus ornare
                        suspendisse sed nisi lacus sed. Enim ut tellus elementum
                        sagittis vitae et leo. Odio eu feugiat pretium nibh
                        ipsum consequat nisl. Dolor sit amet consectetur
                        adipiscing elit. Mauris sit amet massa vitae. Ac
                        placerat vestibulum lectus mauris ultrices eros in.
                        Turpis nunc eget lorem dolor. Turpis cursus in hac
                        habitasse platea dictumst quisque sagittis. Varius morbi
                        enim nunc faucibus a pellentesque sit.
                    </p>

                    <p>
                        Malesuada nunc vel risus commodo viverra maecenas
                        accumsan lacus vel. Consequat interdum varius sit amet
                        mattis vulputate enim nulla aliquet. Nunc eget lorem
                        dolor sed viverra ipsum nunc aliquet bibendum. Urna id
                        volutpat lacus laoreet non curabitur gravida arcu.
                        Pellentesque adipiscing commodo elit at imperdiet. Arcu
                        risus quis varius quam quisque id. Maecenas volutpat
                        blandit aliquam etiam erat velit. Ultrices eros in
                        cursus turpis massa tincidunt dui ut ornare. Tortor at
                        risus viverra adipiscing at in tellus. Elementum
                        curabitur vitae nunc sed velit dignissim sodales.
                        Aliquam ut porttitor leo a. Eget mi proin sed libero
                        enim sed faucibus turpis. Pretium nibh ipsum consequat
                        nisl. Eget felis eget nunc lobortis mattis aliquam
                        faucibus. Massa massa ultricies mi quis hendrerit dolor
                        magna eget est. Tincidunt nunc pulvinar sapien et ligula
                        ullamcorper malesuada.
                    </p>
                </ContentStyled>
            </ContentSectionStyled>
            <ParallaxSectionStyled>
                <HeadingStyled>How are you?</HeadingStyled>
            </ParallaxSectionStyled>
        </ParallaxContainer>
        <Link to="/cv/">Go to page 2</Link>
    </Layout>
);

export default HomePage;
