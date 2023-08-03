import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Background = styled.div`
  position: absolute;
  display: block;
  background: black;
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;

export const Table = styled.div`
  opacity: 1;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 40px 30px 3px 1fr 40px;
  width: 50%;
  height: 90%;
  background: blue;
  padding: 20px;

  .horizontal-line {
    background: linear-gradient(
      0deg,
      rgba(14, 14, 14, 1) 0%,
      rgba(235, 235, 235, 1) 50%,
      rgba(14, 14, 14, 1) 100%
    );
    height: 100%;
    width: 90%;
    justify-self: center;
    grid-row: 3/4;
    grid-column: 1/3;
  }

  .button-box {
    grid-row: 5/6;
    grid-column: 1/3;
    place-self: center;
  }
`;

export const Title = styled.h2`
  grid-column: 1/3;
  grid-row: 1/2;
  place-self: center;
`;

export const Head = styled.ul`
  grid-row: 2/3;
  grid-column: 1/3;
  display: grid;
  grid-template-columns: 80% 20%;
  padding: 0 40px;

  .head {
    &__name {
      grid-column: 1/2;
      place-self: center start;
    }

    &__score {
      grid-column: 2/3;
      place-self: center end;
    }
  }
`;

export const PlayersScoreList = styled.ol`
  padding: 0;
  list-style-type: none;
  grid-row: 4/5;
  grid-column: 1/3;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: repeat(10, 1fr);
`;

export const PlayerScore = styled.li`
    display: grid;
    grid-column: 1/3;
    grid-template-columns: 80% 20%;
    padding: 0 40px;

    .player__name {
      grid-column: 1/2;
      align-self: center;
    }

    .player__score {
      place-self: center end;
      grid-column: 2/3;
    }
  }
`;
