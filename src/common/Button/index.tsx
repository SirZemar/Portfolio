import React from "react";
import { Container } from "./Button.styles";
import { Link } from "react-router-dom";

export enum Type {
  SUBMIT = "submit",
  LINK = "link",
  ROUTE = "route",
}
interface Props {
  type: Type;
  link?: string;
  path?: string;
}
export const Button: React.FC<Props> = ({ children, link, type, path }) => (
  <Container>
    <div className="button-container">
      {type === Type.LINK && (
        <a href={link} className="button" target="_blank" rel="noreferrer">
          {children}
        </a>
      )}
      {type === Type.SUBMIT && (
        <button className="button" type="submit">
          {children}
        </button>
      )}
      {type === Type.ROUTE && (
        <a href={path} className="button" rel="noreferrer">
          {children}
        </a>
      )}
    </div>
  </Container>
);