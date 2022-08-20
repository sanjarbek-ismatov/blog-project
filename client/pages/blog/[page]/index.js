import Head from "next/head";
import style from "../../../styles/Blog.module.css";
import { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import Panigation from "../../../components/Panigation";
import Link from "next/link";
import { useRouter } from "next/router";
export async function getServerSideProps({ params }) {
  const { page } = params;
  const data = await fetch(
    `https://blog-api-uz.herokuapp.com/api/get/post/${page}`,
    {
      mode: "no-cors",
    }
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
  const { page } = useRouter().query;
  return (
    <main>
      <Navbar handleChange={(e) => setText(e.target.value)} value={text} />
      <Head>
        <title>MyBlog {page} sahifa</title>
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
                <Link
                  key={i}
                  href={`/post/${e.title.toLowerCase().replace(/ /g, "-")}`}
                >
                  <a>
                    <div className={style.post}>
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
                  </a>
                </Link>
              );
            })
        )}
      </main>
      <Panigation data={data} />
    </main>
  );
};

export default Index;
