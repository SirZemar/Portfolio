import { createGlobalStyle } from "styled-components";


export const stylesVariables = {
    menuWidth: '7rem'
}

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
        padding-left: ${stylesVariables.menuWidth} ;
    }


    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .page_container {
        width: calc(100vw - ${stylesVariables.menuWidth});
        height: 100vh;
    }

    .nav_list {
        text-decoration: none;   
    }

`