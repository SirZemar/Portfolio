import React from "react";
import { Container } from "./Graph.styles";

const Graph: React.FC = () => (
    <Container>
        <ul>
            <li>
                <p>HTML</p>
                <label >
                    <div className="html"></div>
                </label>
            </li>
            <li>
                <p>CSS</p>
                <label >
                    <div className="css"></div>
                </label>
            </li>
            <li>
                <p>Javascript</p>
                <label >
                    <div className="js"></div>
                </label>
            </li>
            <li>
                <p>ReactJS</p>
                <label >
                    <div className="react"></div>
                </label>
            </li>
            <li>
                <p>Angular</p>
                <label >
                    <div className="angular"></div>
                </label>
            </li>
            <li>
                <p>Firebase</p>
                <label >
                    <div className="firebase"></div>
                </label>
            </li>
        </ul>
    </Container>
)

export default Graph;