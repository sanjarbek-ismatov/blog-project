import style from "styles/Blog.module.css";
import { useState, useEffect } from "react";
import Navbar from "components/Navbar";
import Post from "components/Index/Post";
import Panigation from "components/Panigation";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getProfileMeThunk } from "state/thunks/getProfileMeThunk";
export async function getServerSideProps({ params }) {
  const { page } = params;
  const data = await fetch(`${process.env.SERVER_URL}/api/get/post/${page}`, {
    mode: "no-cors",
  }).then((res) => res.json());

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

      <main className={style.main}>
        {data.length === 0 ? (
          <h1 className={style.post}>
            Kechirasiz Siz mavjud emas sahifadasiz!
          </h1>
        ) : (
          data
            .filter((e) => e.title.toLowerCase().includes(text))
            .map((e, i) => {
              return <Post key={i} element={e} date={$} />;
            })
        )}
      </main>
      <Panigation data={data} />
    </main>
  );
};

export default Index;
