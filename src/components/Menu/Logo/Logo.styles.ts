import styled from "styled-components";

interface Props {
    image: string;
}
export const Container = styled.div`
`

export const Image = styled.img<Props>`
    width:100%;
    background-color: #000000CC ;
    background-image: url(${({ image }) => image});;
    aspect-ratio: 1/1.25;
    background-position: center;
    background-repeat: no-repeat;
`