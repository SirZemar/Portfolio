import styled from "styled-components";
import { LayoutProps } from "../../common/Layout";

interface Props extends LayoutProps { }

export const Container = styled.div<Props>`
  position: relative;
  width: 100%;
  height: 100%;

  .line:nth-child(1) {
    font-size: 4rem;
    margin: 0;
    letter-spacing: 2px;
  }

  .line:nth-child(2) {
    font-size: 4rem;
    margin: 0;
    letter-spacing: 2px;
    padding-left: 60px;
    line-height: 80px;
  }

  .line:nth-child(3) {
    font-size: 4rem;
    margin: 0;
    letter-spacing: 2px;
    padding-left: 120px;
  }
`;
