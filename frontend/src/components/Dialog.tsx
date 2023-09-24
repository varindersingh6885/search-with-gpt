export const Dialog = (props: { children?: React.ReactNode }) => {
  return (
    <div className="h-[100vh] w-[100vw] z-50 overflow-auto bg-gray-50 bg-opacity-50 absolute top-0 left-0 flex justify-center items-center">
      {props.children}
    </div>
  );
};
