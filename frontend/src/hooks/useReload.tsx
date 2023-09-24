export const useReload = () => {
  const reloadApplication = () => {
    window.location.reload();
  };

  return { reloadApplication };
};
