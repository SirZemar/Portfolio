import React from "react";
import { Container } from "./Presentation.styles";
// Types
import { LayoutProps } from "../../../common/Layout";

interface Props extends LayoutProps { }

const Text: React.FC<Props> = () => (
    <Container>
        <h1>About me</h1>
        <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque saepe rerum nostrum officia? Beatae fugiat nostrum, est quaerat cupiditate temporibus, assumenda soluta consequuntur repellat porro ipsum qui voluptates accusamus neque.</span><span>Fugiat ut debitis, qui velit exercitationem hic corporis molestias aliquid unde officia deserunt enim soluta iusto odio. Veritatis, rem nulla repellat mollitia vel, iusto consequuntur corporis fugit cum laboriosam odio?</span></p>
    </Container>
)

export default Text;