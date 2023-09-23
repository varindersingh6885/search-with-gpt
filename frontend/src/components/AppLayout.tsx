import { Header } from "./Header";
import { ProjectMenu } from "./ProjectMenu";

export const AppLayout = () => {
  return (
    <div className="overflow-auto h-full w-full bg-gray-delight">
      <Header />
      <ProjectMenu />
    </div>
  );
};
