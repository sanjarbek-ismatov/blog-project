import Head from "next/head";
import style from "../../styles/Home.module.css";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Panigation from "../components/Panigation";
export async function getServerSideProps({ params }) {
  const { page } = params;
  const data = await fetch(
    `https://blog-api-uz.herokuapp.com/api/get/post/${page}`
  ).then((res) => res.json());

  return {
    props: {
      data: data,
    },
  };
}

const Index = ({ data }) => {
  function $(date) {
    return new Date(date);
  }
  const [hydrate, sethydrate] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    sethydrate(true);
  }, []);
  if (!hydrate) return null;

  return (
    <main>
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
        {data.length === 0 ? (
          <h1 className={style.post}>
            Kechirasiz Siz mavjud emas sahifadasiz!
          </h1>
        ) : (
          data
            .filter((e) => e.title.toLowerCase().includes(text))
            .map((e, i) => {
              return (
                <div key={i} className={style.post}>
                  <Image
                    loader={() => e.image}
                    src={e.image}
                    className={style.image}
                    width={1000}
                    height={600}
                    alt="blog image"
                  />
                  <div className={style.desc}>
                    <h1>{e.title}</h1>
                    <p>
                      {$(e.date).toDateString()},{" "}
                      {$(e.date).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              );
            })
        )}
      </main>
      <Panigation data={data} />
    </main>
  );
};

export default Index;
