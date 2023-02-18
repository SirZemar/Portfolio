import React, { useRef, useState } from "react";
import { Container, ProgressBar } from "./Graph.styles";
// Types
import { LayoutProps } from "../../../common/Layout";

interface Props extends LayoutProps { };

const skills = [
    { name: 'HTML', width: '75%' },
    { name: 'CSS', width: '80%' },
    { name: 'JavaScript', width: '70%' },
    { name: 'React', width: '60%' },
    { name: 'Angular', width: '55%' },
    { name: 'Firebase', width: '20%' },
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