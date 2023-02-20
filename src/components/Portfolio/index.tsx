import React, { useEffect, useState } from "react";
import Layout, { position, placement } from "../../common/Layout";
import { pageWrapper as Wrapper } from "../../common/pageWrapper";
import { Container, Title, Project } from "./Portfolio.styles";

import { projectsData } from "../../images/mock";

import Portal from "./Portal";
import { Project as ProjectModel } from "../../model/project";
import { useReposFetch } from "../../hooks/useReposFetch";


const Portfolio: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [reposInfo, setReposInfo] = useState<any[]>([]);
    const { repos } = useReposFetch();
    const [selectedProject, setSelectedProject] = useState<any>();

    useEffect(() => {
        repos?.forEach((repo, index) => {

            const markdown: any = {};
            const tagNames = ['name', 'description', 'image', 'website', 'logo'];

            tagNames.forEach(tag => {
                const markdownStart = `<${tag}>`;
                const markdownEnd = `</${tag}>`;
                const indexFirstTag = repo.indexOf(markdownStart);
                const substrStart = indexFirstTag + markdownStart.length;
                const substrEnd = repo.indexOf(markdownEnd);

                const substr = repo.substring(substrStart, substrEnd);
                markdown[tag] = substr;
            })
            console.log(markdown)
            setReposInfo(prevReposInfo => [...prevReposInfo, markdown])
            console.log(repo)
        });
    }, [repos]);

    useEffect(() => {
        console.log(reposInfo)
    }, [reposInfo])
    const openModal = (boolean: boolean, project?: ProjectModel) => {
        setSelectedProject(project)
        setIsOpen(boolean);
    }
    return (
        <Wrapper>
            <Layout>
                <Title position={position.topSlim} placement={placement.center}>
                    <h1>What I have been doing</h1>
                </Title>
                <Container position={position.top} placement={placement.withAuto('center', true)}>
                    {reposInfo.map((project: ProjectModel, index) =>
                        <Project key={index} onClick={() => openModal(true, project)} backgroundUrl={project.logo}></Project>
                    )}
                </Container>
                {isOpen && <Portal openModal={openModal} position={position.centerWide} placement={placement.center} project={selectedProject}></Portal>}
            </Layout>
        </Wrapper >
    )
}

//https://raw.githubusercontent.com/SirZemar/one-cinema/master/README.md

export default Portfolio;
