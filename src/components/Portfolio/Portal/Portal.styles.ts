import { url } from "inspector";
import styled from "styled-components";

interface Props {
    image?: string
}

export const Container = styled.div<Props>`
    position: relative;
    width: 60vw;
    height: 60vh;
    height: clamp(400px, 60vh, 800px);
    /* background: ${props => props.image ? `url(${props.image})` : 'red'} ; */
    z-index: 100;
    animation: anim 0.5s;
    overflow-y: scroll;

    img {
        width: 100%;
    }

    ::-webkit-scrollbar {
        width: 5px;
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