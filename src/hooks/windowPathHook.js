import React from "react";

export const useReactPath = () => {
  const [path, setPath] = React.useState(window.location.hash);
  const listenToPopstate = () => {
    const winPath = window.location.hash;
    setPath(winPath);
  };
  React.useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);
    return () => {
      window.removeEventListener("popstate", listenToPopstate);
    };
  }, []);
  return path;
};
