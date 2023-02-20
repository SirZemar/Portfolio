import React from "react";
import { Container } from "./Button.styles";
interface Props {
    link: string,
}
export const Button: React.FC<Props> = ({ children, link }) => (
    <Container>
        <div className="button-container">
            <a href={link} className='button' target='_blank'>
                {children}
            </a>
        </div>
    </Container>
)