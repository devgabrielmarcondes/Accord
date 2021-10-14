import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #root {
        min-height: 100vh;
    }

    *, button, input {
        outline: 0;
        border: 0;
        background: none;
    }

    :root {
        --primary: #36393F;
        --secondary: #2F3136;
        --tertiary: #202225;
        --quaternary: #292B2F;
        --pseudo: #18191d;
        --scrollbar: #212226;

        --white: #FFFFFF;
        --gray: #8E9297;
        --symbol: #B9BBBE;
        --symbol-dark: #72767D;
        --separator: #2D2F32;
        --active-title: #DCDDDE;
        --selected: #393C43;
        --hover: #34373c;

        --notification: #DA3D40;
        --discord: #5865F2;
        --online: #3BA55D;
        --offline: #707B89;
    }
`;
