const gitHubApi = {
    fetchRepoReadme: async (name: string): Promise<any> => {
        const endpoint = `https://raw.githubusercontent.com/SirZemar/${name}/master/README.md`
        return await (await fetch(endpoint)).text();
    },

    fetchAllRepos: async (): Promise<any> => {
        const endpoint = 'https://api.github.com/users/SirZemar/repos';
        return await (await fetch(endpoint)).json();
    },

    fetchRepo: async (name: string): Promise<any> => {
        const endpoint = `https://api.github.com/repos/SirZemar/${name}`;
        return await (await fetch(endpoint)).json();
    }
};

export default gitHubApi;