import React from "react";
import Logo from "./Logo";
import { Wrapper } from "./Menu.styles";
// Components
import Nav from "./Nav";
import Social from "./Social";

const Menu: React.FC = () => (
    <Wrapper >
        <Logo />
        <Nav />
        <Social />
    </Wrapper>
)

export default Menu;