import styled from "styled-components";
import { LayoutProps } from "../../common/Layout";

interface Props extends LayoutProps {}

export const Container = styled.div<Props>`
  h1 {
    font-size: 6rem;
    text-align: center;
    margin: 0;
  }

  p {
    font-size: 1.2rem;
  }
`;
