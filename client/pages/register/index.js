import React, { useState } from "react";
import style from "../../styles/Register.module.css";
import Axios from "axios";
import useRouter from "next/router";
import Head from "next/head";
import Spinner from "../../components/Spinner";
import { getServerUrl } from "helper/getServerUrl";
const Create = () => {
  const router = useRouter;
  const [error, setError] = useState("");
  const [auth, setAuth] = useState("Formani to'ldiring");
  const postUser = async (body) => {
    await Axios.post(`${getServerUrl()}/api/post`, body)

      .then((data) => {
        setAuth(data.data);
        setError("");
        router.replace("/login");
      })
      .catch((err) => {
        setError(err.response.data);
        setAuth("");
      });
  };
  const handleSubmit = (e) => {
    setAuth("");
    setError("");
    e.preventDefault();
    const form = new FormData();
    form.append("firstname", e.target["0"].value);
    form.append("lastname", e.target["1"].value);
    form.append("username", e.target["2"].value);
    form.append("email", e.target["3"].value);
    form.append("password", e.target["4"].value);
    form.append("image", e.target["5"].files[0]);
    postUser(form);
  };
  return (
    <div className={style.main}>
      <Head>
        <title>Ro'yhatdan o'tish</title>
      </Head>

      <form data-aos="fade-up" className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.h1}>Ro'yhatdan o'tish</h1>
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
        <input
          placeholder="Profile uchun rasm"
          className={style.input}
          type="file"
          name="image"
        />
        <button className={style.button} type="submit">
          Ro'yhatdan o'tish
        </button>
      </form>
      {!auth && !error && <Spinner />}
      {(error && <p>{error}</p>) || (auth && <p>{auth}</p>)}
    </div>
  );
};

export default Create;
