import React, { useState } from "react";
import style from "../../styles/Register.module.css";
import Axios from "axios";
import useRouter from "next/router";
import Head from "next/head";
import Spinner from "../../components/Spinner";
const Create = () => {
  const router = useRouter;
  const [error, setError] = useState("");
  const [auth, setAuth] = useState("Formani to'ldiring");
  const postUser = async (body) => {
    await Axios.post(`https://blog-project-haoi.onrender.com/api/login`, body)
      .then((data) => {
        setAuth(data.data);
        localStorage.setItem("token", data.headers["x-token"]);
        setError("");
        if (data.data) {
          router.push("/");
        }
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
    postUser({
      email: e.target["0"].value,
      password: e.target["1"].value,
    });
  };
  return (
    <div className={style.main}>
      <Head>
        <title>Tizimga kirish</title>
      </Head>
      <form data-aos="fade-up" className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.h1}>Tizimga kirish sahifasi</h1>

        <input
          placeholder="Pochtangiz"
          className={style.input}
          type="email"
          name="email"
          autoComplete="off"
          required
        />

        <input
          placeholder="Parolingiz"
          className={style.input}
          type="password"
          name="password"
          min={8}
          autoComplete="off"
          required
        />
        <button className={style.button} type="submit">
          Tizimga kirish
        </button>
      </form>
      {!error && !auth && <Spinner />}
      {(error && <p>{error}</p>) || (auth && <p>{auth}</p>)}
    </div>
  );
};

export default Create;
