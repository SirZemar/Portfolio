import styled from "styled-components";

interface Props {
}

export const Header = styled.header<Props> `
    background-color: var(--secondary);
    position: relative;
    width: 60vw;
    border-radius: 15px 15px 0 0;
    z-index: 100;
    padding: 10px;
 
    p{
        margin-bottom: 0;
        font-family: 'Roboto', sans-serif;
    }

    h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 2.5rem;
        margin-bottom: 10px;
    }
`

export const Footer = styled.footer<Props>`
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: var(--secondary);
    position: relative;
    border-radius: 0 0 15px 15px;
    height: 50px;
    margin-top: -5px;
    z-index: 1000;

    .button-container {
        margin-top: 5px;
    }
`
export const Container = styled.div<Props>`
    position: relative;
    width: 60vw;
    max-height: 60vh;
    /* height: clamp(400px, 60vh, 800px); */
    z-index: 100;
    animation: anim 0.5s;
    overflow-y: scroll;

    img {
        width: 100%;
        transition: 2s;
    }

    ::-webkit-scrollbar {
        width: 5px;
        overflow: hidden ;
        }
        ::-webkit-scrollbar-track {
        background: black;
        box-shadow: inset 0 0 5px #ddd; 
        }

        ::-webkit-scrollbar-thumb {
            background: white; 
            border-radius: 15px;
            box-shadow: inset 0 0 2px black;
        }
    // Temporary
    @keyframes anim {
        from {opacity: 0.2}
        to {opacity: 1}
    }
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