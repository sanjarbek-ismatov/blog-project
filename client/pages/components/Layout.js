import React, { useEffect } from "react";
import useTheme from "./hooks/useTheme";

const Layout = ({ children }) => {
  const [theme, setTheme] = useTheme();
  useEffect(() => {
    console.log(theme);
  }, []);
  return <div>{children}</div>;
};

export default Layout;
