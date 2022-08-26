import React from "react";
import style from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        Sanjarbek Ismatov <br /> {new Date().getFullYear()}
      </p>
      <p className={style.p}>Barcha huquqlar himoyalangan!</p>
    </footer>
  );
};

export default Footer;
