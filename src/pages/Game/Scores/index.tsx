import React from "react";
import {
  Container,
  Title,
  Head,
  PlayersScoreList,
  Table,
  PlayerScore,
} from "./Scores.styles";
import { Button, ButtonType } from "src/common/Button";

interface Props {}

const Scores: React.FC<Props> = () => {
  return (
    <Container>
      <Table>
        <Title>Scores</Title>
        <Head>
          <li className="head__name">Name</li>
          <li className="head__score">Score</li>
        </Head>
        <div className="horizontal-line"></div>
        <PlayersScoreList>
          <PlayerScore>
            <span className="player__name">1. Maldito</span>
            <span className="player__score">3210</span>
          </PlayerScore>
          <PlayerScore>
            <span className="player__name">2. Maldito</span>
            <span className="player__score">3210</span>
          </PlayerScore>
          <PlayerScore>
            <span className="player__name">3. Maldito</span>
            <span className="player__score">3210</span>
          </PlayerScore>
          <PlayerScore>
            <span className="player__name">4. Maldito</span>
            <span className="player__score">3210</span>
          </PlayerScore>
          <PlayerScore>
            <span className="player__name">5. Maldito</span>
            <span className="player__score">3210</span>
          </PlayerScore>
          <PlayerScore>
            <span className="player__name">6. Maldito</span>
            <span className="player__score">3210</span>
          </PlayerScore>
          <PlayerScore>
            <span className="player__name">7. Maldito</span>
            <span className="player__score">3210</span>
          </PlayerScore>
          <PlayerScore>
            <span className="player__name">8. Maldito</span>
            <span className="player__score">3210</span>
          </PlayerScore>
          <PlayerScore>
            <span className="player__name">9. Maldito</span>
            <span className="player__score">3210</span>
          </PlayerScore>
          <PlayerScore>
            <span className="player__name">10. Maldito</span>
            <span className="player__score">3210</span>
          </PlayerScore>
        </PlayersScoreList>
        <div className="button-box">
          <Button type={ButtonType.ROUTE} to="/">
            Go Back
          </Button>
        </div>
      </Table>
    </Container>
  );
};

export default Scores;
