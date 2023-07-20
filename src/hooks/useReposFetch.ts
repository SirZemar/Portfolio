import { useEffect, useState } from "react";
import API from "../API";

export const useReposFetch = () => {
    const [repoNames, setRepoNames] = useState<string[]>([]);
    const [portfolioReposNames, setPortfolioReposNames] = useState<string[]>([]);
    const [repos, setRepos] = useState<string[]>();
    const [loadingStatus, setLoadingStatus] = useState<any[]>();
    const [reposCount, setReposCount] = useState<number>();


    useEffect(() => {
        try {
          const getAllRepos = async () => {
            const reposList = await API.fetchAllRepos();
            setRepoNames(reposList.map((element: any): string => element.name));
          };
          getAllRepos();
        } catch (error) {
          console.log("Failed to fetch all repos: ", error);
        }

    }, []);

    useEffect(() => {

        const getRepoReadme = async () => {
            try {
                const reposPromise = portfolioReposNames.map(async name => await API.fetchRepoReadme(name));
                let reposLoading;
                const reposArr: any = [];
                while (reposPromise.length) {

                    reposLoading = Array.from({ length: reposPromise.length }, () => true);
                    console.log(reposLoading)
                    setLoadingStatus(reposLoading);
                    const repoIndex = await Promise.race(
                        reposPromise.map((p, i) => p.then(() => i).catch(() => -1))
                    );

                    if (repoIndex === -1) break;

                    reposLoading[repoIndex] = false;

                    const repo = await reposPromise[repoIndex];

                    reposPromise.splice(repoIndex, 1);
                    reposLoading.splice(repoIndex, 1);
                    setRepos([repo]);

                    reposArr.push(repo);

                    // await timeout(100);
                }
                setReposCount(reposArr.length);
                console.log(reposLoading)
            } catch {
                console.log('error')
            }
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
    return { repos, loadingStatus, reposCount };
}