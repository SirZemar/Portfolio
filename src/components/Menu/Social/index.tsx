import React from "react";
import { Container } from "./Social.styles";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Social: React.FC = () => (
    <Container>
        <a href="https://www.linkedin.com/in/josé-marinho-11a621216/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
        </a>
        <a href="https://github.com/SirZemar" target="_blank" rel="noreferrer" >
            <GitHubIcon />
        </a>
    </Container>
)

export default Social;