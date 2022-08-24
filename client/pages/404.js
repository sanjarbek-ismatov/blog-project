import React from "react";
import style from "../styles/Error.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
const Error = () => {
  return (
    <div className={style.div}>
      <h1>
        Kechirasiz Siz mavjud emas sahifadasiz!{" "}
        <FontAwesomeIcon icon={faTriangleExclamation} />
      </h1>
    </div>
  );
};

export default Error;
