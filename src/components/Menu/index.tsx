import React from "react";
import { Content, Wrapper } from "./Menu.styles";
// Routes
import { Link } from 'react-router-dom';

const Nav: React.FC = () => (
    <Wrapper >
        <Content>
            <Link className="nav_list" to='/skills'>
                Home
            </Link>
            <Link className="nav_list" to='/'>
                Skills
            </Link><Link className="nav_list" to='/'>
                Portfolio
            </Link><Link className="nav_list" to='/'>
                Contact
            </Link>
        </Content>
    </Wrapper>
)

export default Nav;