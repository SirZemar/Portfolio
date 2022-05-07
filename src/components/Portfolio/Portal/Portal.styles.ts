import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 60vw;
    height: 60vh;
    height: clamp(400px, 60vh, 800px);
    background: red;
    z-index: 100;
`

export const Background = styled.div`
    position: fixed;
    left: 0;
    top: 0; 
    width: 100vw;
    height: 100vh;
    background: black;
    opacity: 0.8;
`