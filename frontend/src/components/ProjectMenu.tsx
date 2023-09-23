import { useEffect } from "react";
import { Project } from "../utils/types.js";
import { ProjectCard } from "./ProjectCard";
import { SearchBar } from "./SearchBar.js";
import { useProjectList } from "./hooks/userProjectsList.js";

export const ProjectMenu = () => {
  const { projects, fetchProjects } = useProjectList();

  useEffect(() => {
    fetchProjects();
  }, []);

  const onSearchHandler = (searchText: string) => {
    fetchProjects(searchText);
  };

  return (
    <div className="p-4">
      <div>
        <SearchBar onSubmit={onSearchHandler} />
      </div>
      <div className="flex flex-wrap justify-center">
        {projects &&
          projects?.map((project: Project) => {
            return <ProjectCard key={project.title} project={project} />;
          })}
      </div>
    </div>
  );
};
