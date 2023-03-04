import styled from "styled-components";

interface Props {
}

export const Container = styled.div<Props>`
display: grid;
place-items: center;

.lds-dual-ring {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  aspect-ratio: 1/1;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  box-sizing: border-box;
  width: 85%;
  height: 85%;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`