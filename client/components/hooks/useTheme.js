import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "dark"
  );
  useEffect(() => {
    document.getElementById("__next").setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, setTheme];
};
export default useTheme;
