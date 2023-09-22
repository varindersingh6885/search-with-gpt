import { ProjectCard } from "./ProjectCard";
import { projectList } from "../utils/dummyData.js";
import { SearchBar } from "./SearchBar.js";

export const ProjectMenu = () => {
  return (
    <div className="p-4">
      <div>
        <SearchBar />
      </div>
      <div className="flex flex-wrap justify-center">
        {projectList &&
          projectList?.map((project) => {
            return <ProjectCard project={project} />;
          })}
      </div>
    </div>
  );
};
