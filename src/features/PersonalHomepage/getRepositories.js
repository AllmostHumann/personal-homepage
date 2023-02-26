import axios from "axios";

const repoURL = "https://api.github.com/users/AllmostHumann/repos";

export const getRepositories = () =>
  axios.get(repoURL).then((response) => response.data);
