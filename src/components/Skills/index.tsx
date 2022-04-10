import React from "react";
import { Wrapper } from "../../common/styles";
import Graph from "./Graph";
import { Container } from "./Skills.styles";
import Text from "./Text";

const Skills: React.FC = () => (
    <Wrapper >
        <Container >
            <Text />
            <Graph />
        </Container>
    </Wrapper>
)

export default Skills;