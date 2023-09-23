import { useState } from "react";

export const useProjectList = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async (searchText?: string) => {
    let apiUrl = "https://api-search-with-gpt.onrender.com/projects";
    if (searchText) {
      apiUrl += "?searchQuery=" + searchText;
    }
    const apiResult = await fetch(apiUrl);

    const data = await apiResult.json();

    setProjects(data.data);
  };

  return { projects, fetchProjects };
};
