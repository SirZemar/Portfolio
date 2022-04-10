import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template: 
        "e b" 1fr
        "a b" 1fr
        "a c" 1fr/ 45% ;
    width: 100%;
    height: 100%;
    gap: 0 2rem;
`