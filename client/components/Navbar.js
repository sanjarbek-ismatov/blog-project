import style from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHouse } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ handleChange, value, profile }) => {
  return (
    <nav className={style.navDark}>
      <div className={style.inputContainer}>
        <FontAwesomeIcon icon={faSearch} className={style.searchIcon} />
        <input
          className={style.input}
          type="text"
          name="search"
          placeholder="Maqolani qidiring"
          onChange={handleChange}
          value={value}
          autoComplete="off"
        />
      </div>
      <a href="/">
        <FontAwesomeIcon className={style.icon} icon={faHouse} />
      </a>
      <div className={style.content}>
        {(profile && profile.profile.length !== 0 && (
          <a href={`/profile/me`}>
            <img
              className={style.profile}
              src={profile.profile.data.user.profile}
              title="profile"
            />
          </a>
        )) || <div className={style.profile}></div>}
      </div>
    </nav>
  );
};

export default Navbar;
