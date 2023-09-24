import { useState } from "react";
import { Header } from "./Header";
import { ProjectDetailViewModal } from "./ProjectDetailViewModal";
import { ProjectMenu } from "./ProjectMenu";
import { Project } from "../utils/types";
import { ProjectDetailViewModalContext } from "../hooks/useProjectDetailViewContext";

export const AppLayout = () => {
  const [detailViewProject, setDetailViewProject] = useState<Project | null>(
    null
  );

  return (
    <div className="overflow-auto h-full w-full bg-gray-delight">
      <Header />
      <ProjectDetailViewModalContext.Provider
        value={{ project: detailViewProject, setProject: setDetailViewProject }}
      >
        <ProjectMenu />
        <ProjectDetailViewModal></ProjectDetailViewModal>
      </ProjectDetailViewModalContext.Provider>
    </div>
  );
};
