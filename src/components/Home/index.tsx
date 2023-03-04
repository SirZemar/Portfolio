import React, { useEffect, useState } from "react";
// Components 
import Ripple from "./Ripple";
// Unique Id
import { v4 as uuid } from 'uuid';
// Paths
import paths from '../../paths';
// Shuffle
import { shuffle } from '../../helpers';
// Styles
import { pageWrapper as Wrapper } from "../../common/pageWrapper";
import { Container } from "./Home.styles";
import Stars from "./Stars";
import Asteroids from "./Asteroids";


export interface Coordenates {
    x: number;
    y: number;
    id: string;
}

const Home: React.FC = () => {
    const [mousePositionArray, setMoussePositionArray] = useState<Coordenates[]>([]);
    const [pathArray, setPathArray] = useState<string[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {

        const offset = e.currentTarget.getBoundingClientRect().x;
        const x = e.pageX - offset;
        const y = e.pageY;

        setMoussePositionArray(
            mousePositionArray.length > 0
                ? prev => [...prev, { x, y, id: uuid() }]
                : [{ x, y, id: uuid() }]
        )

        const newPaths = shuffle(paths);

        setPathArray(newPaths)

    }

    return (
        <Container onClick={handleClick}>
            <Ripple coordenatesArray={mousePositionArray} setCoordenatesArray={setMoussePositionArray} paths={pathArray} />
            <Wrapper>
                <Stars />
                <Asteroids />
            </Wrapper>
        </Container>
    )

};

export default Home;