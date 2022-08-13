import Head from "next/head";
import style from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

export async function getStaticProps() {
  const data = await fetch(
    "https://blog-api-uz.herokuapp.com/api/get/post"
  ).then((res) => res.json());
  return {
    props: {
      data: data,
    },
  };
}

const index = ({ data }) => {
  function $(date) {
    return new Date(date);
  }
  const [hydrate, sethydrate] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    sethydrate(true);
    if (typeof window !== "undefined") {
      localStorage.getItem("theme")
        ? ""
        : localStorage.setItem("theme", "light");
    }
  }, []);
  if (!hydrate) return null;
  return (
    <main theme={localStorage.getItem("theme")}>
      <Navbar handleChange={(e) => setText(e.target.value)} value={text} />
      <Head>
        <title>MyBlog</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <main>
        {data
          .filter((e) => e.title.toLowerCase().includes(text))
          .map((e, i) => {
            return (
              <div key={i} className={style.post}>
                <img className={style.image} src={e.image} />
                <div className={style.desc}>
                  <h1>{e.title}</h1>
                  <p>
                    {$(e.date).toDateString()}, {$(e.date).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            );
          })}
      </main>
    </main>
  );
};

export default index;
