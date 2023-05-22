// @import url("https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700");

import styled from "styled-components";

interface Props {
}
export const Container = styled.div<Props>`
  display: inline;

  .button-container {
    margin: 0 auto;
    width: 100%;
    padding: 0 20px;
  }
  .button-container .button {
    text-decoration: none;
    position: relative;
    margin: 0 auto;
    padding: 0.35em 1.75em;
    color: transparent;
    font-size: 1.2rem;
    font-family: "Spline Sans", "Montserrat", sans-serif;
    font-weight: 500;
    letter-spacing: 1px;
    text-fill-color: transparent;
    border: 1px solid transparent;
    border-image: linear-gradient(-90deg, deeppink, sienna);
    border-image-slice: 1;
    background: linear-gradient(-90deg, pink, pink);
    -webkit-background-clip: text;
    cursor: pointer;
    transform: translate(-50%, -50%);
    transition: 0.3s;
  }
  .button-container .button:before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, deeppink 0%, red 100%);
    opacity: 0;
    transition: 0.3s ease;
  }
  .button-container .button:hover {
    color: rgba(255, 255, 255, 0.95);
  }
  .button-container .button:hover:before {
    opacity: 1;
  }
`;
