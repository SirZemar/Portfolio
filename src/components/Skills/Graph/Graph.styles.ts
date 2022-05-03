import styled, { keyframes } from "styled-components";

interface Props {
    skill: {
        name: string,
        width: string
    },
    alternate: boolean,
    delay: number
}

const background = {
    red: `rgb(230, 0, 0)`,
    pink: `rgb(230, 150, 200)`
}

const shadow = {
    red: `0 0 8px rgb(255, 0, 0, 0.5)`,
    pink: `0 0 8px rgb(235, 150, 230, 0.5)`
}

const barFill = (width: string) => keyframes`
from {width: 0}
to {width: ${width}}
`

export const ProgressBar = styled.div<Props>`
    width: 0;
    background-color: ${props => props.alternate ? background.red : background.pink};
    box-shadow: ${props => props.alternate ? shadow.red : shadow.pink};
    animation: ${props => barFill(props.skill.width)} 600ms ${props => props.delay}s forwards;
`

export const Container = styled.div`

    .bar-container {
        display: block;
        width: 100%;
        height: 3px;
        box-shadow: inset 0 0 0 3px grey;

        ${ProgressBar} {
            height: 100%;
            border-radius: 5px;
        }
    }
`



