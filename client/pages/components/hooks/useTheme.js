import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light"
  );
  useEffect(() => {
    document.getElementById("__next").setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, setTheme];
};
