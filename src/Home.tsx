import React, { useState } from "react";
// Components 
import Ripple from "./components/Ripple";
// Unique Id
import { v4 as uuid } from 'uuid';
// Paths
import paths from './paths';
// Shuffle
import { shuffle } from './helpers';

export interface Coordenates {
    x: number;
    y: number;
    id: string;
}

const Home: React.FC = () => {
    const [mousePositionArray, setMoussePositionArray] = useState<Coordenates[]>([]);
    const [pathArray, setPathArray] = useState<string[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setMoussePositionArray(
            mousePositionArray
                ? prev => [...prev, { x: e.pageX, y: e.pageY, id: uuid() }]
                : [{ x: e.pageX, y: e.pageY, id: uuid() }]
        )

        const newPaths = shuffle(paths);

        setPathArray(newPaths)

    }

    return (
        <div onClick={handleClick} style={{ width: '100vw', height: '100vh', position: 'relative' }} >
            <Ripple coordenatesArray={mousePositionArray} setCoordenatesArray={setMoussePositionArray} paths={pathArray} />
        </div>
    )

};

export default Home;