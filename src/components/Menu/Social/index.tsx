import React from "react";
import { Container } from "./Social.styles";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Social: React.FC = () => (
    <Container>
        <LinkedInIcon />
        <GitHubIcon />
    </Container>
)

export default Social;