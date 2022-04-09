import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --largeWidth: 1280px;
    --medWidth: 1000px;
    --base: #1f1f24
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: var(--base);
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .nav_list {
        text-decoration: none;   
    }

    h1, h2, p {
        color: white;
    }
`