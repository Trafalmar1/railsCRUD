import { useEffect } from "react";

const useTitle = (title: string) => {
  const prevTitle = document.title;
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return {};
};

export default useTitle;
