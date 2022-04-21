import styled from "styled-components";
import { LayoutProps } from "../../common/Layout";

interface Props extends LayoutProps { }

export const Container = styled.div<Props>`
    background: red;
    height: 100%;
    width: 100%;
`

export const Title = styled.div<Props>`
    
`