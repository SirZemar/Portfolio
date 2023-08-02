import styled from "styled-components";

interface Props {}

export const Container = styled.div<Props>`
  position: relative;
  width: 100%;
  height: 100%;

  .inner-container {
    display: flex;
    position: absolute;
    left: 0px;
    width: 100%;
    height: 80%;
    pointer-events: none;
    user-select: none;

    &__planet {
      position: absolute;
      padding-right: 40px;
      right: 40%;
      left: 0px;
      height: 100%;
    }

    &__intro {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      position: absolute;
      left: 60%;
      height: 100%;
      padding-right: 10%;
      max-width: 600px;

      &__start-button {
        align-self: flex-end;
        pointer-events: auto;
      }
    }
  }
`;
