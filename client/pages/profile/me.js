// import React from "react";

// const me = ({ user }) => {
//   if (typeof window !== "undefined") {
//     console.log(user, localStorage.token);
//   }
//   return <div></div>;
// };

// export default me;
// export async function getServerSideProps() {
//   if (typeof window !== "undefined") {
//     const data = await fetch(
//       "https://blog-api-uz.herokuapp.com/api/profile/me",
//       {
//         method: "GET",
//         headers: {
//           ["x-token"]: localStorage.token,
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//     return {
//       props: {
//         user: data,
//       },
//     };
//   }
//   return {
//     props: {
//       user: "",
//     },
//   };
// }
// // const data = await axios.get(
// //     "https://blog-api-uz.herokuapp.com/api/profile/me",
// //     {
// //       headers: {
// //         ["x-token"]: localStorage.getItem("token"),
// //       },
// //     }
// //   );
// //   return {
// //     props: {
// //       user: data,
// //     },
// //   };
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getProfileMeThunk } from "../../state/thunks/getProfileMeThunk";
import { useRouter } from "next/router";
import Head from "next/head";
import style from "../../styles/Profile.module.css";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
const Me = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((data) => data.getMe);
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("token")) {
      dispatch(getProfileMeThunk(localStorage.getItem("token")));
    }
  }, []);
  if (state && state.profile.length !== 0) {
    const user = state.profile.data;
    return (
      <div>
        <Head>
          <link rel="shortcut icon" href="https://i.ibb.co/1XTN2WY/icon.png" />
        </Head>
        <NextSeo
          title={`${user.user.firstname} ${user.user.lastname}`}
          description={`${user.user.firstname} ${user.user.lastname} - MyBlog`}
          openGraph={{
            type: "url",
            title: `${user.user.firstname} ${user.user.lastname}`,
            description: `${user.user.firstname} ${user.user.lastname} - MyBlog`,
            images: [
              {
                url: user.user.profile,
              },
            ],
          }}
        />
        <header className={style.header}>
          <hr className={style.line} />
          <Image
            className={style.image}
            src={user.user.profile}
            loader={() => user.user.profile}
            width={200}
            height={200}
            loading="lazy"
          />
          <h1>
            {user.user.firstname} {user.user.lastname}
          </h1>
          <p>@{user.user.username}</p>
          <a href={`mailto:${user.user.email}`} className={style.email}>
            {user.user.email}
          </a>
        </header>
        <main className={style.main}>
          <div className={style.posts}>
            <h1>Yozgan maqolalari:</h1>
            <ul className={style.ul}>
              {user.posts.map((e, i) => {
                return (
                  <li>
                    <Link
                      href={`/post/${e.title.toLowerCase().replace(/ /g, "-")}`}
                    >
                      <a className={style.h1}>{e.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </main>
      </div>
    );
  } else {
    return <h1>Biroz kuting, yoki Siz tizimga kirmagansiz!</h1>;
  }
};

export default Me;
