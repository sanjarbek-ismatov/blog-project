import React from "react";
import style from "../../../styles/Post.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Post = ({ data }) => {
  async function handleLike(id, oldcount) {
    await fetch(`https://blog-api-uz.herokuapp.com/api/get/post/update/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        likeCount: 2,
      }),
      headers: new Headers({
        "x-token": "dfdfdsfsdfsfff",
        "Content-type": "application/json",
      }),
    })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  const [hydrate, sethydrate] = useState(false);
  useEffect(() => {
    sethydrate(true);
  }, []);
  if (!hydrate) return null;
  return data.map((e, i) => (
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
        <FontAwesomeIcon className={style.icon} icon={faHeart} />
        <span
          onClick={async () => await handleLike(e._id, e.likeCount)}
          className={style.icon}
        >
          {e.likeCount}
        </span>
      </div>
    </div>
  ));
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
