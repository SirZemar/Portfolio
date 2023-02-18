import { useEffect, useState } from "react";
import API from "../API";

export const useReposFetch = () => {
    const [repoNames, setRepoNames] = useState<string[]>([]);
    const [portfolioReposNames, setPortfolioReposNames] = useState<string[]>([]);
    const [repos, setRepos] = useState<string[]>();

    useEffect(() => {
        const getAllRepos = async () => {
            const reposList = await API.fetchAllRepos();
            setRepoNames(reposList.map((element: any): string => element.name));
        }
        getAllRepos();

    }, []);

    useEffect(() => {
        const getRepoReadme = async () => {
            try {
                const reposPromise = portfolioReposNames.map(async name => await API.fetchRepoReadme(name));
                const repos = await Promise.all(reposPromise);
                setRepos(repos)
            } catch {
                console.log('error')
            }
            const a = await API.fetchRepoReadme('bedroom-rivals');
            console.log(a)
        }

        getRepoReadme();
    }, [portfolioReposNames]);

    useEffect(() => {
        const getPortfolioRepos = async () => {
            const isPortfolioRepo = await Promise.all(
                repoNames.map(async name => {
                    const repo = await API.fetchRepo(name);
                    return repo.topics.includes('portfolio')
                })
            );
            const namesOfPortfolioRepos = repoNames.filter((_, i) => isPortfolioRepo[i]);
            setPortfolioReposNames(namesOfPortfolioRepos);
        };
        getPortfolioRepos()
    }, [repoNames])
    return { repos };
}