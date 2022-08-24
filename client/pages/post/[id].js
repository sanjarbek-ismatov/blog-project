import React from "react";
import style from "../../styles/Post.module.css";
import Image from "next/image";

import { NextSeo } from "next-seo";
import Head from "next/head";
const Post = ({ data }) => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="https://i.ibb.co/1XTN2WY/icon.png" />
      </Head>
      <NextSeo
        title={`${data[0].title}`}
        description={"My blog -  maqolalar sayti"}
        openGraph={{
          type: "url",
          description: "My blog -  maqolalar sayti",
          title: `${data[0].title}`,
          images: [
            {
              url: `${data[0].image}`,
            },
          ],
        }}
      />
      {data.map((e, i) => {
        return (
          <div key={i} className={style.post}>
            <h1 key={i} className={style.h1}>
              {e.title}
            </h1>
            <div className={style.postImage}>
              <Image
                className={style.image}
                loader={() => e.image}
                src={e.image}
                alt="post-image"
                width={1000}
                height={550}
                layout="responsive"
              />
            </div>
            <div className={style.content}>
              <p className={style.p}>{e.content}</p>
            </div>
            <div className={style.lowerContent}>
              <p>{new Date(e.date).toLocaleTimeString()}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
export async function getServerSideProps({ params }) {
  const id = params.id.replace(/ /g, "-");

  const res = await fetch(
    `https://blog-api-uz.herokuapp.com/api/get/post/`
  ).then((res) => res.json());

  const data = res.filter(
    (e) => e.title.replace(/ /g, "-").toLowerCase() === id
  );

  return {
    props: {
      data: data,
    },
  };
}
