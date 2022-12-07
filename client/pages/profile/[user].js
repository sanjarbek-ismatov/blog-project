import style from "../../styles/Profile.module.css";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
const User = ({ user }) => {
  return (
    <div className={style.main}>
      <NextSeo
        title={`${user.user.firstname} ${user.user.lastname}`}
        description={`${user.user.firstname} ${user.user.lastname} - MyBlog`}
        additionalMetaTags={[
          {
            name: "keywords",
            content: `${user.user.firstname} ${user.user.lastname}, My blog -  maqolalar sayti, MyBlog, Maqola`,
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://my-blog-uz.vercel.app/",
          title: `${user.user.firstname} ${user.user.lastname}`,
          description: `${user.user.firstname} ${user.user.lastname} - MyBlog`,
          images: [
            {
              url: user.user.profile,
            },
          ],
        }}
      />
      <Head>
        <meta
          name="keywords"
          content={`${user.user.firstname}, ${user.user.lastname}, ${user.user.firstname} ${user.user.lastname} myblog, ${user.user.username}, myblog, maqola, maqolalar, uzbekistan, uz, blog, sayt`}
        />
      </Head>
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
    `https://blog-project-haoi.onrender.com/api/profile/${params.user}`
  ).then((res) => res.json());
  return {
    props: {
      user: data,
    },
  };
}
