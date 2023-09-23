import { useState } from "react";
import { API_SEARCH_GPT } from "../utils/constants";

export const useProjectList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState<[] | null>(null);

  const fetchProjects = async (searchText?: string) => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    let apiUrl = API_SEARCH_GPT;
    if (searchText) {
      apiUrl += "?searchQuery=" + searchText;
    }

    try {
      const apiResult = await fetch(apiUrl);

      const data = await apiResult.json();

      if (!apiResult.ok) {
        throw new Error(data?.message || apiResult.statusText);
      }

      setProjects(data.data);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setIsError(true);
      setError(error?.message || "Something went wrong");
    }
  };

  return { projects, isLoading, isError, error, fetchProjects };
};
