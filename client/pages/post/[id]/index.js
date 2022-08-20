import React from "react";
import style from "../../../styles/Post.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

import NetworkMessage from "../../../components/NetworkMessage";
import Axios from "axios";
import Head from "next/head";
const Post = ({ data, metadata }) => {
  // async function handleLike(id, oldcount) {
  //   await Axios.put(
  //     `https://blog-api-uz.herokuapp.com/api/get/post/update/${id}`,

  //     {
  //       likeCount: oldcount + 1,
  //     },
  //     {
  //       headers: {
  //         "x-token":
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmVkMmZmYmEwMGM1MWUzZjkxOGJhYjMiLCJpYXQiOjE2NjA4ODgwMTZ9.REok0nqR6yPFh19SYrvpb88s9QrFqx034Upm9Ybps0U",
  //       },
  //     }
  //   );
  // }
  // useEffect(() => {
  //   handleLike(data[0]._id, data[0].likeCount);
  // }, []);
  const [hydrate, sethydrate] = useState(false);
  useEffect(() => {
    sethydrate(true);
  }, []);
  if (!hydrate) return null;
  if (!data) return <NetworkMessage />;
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content="My blog -  maqolalar sayti" />
        <meta property="og:image" content={metadata.image} />
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0K1yHyIucYxVo-_ggCWuNU-Vnhtsh0GqZXYg6sQ-ksTd0tkRJ38mRkNAhLfsRP-RbDg&usqp=CAU"
        />
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
            {/* <FontAwesomeIcon className={style.icon} icon={faHeart} />
        <span className={style.icon}>{e.likeCount}</span> */}
          </div>
        </div>
      ))}
    </>
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
      metadata: {
        title: data[0].title,
        image: data[0].image,
      },
    },
  };
}
