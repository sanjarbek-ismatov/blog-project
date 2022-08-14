import React, { useEffect, useState } from "react";
import Head from "next/head";
import style from "../../styles/Setting.module.css";
import useTheme from "../components/hooks/useTheme";
import Switch from "react-switch";
const Index = () => {
  const [theme, setTheme] = useTheme();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(localStorage.theme === "dark" ? true : false);
  }, [theme]);

  return (
    <div>
      <Head>
        <title>Sozlamalar</title>
      </Head>
      <main className={style.main}>
        <div className={style.left}>
          <ul className={style.ul}>
            <li>Dark theme </li>
          </ul>
        </div>
        <div className={style.right}>
          <ul className={style.ul}>
            <li>
              {" "}
              <Switch
                onChange={() =>
                  localStorage.theme === "light"
                    ? setTheme("dark")
                    : setTheme("light")
                }
                checked={checked}
              />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Index;
