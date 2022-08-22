import React from "react";
import style from "../styles/Spinner.module.css";
const Spinner = () => {
  return (
    <div className={style.main}>
      <span className={style.spinner}></span>
    </div>
  );
};

export default Spinner;
