import style from "../../../styles/Blog.module.css";
import { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import Panigation from "../../../components/Panigation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getProfileMeThunk } from "../../../state/thunks/getProfileMeThunk";
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
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.token) {
      dispatch(getProfileMeThunk(localStorage.getItem("token")));
    }
  }, []);
  const state = useSelector((data) => data.getMe);

  function $(date) {
    return new Date(date);
  }
  const { page } = useRouter().query;

  const [text, setText] = useState("");

  return (
    <main>
      <Navbar
        profile={state}
        handleChange={(e) => setText(e.target.value)}
        value={text}
      />

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
                    <div smooth="true" className={style.post}>
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
