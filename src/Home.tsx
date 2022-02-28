import React, { useState } from "react";
// Components 
import Ripple from "./components/Ripple";
// Unique Id
import { v4 as uuid } from 'uuid';
// Paths
import paths from './paths';
// Shuffle
import { shuffle } from './helpers';
// Styles
import { stylesVariables as style } from "./GlobalStyles";

export interface Coordenates {
    x: number;
    y: number;
    id: string;
}

const Home: React.FC = () => {
    const [mousePositionArray, setMoussePositionArray] = useState<Coordenates[]>([]);
    const [pathArray, setPathArray] = useState<string[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {

        const offset = parseFloat(style.menuWidth) * 16;
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
        <div className="page_container" onClick={handleClick} style={{ position: 'relative' }} >
            <Ripple coordenatesArray={mousePositionArray} setCoordenatesArray={setMoussePositionArray} paths={pathArray} />
        </div>
    )

};

export default Home;