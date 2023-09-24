import { createContext, Dispatch } from "react";
import { Project } from "../utils/types";

type ProjectDetailViewModalContextProps = {
  project: Project | null;
  setProject: Dispatch<React.SetStateAction<Project | null>> | null;
};

export const ProjectDetailViewModalContext =
  createContext<ProjectDetailViewModalContextProps>({
    project: null,
    setProject: null,
  });
