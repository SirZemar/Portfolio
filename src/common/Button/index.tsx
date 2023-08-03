import React from "react";
import { Container } from "./Button.styles";
import { Link, NavLink } from "react-router-dom";

export enum ButtonType {
  SUBMIT = "submit",
  LINK = "link",
  ROUTE = "route",
  CALLBACK = "callback",
}
interface Props {
  type: ButtonType;
  link?: string;
  path?: string;
  fun?: () => any;
  to?: string;
}
export const Button: React.FC<Props> = ({ children, link, type, path, fun, to }) => (
  <Container>
    <div className="button-container">
      {type === ButtonType.LINK && (
        <a href={link} className="button" target="_blank" rel="noreferrer">
          {children}
        </a>
      )}
      {type === ButtonType.SUBMIT && (
        <button className="button" type={ButtonType.SUBMIT}>
          {children}
        </button>
      )}
      {type === ButtonType.ROUTE && (
        <NavLink className={"button"} to={to ?? ""}>
          {children}
        </NavLink>
      )}
      {type === ButtonType.CALLBACK && (
        <button className="button" onClick={fun}>
          {children}
        </button>
      )}
    </div>
  </Container>
);