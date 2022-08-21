import React, { useState } from "react";
import style from "../../styles/Register.module.css";
import Axios from "axios";
import useRouter from "next/router";
import Head from "next/head";
const Create = () => {
  const router = useRouter;
  const [error, setError] = useState("");
  const [auth, setAuth] = useState("");
  const postUser = async (body) => {
    await Axios.post("https://blog-api-uz.herokuapp.com/api/post", body)
      .then((data) => {
        setAuth(data.data);
        setError("");
        router.push("/");
      })
      .catch((err) => {
        setError(err.response.data);
        setAuth("");
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postUser({
      firstname: e.target["0"].value,
      lastname: e.target["1"].value,
      username: e.target["2"].value,
      email: e.target["3"].value,
      password: e.target["4"].value,
    });
  };
  return (
    <div className={style.main}>
      <Head>
        <title>Ro'yhatdan o'tish</title>
      </Head>
      <form
        smooth="true"
        delay="1000"
        className={style.form}
        onSubmit={handleSubmit}
      >
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
      {(error && <p>{error}</p>) || (auth && <p>{auth}</p>)}
    </div>
  );
};

export default Create;
