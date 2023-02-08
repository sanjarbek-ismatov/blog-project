import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getProfileMeThunk } from "../../state/thunks/getProfileMeThunk";
import { useRouter } from "next/router";
import Head from "next/head";
import style from "../../styles/Profile.module.css";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { deletePostThunk } from "../../state/thunks/deletePostThunk";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerUrl } from "helper/getServerUrl";
const Me = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((data) => data.getMe);
  const deleteStatus = useSelector((data) => data.deletePost);
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("token")) {
      dispatch(getProfileMeThunk(localStorage.getItem("token")));
    }
  }, []);
  function handleDeletePost(e) {
    dispatch(deletePostThunk(e));
  }
  if (deleteStatus.status) {
    router.reload();
  }
  if (state && state.profile.length !== 0) {
    const user = state.profile.data;
    return (
      <div className={style.main}>
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
            src={`${getServerUrl()}/image/${user.user.profile}`}
            loader={() => `${getServerUrl()}/image/${user.user.profile}`}
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
        <main>
          <div className={style.posts}>
            <h1>Yozgan maqolalari:</h1>
            <ul className={style.ul}>
              {user.posts.map((e, i) => {
                return (
                  <li key={i}>
                    <Link
                      href={`/post/${e.title.toLowerCase().replace(/ /g, "-")}`}
                    >
                      <a className={style.h1}>{e.title}</a>
                    </Link>
                    <FontAwesomeIcon
                      onClick={() => handleDeletePost(e._id)}
                      className={style.icon}
                      icon={faTrashCan}
                    />
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
