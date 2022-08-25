import React, { useEffect, useState } from "react";
import style from "../../styles/Register.module.css";
import { useDispatch, useSelector } from "react-redux";
import useRouter from "next/router";
import Head from "next/head";
import { createPostThunk } from "../../state/thunks/createPostThunk";
import Spinner from "../../components/Spinner";
const Create = () => {
  const [error, setError] = useState("");
  const [auth, setAuth] = useState("Formani to'ldiring");
  const dispatch = useDispatch();
  const router = useRouter;
  const state = useSelector((data) => data.createPost);
  const handleSubmit = (e) => {
    setAuth("");
    setError("");
    e.preventDefault();
    const body = {
      image: e.target["0"].value,
      title: e.target["1"].value,
      content: e.target["2"].value,
    };
    dispatch(createPostThunk(body));
  };
  useEffect(() => {
    state.status ? setAuth("Sahifa yaratildi") && setError(false) : "";
    setTimeout(() => {
      state.status ? router.replace("/blog/1") : "";
    }, 1000);
  }, [state]);
  return (
    <div className={style.main}>
      <Head>
        <title>Maqola yozish</title>
      </Head>
      <form
        smooth="true"
        delay="1000"
        className={style.form}
        onSubmit={handleSubmit}
      >
        <h1 className={style.h1}>Maqola yozish sahifasi</h1>

        <input
          placeholder="Maqola uchun rasm joylashtiring"
          className={style.input}
          type="url"
          name="image"
          required
        />

        <input
          placeholder="Maqola uchun sarlavha"
          className={style.input}
          type="test"
          name="title"
          required
        />
        <textarea
          placeholder="Maqola uchun maydon"
          className={style.input}
          type="text"
          required
        />

        <button className={style.button} type="submit">
          Yaratish
        </button>
      </form>
      {!error && !auth && <Spinner />}
      {(error && <p>{error}</p>) || (auth && <p>{auth}</p>)}
    </div>
  );
};

export default Create;
