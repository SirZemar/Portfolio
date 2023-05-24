import React, { useRef } from "react";
import { Container, ProgressBar } from "./Graph.styles";
// Types
import { LayoutProps } from "../../../common/Layout";

interface Props extends LayoutProps { };

const skills = [
    { name: 'HTML', width: '75%' },
    { name: 'CSS', width: '85%' },
    { name: 'JavaScript', width: '75%' },
    { name: 'React', width: '60%' },
    { name: 'Angular', width: '70%' },
    { name: 'Firebase', width: '45%' },
    { name: 'AWS', width: '45%' },
    { name: 'node.js', width: '65%' },
]

const Graph: React.FC<Props> = () => {

    const alternate = useRef(false);
    const delay = useRef(0);

    return (
        <Container >
            <ul>
                {skills.map((skill) =>
                    <li key={skill.name}>
                        <p>{skill.name}</p>
                        <div className="bar-container">
                            <ProgressBar skill={skill} alternate={alternate.current = !alternate.current} delay={delay.current = delay.current + 0.1} />
                        </div>
                    </li>
                )}
            </ul>
        </Container>
    )
}

export default Graph;