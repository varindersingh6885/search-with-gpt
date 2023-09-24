import { useContext } from "react";
import { Project } from "../utils/types";
import { ProjectDetailViewModalContext } from "../hooks/useProjectDetailViewContext";

type ProjectDetailViewProps = {
  project: Project;
};

export const ProjectDetailView = (props: ProjectDetailViewProps) => {
  const { project } = props;
  const projectDetailViewContext = useContext(ProjectDetailViewModalContext);

  const updateProjectDetailViewModal = () => {
    projectDetailViewContext.setProject &&
      projectDetailViewContext?.setProject(null);
  };
  return (
    <div className="border rounded-md py-4 px-4 w-full min-w-[250px] h-[100%] overflow-auto bg-white shadow-md">
      <div className="flex justify-between items-start">
        <div className="my-1 border-b-2 border-dashed pb-2">
          <p className="text-gray-400 text-sm">Title</p>
          <h2 className="font-bold text-green-delight text-xl">
            {project?.title}
          </h2>
        </div>
        <button
          className="py-2 px-4 border rounded-lg font-bold bg-gray-100 hover:bg-gray-200"
          title="close"
          onClick={updateProjectDetailViewModal}
        >
          X
        </button>
      </div>

      <div className="my-1 p-1">
        <div className="my-1">
          <p className="text-gray-400">Technologies</p>
          <span className="pl-2 font-semibold">
            {project?.technologies || "---"}
          </span>
        </div>
        <div className="my-1">
          <p className="text-gray-400">Frontend Skills</p>
          <span className="pl-2 font-semibold">
            {project?.skills?.frontend || "---"}
          </span>
        </div>
        <div className="my-1">
          <p className="text-gray-400">Backend Skills</p>
          <span className="pl-2 font-semibold">
            {project?.skills?.backend || "---"}
          </span>
        </div>
        <div className="my-1">
          <p className="text-gray-400">Database Skills</p>
          <span className="pl-2 font-semibold">
            {project?.skills?.database || "---"}
          </span>
        </div>
        <div className="my-1">
          <p className="text-gray-400">Infrastructure Skills</p>
          <span className="pl-2 font-semibold">
            {project?.skills?.infrastructure || "---"}
          </span>
        </div>
      </div>
    </div>
  );
};
