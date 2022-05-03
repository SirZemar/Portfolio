import React, { useRef, useState } from "react";
import { Container, ProgressBar } from "./Graph.styles";
// Types
import { LayoutProps } from "../../../common/Layout";

interface Props extends LayoutProps { };

const Graph: React.FC<Props> = () => {

    const alternate = useRef(false);
    const delay = useRef(0);

    const skills = [
        { name: 'HTML', width: '75%' },
        { name: 'JavaScript', width: '75%' },
        { name: 'React', width: '70%' },
        { name: 'CSS', width: '55%' },
        { name: 'Angular', width: '40%' },
        { name: 'Firebase', width: '20%' },
    ]

    const skillsClasseNames = skills.map(skill => skill.name);
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