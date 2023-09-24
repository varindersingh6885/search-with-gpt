import { useContext } from "react";
import { ProjectDetailViewModalContext } from "../hooks/useProjectDetailViewContext";
import { ProjectDetailView } from "./ProjectDetailView";

export const ProjectDetailViewModal = () => {
  const projectDetailContext = useContext(ProjectDetailViewModalContext);

  return (
    <>
      {projectDetailContext?.project && (
        <div className="h-[100vh] w-[100vw] z-50 p-10 overflow-auto bg-gray-600 bg-opacity-60 absolute top-0 left-0 flex justify-center items-center">
          <ProjectDetailView project={projectDetailContext.project} />
        </div>
      )}
    </>
  );
};
