import styled from "styled-components";

export const Container = styled.nav`
    align-self: center;

    .nav_list {
        display: block;
        color: white;
        text-align: center;
        padding: 1rem;
        font-family: 'Inter', sans-serif
    }

    .nav_list.active {
    box-shadow: 2px 0px 0px #FF0F6C;
}
`