import React from "react";
// Components
import { pageWrapper as Wrapper } from "../../common/pageWrapper";
import Graph from "./Graph";
import Text from "../../common/Text";
import Layout, { position, placement } from "../../common/Layout";

const Skills: React.FC = () => (

    <Wrapper >
        <Layout>
            <Text position={position.left} placement={placement.center}>
                <h1>Skills</h1>
                <p><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laudantium possimus id blanditiis quidem, quia enim sit provident hic reiciendis accusantium nihil iusto quisquam sequi perspiciatis fugit aspernatur ea velit?</span><span>Vitae quisquam officia nemo magnam natus accusantium necessitatibus ipsam officiis aliquam eligendi quaerat error placeat earum odio, tempora nam nostrum exercitationem assumenda. Deserunt molestiae beatae voluptatem nemo provident. Possimus, cum?</span><span>Quisquam perspiciatis non aliquam quasi illo tempora, incidunt dolorem dolore quod ab similique, eius suscipit pariatur. Unde eum atque doloribus, facilis nulla, maxime quisquam optio quis aperiam incidunt voluptatum soluta.</span></p>
            </Text>
            <Graph position={position.right} placement={placement.withAuto(placement.center, true)} />
        </Layout>
    </Wrapper>
)

export default Skills;