import React from "react";
import style from "../../styles/Panigation.module.css";
const Panigation = ({ count }) => {
  return (
    <div>
      {}
      <div className={style.panigation}>{count}</div>
    </div>
  );
};

export default Panigation;
