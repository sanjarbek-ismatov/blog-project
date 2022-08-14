import React, { useEffect, useState } from "react";
import Head from "next/head";
import style from "../../styles/Setting.module.css";
import { useTheme } from "../components/hooks/useTheme";
import Switch from "react-switch";
const index = () => {
  // const checked = () => {
  //   if (typeof window !== "undefined") {
  //     return localStorage.theme === "dark" ? true : false;
  //   }
  // };
  // console.log(checked);
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
            <li>Mavzu</li>
            <li>Foydalanish qobilyati</li>
          </ul>
        </div>
        <div className={style.right}>
          <ul className={style.ul}>
            <li>
              Mavzu:{" "}
              <Switch
                onChange={() =>
                  localStorage.theme === "light"
                    ? setTheme("dark")
                    : setTheme("light")
                }
                checked={checked}
              />
            </li>
            <li>
              Font o'lchami:{" "}
              <select className={style.select}>
                <option value="smaller">Kichkina</option>
                <option value="normal">Normal</option>
                <option value="bigger">Katta</option>
              </select>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default index;
