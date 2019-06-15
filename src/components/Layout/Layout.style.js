/* eslint-disable prettier/prettier */
import { createGlobalStyle, css } from 'styled-components';

const reset = css`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
`;

const typography = css`
    html {
        font-size: 100%;
    }
    body,
    button,
    input {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        font-weight: 400;
        color: #333333;
    }

    strong {
        font-weight: 600;
    }
`;

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${typography}
`;

export { GlobalStyle };
