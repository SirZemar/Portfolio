import React, { useEffect, useRef, useState } from "react";
// Styles 
import { SVG } from './Ripple.styles';
// Animation
import { animate, motion } from 'framer-motion';
// Type
import { Coordenates } from '../../pages/Home';

interface Props {
    coordenatesArray: Coordenates[];
    setCoordenatesArray: React.Dispatch<React.SetStateAction<Coordenates[]>>;
    paths: string[];
}

interface variantProps {
    coordenates: Coordenates;
    paths: string[];
}

const variants = {
    initial: (props: variantProps) => ({
        scale: 0,
        opacity: 1,
        x: props.coordenates.x,
        y: props.coordenates.y,
    }),
    animate: (props: variantProps) => ({
        scale: 5,
        opacity: 0,
        transition: {
            duration: 1.5, ease: 'easeOut'
        },
        d:
            props.paths,
    })
}

const Ripple: React.FC<Props> = ({ coordenatesArray, setCoordenatesArray, paths }) => {

    const onComplete = (key: string) => {
        setCoordenatesArray(coordenatesArray.filter(coordenates => coordenates.id !== key))
    }

    const variantsProps = (coordenates: Coordenates) => ({ coordenates, paths });

    return (
        <>
            {coordenatesArray.map((coordenates) =>
                <SVG className="page_container" key={coordenates.id}  >
                    <g className="blob" >
                        <motion.path
                            variants={variants}
                            custom={variantsProps(coordenates)}
                            initial={'initial'}
                            animate={'animate'}
                            onAnimationComplete={() => onComplete(coordenates.id)}
                            className="blob-path"
                            fill="none"
                            stroke="#F7770F"
                            strokeWidth='3'
                        >
                        </motion.path>
                    </g>
                </SVG>
            )
            }
        </>
    )
};

export default Ripple;