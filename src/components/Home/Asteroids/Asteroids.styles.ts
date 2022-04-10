import styled from "styled-components";

type Props = {
    diffuse: string;
    filter: string;
}
export const Container = styled.div<Props>`

.unit {
    position: absolute;
    /* mix-blend-mode: lighten; */
    background-image: url(${({ filter }) => filter});
    width: 75px;
    height: 75px;
    transform: scale(0.8);
    height: 75px;
    display:block ;
}

.trajectory1 {
    animation: rotate 2s steps(22) infinite, path 4s linear infinite;
}

.trajectory2 {
    animation: rotate2 3s steps(22) infinite, path2 6s linear infinite;
}

@keyframes rotate {
    0% {
        background-position: calc(75px * 1) calc(75px * 20);
    }
    100% {
        background-position: calc(75px * 23) calc(75px * 20);
    }
}

@keyframes rotate2 {
    0% {
        background-position: calc(75px * 1) calc(75px * 15);
    }
    100% {
        background-position: calc(75px * 23) calc(75px * 15);
    }
}

@keyframes path {
    from {
        left: 85%;
        bottom:-10%;
    }
    to {
        left: 0%;
        bottom: 70%;
    }
}

@keyframes path2 {
    from {
        left: 110%;
        bottom:50%;
    }
    to {
        left: 0%;
        bottom: 50%;
    }
}
    
`