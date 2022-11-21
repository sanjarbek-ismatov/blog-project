import React from "react";
import style from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faBookOpen,
  faRightFromBracket,
  faRightToBracket,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="myblog, maqola, maqolalar, uzbekistan, uz, blog, sayt"
        />
      </Head>
      <header>
        <nav className={style.nav}>
          <h1>My Blog</h1>
          <div className={style.div}>
            {typeof window !== "undefined" && !localStorage.token ? (
              <>
                <a href="/register">
                  <button className={style.button}>
                    {" "}
                    <FontAwesomeIcon className={style.icon} icon={faAt} />{" "}
                  </button>
                </a>
                <a href="/login">
                  <button className={style.button}>
                    {" "}
                    <FontAwesomeIcon
                      className={style.icon}
                      icon={faRightToBracket}
                    />{" "}
                  </button>
                </a>
              </>
            ) : (
              <button
                className={style.button}
                onClick={() => {
                  window && localStorage.removeItem("token");
                  router.reload(window.location.pathname);
                }}
              >
                <FontAwesomeIcon
                  className={style.icon}
                  icon={faRightFromBracket}
                />{" "}
              </button>
            )}
          </div>
        </nav>
      </header>

      <main className={style.main}>
        <div className={style.mainDiv}>
          <h1 data-aos="fade-up" className={style.h1}>
            Assalomu alaykum
          </h1>
          <hr />
          <h2 className={style.h2}>My blog platformasiga xush kelibsiz!</h2>
          <div className={style.buttons}>
            <a href="/blog/1">
              <button className={style.button}>
                <FontAwesomeIcon className={style.icon} icon={faBookOpen} />{" "}
                O'qish
              </button>
            </a>

            <a href="/post/create">
              <button className={style.button}>
                <FontAwesomeIcon className={style.icon} icon={faSquarePlus} />{" "}
                Yaratish
              </button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
