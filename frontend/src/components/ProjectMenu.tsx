import { ProjectCard } from "./ProjectCard";
import { projectList } from "../utils/dummyData.js";

export const ProjectMenu = () => {
  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center">
        {projectList &&
          projectList?.map((project) => {
            return <ProjectCard project={project} />;
          })}
      </div>
    </div>
  );
};
