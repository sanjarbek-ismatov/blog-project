import React from "react";
import style from "../../styles/Post.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import NetworkMessage from "../../components/NetworkMessage";

import Head from "next/head";
const Post = ({ data, metadata }) => {
  const [hydrate, sethydrate] = useState(false);
  useEffect(() => {
    sethydrate(true);
  }, []);
  if (!hydrate) return null;
  if (!data) return <NetworkMessage />;
  return (
    <div>
      <NextSeo
        title={metadata.title}
        description="My blog -  maqolalar sayti"
        openGraph={{
          type: "website",
          title: metadata.title,
          description: "My blog -  maqolalar sayti",
          images: [
            {
              url: metadata.image,
              width: "800",
              height: "600",
              alt: metadata.title,
            },
          ],
        }}
      />
      <Head>
        {/* <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content="My blog -  maqolalar sayti" />
        <meta property="og:image" content={metadata.image} /> */}
        <link rel="shortcut icon" href="https://i.ibb.co/1XTN2WY/icon.png" />
      </Head>

      {data.map((e, i) => (
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
      ))}
    </div>
  );
};

export default Post;
export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(
    `https://blog-api-uz.herokuapp.com/api/get/post/`
  ).then((res) => res.json());

  const data = res.filter(
    (e) => e.title.replace(/ /g, "-").toLowerCase() === id
  );

  return {
    props: {
      data: data,
      metadata: {
        title: data[0].title,
        image: data[0].image,
      },
    },
  };
}
export async function getStaticPaths() {
  const response = await fetch(
    "https://blog-api-uz.herokuapp.com/api/get/post/"
  );
  const data = await response.json();
  const paths = data.map((e, i) => {
    return {
      params: {
        id: `${e.title.replace(/ /g, "-").toLowerCase()}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
