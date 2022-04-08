import styled from "styled-components";
import { stylesVariables as style } from "../../GlobalStyles";

export const Wrapper = styled.div`
    border: 1px solid red;
    height: 100%;
    min-width: ${style.menuWidth};
`

export const Content = styled.nav`
    a.nav_list {
        display: block;
        color: white;
        text-align: center;
    }

`