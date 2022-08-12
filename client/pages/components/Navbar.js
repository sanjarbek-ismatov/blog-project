import React from "react";
import style from "../../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className={style.nav}>
      <h1>MyBlog</h1>
      <div className={style.content}>
        <img
          className={style.profile}
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />
        <FontAwesomeIcon className={style.icon} icon={faGear} />
      </div>
    </nav>
  );
};

export default Navbar;
