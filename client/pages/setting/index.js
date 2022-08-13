import React from "react";
import Head from "next/head";
import style from "../../styles/Setting.module.css";
const index = () => {
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
            <li>Profile</li>
          </ul>
        </div>
        <div className={style.right}>
          <ul className={style.ul}>
            <li>
              Mavzu:{" "}
              <select className={style.select}>
                <option value="light">Yorug'</option>
                <option value="dark">Qorong'u</option>
              </select>
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
