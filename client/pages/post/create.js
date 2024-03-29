import React, { useEffect, useState } from "react";
import style from "../../styles/Register.module.css";
import { useDispatch, useSelector } from "react-redux";
import useRouter from "next/router";
import Head from "next/head";
import Link from "next/link";
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

    const form = new FormData();
    form.append("image", e.target["0"].files[0]);
    form.append("title", e.target["1"].value);
    form.append("content", e.target["2"].value);
    dispatch(createPostThunk(form));
  };
  useEffect(() => {
    state.status ? setAuth("Sahifa yaratildi") && setError(false) : "";
    setTimeout(() => {
      state.status ? router.replace("/blog/1") : "";
    }, 1000);
  }, [state]);
  useEffect(() => {
    if (!localStorage.token) {
      router.replace("/login");
    }
  }, []);
  return (
    <div className={style.main}>
      <Head>
        <title>Maqola yozish</title>
      </Head>
      <form
        encType="multipart/form-data"
        data-aos="fade-up"
        className={style.form}
        onSubmit={handleSubmit}
      >
        <h1 className={style.h1}>Maqola yozish sahifasi</h1>

        <input
          placeholder="Full HD rasm"
          className={style.input}
          type="file"
          name="image"
          autoComplete="off"
          accept="image/*"
          required
        />

        <input
          placeholder="Maqola uchun sarlavha"
          className={style.input}
          type="test"
          name="title"
          autoComplete="off"
          required
        />
        <textarea
          placeholder="Maqola uchun maydon. Qo'shimcha imkoniyatlar uchun HTML holatda ham kiritishingiz mumkin."
          className={style.area}
          type="text"
          autoComplete="off"
          required
        />

        <button className={style.button} type="submit">
          Yaratish
        </button>
      </form>
      <Link href="/docs/maqola">
        <a className={style.link}>HTML uchun qo'llanma</a>
      </Link>
      {!error && !auth && <Spinner />}
      {(error && <p>{error}</p>) || (auth && <p>{auth}</p>)}
    </div>
  );
};

export default Create;
