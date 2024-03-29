import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --largeWidth: 1280px;
    --medWidth: 1000px;
    --base: #1f1f24;
    --secondary: #1c1c1c
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

    h1, h2 {
        color: white;
        font-family: 'Do Futuristic', 'Spline Sans', sans-serif;
    }

    p {
        color: white;
        font-family: monospace;
    }

    .fakeh1 {
        color: white;
        font-family: 'Do Futuristic', 'Spline Sans', sans-serif;
        display: block;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    
`;