import React from "react";
import Head from "next/head";
import style from "../../styles/Profile.module.css";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
const User = ({ user }) => {
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
                <li key={i}>
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
};

export default User;
export async function getServerSideProps({ params }) {
  const data = await fetch(
    `https://blog-api-uz.herokuapp.com/api/profile/${params.user}`
  ).then((res) => res.json());
  return {
    props: {
      user: data,
    },
  };
}
