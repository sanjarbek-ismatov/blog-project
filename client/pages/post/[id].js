import React from "react";
import style from "../../styles/Post.module.css";
import Image from "next/image";

import { NextSeo } from "next-seo";

const Post = ({ data }) => {
  return (
    <>
      <NextSeo
        title={`${data[0].title}`}
        description={"My blog -  maqolalar sayti"}
        additionalMetaTags={[
          {
            name: "keywords",
            content: `${data[0].title}, My blog -  maqolalar sayti, MyBlog, Maqola`,
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://my-blog-uz.vercel.app/",
          description: "My blog -  maqolalar sayti",
          title: `${data[0].title}`,

          images: [
            {
              url: data[0].image,
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
    </>
  );
};

export default Post;
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://blog-api-uz.herokuapp.com/api/get/post/${params.id}`
  ).then((res) => res.json());

  return {
    props: {
      data: res,
    },
  };
}
