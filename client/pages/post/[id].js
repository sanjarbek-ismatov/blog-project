import React from "react";
import style from "../../styles/Post.module.css";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
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
                loader={() => e.image}
                src={e.image}
                alt="post-image"
                width={1000}
                height={550}
                layout="responsive"
              />
            </div>
            <div className={style.content}>
              <ReactMarkdown
                className={style.p}
                children={e.content}
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[[remarkGfm]]}
              />
            </div>
            <div className={style.lowerContent}>
              <img className={style.profile} src={data.user.profile} />
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
  const res = await fetch(
    `https://blog-api-uz.herokuapp.com/api/get/post/page/${params.id}`
  ).then((res) => res.json());

  return {
    props: {
      data: res,
    },
  };
}
