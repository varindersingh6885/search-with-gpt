import { useEffect } from "react";
import { Project } from "../utils/types.js";
import { ProjectCard } from "./ProjectCard";
import { SearchBar } from "./SearchBar.js";
import { useProjectList } from "../hooks/userProjectsList.js";
import { Loader } from "./Loader.js";
import { Dialog } from "./Dialog.js";

export const ProjectMenu = () => {
  const { projects, fetchProjects, isLoading, isError, error } =
    useProjectList();

  useEffect(() => {
    fetchProjects();
  }, []);

  const onSearchHandler = (searchText?: string) => {
    fetchProjects(searchText);
  };

  return (
    <>
      {isLoading && (
        <Dialog>
          <Loader />
        </Dialog>
      )}
      <div className="p-4">
        <div>
          <SearchBar onSubmit={onSearchHandler} />
        </div>

        {isError && (
          <div className="px-8 mx-auto text-center">
            <p className="text-red-600 text-lg font-semibold">! {error}</p>
            <span>Please try again</span>
          </div>
        )}

        {!isError && (
          <div className="px-8 mx-auto grid grid-flow-row gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {projects?.length > 0 ? (
              projects?.map((project: Project) => {
                return <ProjectCard key={project.title} project={project} />;
              })
            ) : !isLoading ? (
              <div className="px-8 mx-auto text-center">
                <p className="text-red-600 text-lg font-semibold">
                  ! No matching projects found.
                </p>
                <span>Please try another search query.</span>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
};
