import { Project } from "../utils/types";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;
  return (
    <div className="border rounded-md py-4 px-4 w-full min-w-[250px] bg-white shadow-md hover:border-gray-400 hover:shadow-lg cursor-pointer">
      <div className="my-1 border-b-2 border-dashed pb-2">
        <p className="text-gray-400 text-sm">Title</p>
        <h2 className="font-bold text-green-delight text-xl">
          {project?.title}
        </h2>
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
