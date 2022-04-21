import styled from "styled-components";

interface Props {
    area?: string;
    placement?: string;
}
export const Grid = styled.div`
    display: grid;
    grid-template: 
        "a b c d" 1fr
        "e f g h" 1fr
        "i j k l" 1fr 
        "m n o p" 1fr / 1fr 1fr 1fr 1fr;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const GridItem = styled.div<Props>`
    grid-area: ${({ area }) => area};
    place-self: ${({ placement }) => placement};
`