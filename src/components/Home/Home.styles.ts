import styled from "styled-components";
import { LayoutProps } from "../../common/Layout";

interface Props extends LayoutProps { }

export const Container = styled.div<Props>`
    position: relative;
    width: 100%;
    height: 100%;
`