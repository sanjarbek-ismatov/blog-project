import React, { useEffect } from "react";
import useTheme from "./hooks/useTheme";

const Layout = ({ children }) => {
  const [theme, setTheme] = useTheme();

  return <div>{children}</div>;
};

export default Layout;
