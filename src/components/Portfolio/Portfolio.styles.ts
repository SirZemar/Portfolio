import styled from "styled-components";
import { LayoutProps } from "../../common/Layout";

interface Props extends LayoutProps { }

interface Project {
    backgroundUrl: string;
}

const color = '255, 0, 0';

export const Container = styled.div<Props>`
    display: grid;
    grid-template-columns: repeat(auto-fill, 10% );
    background-color: rgb(${color}, 0);
`

export const Title = styled.div<Props>`
    
`

export const Project = styled.div<Props & Project>`
    background: url(${props => props.backgroundUrl});
    background-repeat: no-repeat ;
    background-size: cover;
    background-position: center;
    aspect-ratio: 1 / 1;
`