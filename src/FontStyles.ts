import { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`
    @font-face {
    font-family: "Do Futuristic";
    src: local("DoFuturistic"), 
        url('./fonts/DoFuturistic.ttf') format('truetype'),
    }
`

export default FontStyles;