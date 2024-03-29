import React from "react";
import style from "../../styles/Post.module.css";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { getServerUrl } from "helper/getServerUrl";

const Post = ({ data }) => {
  return (
    <>
      <NextSeo
        title={`${data.result[0].title}`}
        description={"My blog -  maqolalar sayti"}
        additionalMetaTags={[
          {
            name: "keywords",
            content: `${data.result[0].title}, My blog -  maqolalar sayti, MyBlog, Maqola`,
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://my-blog-uz.vercel.app/",
          description: "My blog -  maqolalar sayti",
          title: `${data.result[0].title}`,

          images: [
            {
              url: data.result[0].image,
            },
          ],
        }}
      />
      <Head>
        <meta
          name="keywords"
          content={`${data.result[0].title}, ${data.result[0].title} my blog uz, myblog, maqola, maqolalar, uzbekistan, uz, blog, sayt`}
        />
      </Head>
      {data.result.map((e, i) => {
        return (
          <div key={i} className={style.post}>
            <h1 key={i} className={style.h1}>
              {e.title}
            </h1>
            <div className={style.postImage}>
              <Image
                className={style.image}
                loader={() => `${getServerUrl()}/image/${e.image}`}
                src={`${getServerUrl()}/image/${e.image}`}
                alt="post-image"
                width={1000}
                height={550}
                layout="responsive"
              />
            </div>

            <div
              className={style.content}
              dangerouslySetInnerHTML={{
                __html: e.content,
              }}
            ></div>

            <div className={style.lowerContent}>
              <img
                className={style.profile}
                src={`${getServerUrl()}/image/${data.user.profile}`}
              />
              <Link href={`/profile/${data.user.username}`}>
                <a>
                  {data.user.firstname} {data.user.lastname}
                </a>
              </Link>
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
  console.log(params.id);
  const res = await fetch(
    `${getServerUrl()}/api/get/post/page/${params.id}`
  ).then((res) => res.json());
  if (!res) {
    return {
      props: {
        data: null,
      },
    };
  }
  return {
    props: {
      data: res,
    },
  };
}
