import React, { useEffect, useState } from "react";
import Layout, { position, placement } from "../../common/Layout";
import { pageWrapper as Wrapper } from "../../common/pageWrapper";
import { Container, Title, Project } from "./Portfolio.styles";

import { projectsData } from "../../images/mock";

import Portal from "./Portal";
import { Project as ProjectModel } from "../../model/project";
import { useReposFetch } from "../../hooks/useReposFetch";
// Professional projects logos
import eventureLogo from "../../images/projects/logos/eventure.png";
import filmstakerLogo from "../../images/projects/logos/filmstacker.png";
import infomobiLogo from "../../images/projects/logos/infomobi.jpg";
import filmstackerPage from "../../images/projects/images/filmstacker.png"
import infomobiPage from "../../images/projects/images/infomobi.png"
import eventurePage from "../../images/projects/images/eventure.png"

import { Spinner } from "../../common/Spinner";
import { Skeleton } from '@mui/material';

// Professional projects 
const professionalProjects = [
    {
        name: 'filmstacker',
        website: 'https://filmstacker.com',
        logo: filmstakerLogo,
        image: filmstackerPage,
        description: 'This is a test'
    },
    {
        name: 'eventure',
        website: 'https://github.com/devizem/Eventure',
        logo: eventureLogo,
        image: eventurePage,
        description: 'This is a test'
    },
    {
        name: 'infomobi',
        website: 'https://infomobi.app',
        logo: infomobiLogo,
        image: infomobiPage,
        description: 'This is a test'
    }
]
const Portfolio: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [reposInfo, setReposInfo] = useState<any[]>([]);
    const { repos, loadingStatus } = useReposFetch();
    const [selectedProject, setSelectedProject] = useState<any>();
    const [loadingProjects, setLoadingProjects] = useState<boolean[]>();

    useEffect(() => {
        const reposCountLocalStorage = window.localStorage.getItem('reposLength');
        const reposCountLocalStorageParsed = reposCountLocalStorage ? parseInt(reposCountLocalStorage) : 0;
        const x = new Array(reposCountLocalStorageParsed).fill(true)
        setLoadingProjects(x);
        console.log('asdadaddas', loadingProjects)
    }, [])

    useEffect(() => {
        if (loadingStatus ? loadingStatus.length >= 0 : false) {
            setLoadingProjects(loadingStatus);
        }
    },)
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
        if (project) setSelectedProject(project);
        setIsOpen(boolean);
    }
    return (
        <Wrapper>
            <Layout>
                <Title position={position.topSlim} placement={placement.top}>
                    <h1>My personal projects</h1>
                </Title>
                <Container projectsCount={3} position={position.top} placement={placement.center}>
                    {reposInfo.map((project: ProjectModel, index) =>
                        <Project key={index} onClick={() => openModal(true, project)} backgroundUrl={project.logo}></Project>
                    )}

                    {loadingProjects?.map((_, index) => {
                        return (
                            <Skeleton className="project-skeleton" key={index}></Skeleton>
                        )
                    })}

                </Container>
                <Title position={position.center} placement={placement.center}>
                    <h1>My work experience</h1>
                </Title>
                <Container projectsCount={3} position={position.bottom} placement={placement.center}>

                    {loadingStatus &&
                        professionalProjects?.map((professionalProject, index) =>
                            < Project key={index} onClick={() => openModal(true, professionalProject)} backgroundUrl={professionalProject.logo}></Project>
                        )
                    }
                    {!loadingStatus &&
                        professionalProjects?.map((_, index) =>
                            <Skeleton className="project-skeleton" key={index}></Skeleton>
                        )
                    }
                </Container>
                {isOpen && <Portal openModal={openModal} position={position.centerWide} placement={placement.center} project={selectedProject}></Portal>}
            </Layout>
        </Wrapper >
    )
}

//https://raw.githubusercontent.com/SirZemar/one-cinema/master/README.md

export default Portfolio;

