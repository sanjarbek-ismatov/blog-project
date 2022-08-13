import { createContext } from "react";
export const themeContext = createContext("light");
export const toggleTheme = () => {
  localStorage.getItem("theme") === "light"
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");
};
