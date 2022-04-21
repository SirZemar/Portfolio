import React from "react";
// Components
import { pageWrapper as Wrapper } from "../../common/pageWrapper";
import Graph from "./Graph";
import Text from "./Text";
import Layout, { position, placement } from "../../common/Layout";

const Skills: React.FC = () => (

    <Wrapper >
        <Layout>
            <Text position={position.left} placement={placement.center} />
            <Graph position={position.right} placement={placement.withAuto(placement.center, true)} />
        </Layout>
    </Wrapper>
)

export default Skills;