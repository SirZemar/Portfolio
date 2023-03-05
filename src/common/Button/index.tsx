import React from "react";
import { Container } from "./Button.styles";

export enum Type {
    SUBMIT = "submit",
    LINK = "link",
}
interface Props {
    type: Type,
    link?: string,
}
export const Button: React.FC<Props> = ({ children, link, type }) => (
    <Container>
        <div className="button-container">
            {type === Type.LINK && <a href={link} className='button' target='_blank' rel="noreferrer">
                {children}
            </a>}
            {type === Type.SUBMIT && <button className='button' type="submit" >
                {children}
            </button>}
        </div>
    </Container>
)