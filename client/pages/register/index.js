import React from "react";
import style from "../../styles/Register.module.css";
const create = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target["0"].value);
    console.log(e);
  };
  return (
    <div className={style.main}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.h1}>Ro'yhatdan o'tish sahifasi</h1>
        <input
          placeholder="Ismingiz"
          className={style.input}
          type="text"
          name="name"
          required
        />

        <input
          placeholder="Familyangiz"
          className={style.input}
          type="text"
          name="lastname"
          required
        />

        <input
          placeholder="Foydalanuvchi nomi"
          className={style.input}
          type="text"
          name="username"
          required
        />

        <input
          placeholder="Pochtangiz"
          className={style.input}
          type="email"
          name="email"
          required
        />

        <input
          placeholder="Parolingiz"
          className={style.input}
          type="password"
          name="password"
          min={8}
          required
        />
        <button className={style.button} type="submit">
          Ro'yhatdan o'tish
        </button>
      </form>
    </div>
  );
};

export default create;
