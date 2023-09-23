import { Project } from "../utils/types";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;
  return (
    <div className="border rounded-md py-4 px-4 m-2 min-w-[250px] grow max-w-[350px] shadow-md hover:border-gray-400 hover:shadow-lg cursor-pointer">
      <div className="my-1 border-b-2 pb-2">
        <p className="text-gray-400">Title</p>
        <h2 className="font-bold">{project?.title}</h2>
      </div>
      <div className="my-1">
        <p className="text-gray-400">Technologies</p>
        <h2 className="">{project?.technologies || "---"}</h2>
      </div>

      <div className="my-1">
        <p className="text-gray-400">Skillset:</p>
        <div className="pl-2">
          <div className="my-1">
            <p className="text-gray-400">Frontend</p>
            <h2 className="">{project?.skills?.frontend || "---"}</h2>
          </div>
          <div className="my-1">
            <p className="text-gray-400">Backend</p>
            <h2 className="">{project?.skills?.backend || "---"}</h2>
          </div>
          <div className="my-1">
            <p className="text-gray-400">Database</p>
            <h2 className="">{project?.skills?.database || "---"}</h2>
          </div>
          <div className="my-1">
            <p className="text-gray-400">Infrastructure</p>
            <h2 className="">{project?.skills?.infrastructure || "---"}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
