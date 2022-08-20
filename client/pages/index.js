import React from 'react';
import style from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faBookOpen,
  faRightFromBracket,
  faSquarePlus,
} from '@fortawesome/free-solid-svg-icons';
const Index = () => {
  return (
    <div>
      <Head>
        <title>MyBlog - bosh sahifa</title>
        <meta name="title" content="MyBlog - bosh sahifa" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="MyBlog - bosh sahifa" />
        <meta
          property="og:description"
          content="MyBlog - foydalanuvchilar tomonidan maqola yaratuvchi bepul va foydali platforma"
        />
        <meta
          property="og:image"
          content="https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8="
        />

        <link rel="shortcut icon" href="https://i.ibb.co/1XTN2WY/icon.png" />
      </Head>
      <header>
        <nav className={style.nav}>
          <h1>My Blog</h1>
          <div className={style.div}>
            <a href="/register">
              <button className={style.button}>
                {' '}
                <FontAwesomeIcon className={style.icon} icon={faAt} />{' '}
                Ro'yhatdan o'tish
              </button>
            </a>

            <a href="/login">
              <button className={style.button}>
                {' '}
                <FontAwesomeIcon
                  className={style.icon}
                  icon={faRightFromBracket}
                />{' '}
                Tizimga kirish
              </button>
            </a>
          </div>
        </nav>
      </header>
      <main>
        <main className={style.main}>
          <div className={style.mainDiv}>
            <h1 className={style.h1}>Assalomu alaykum</h1>
            <hr />
            <h2 className={style.h2}>My blog platformasiga xush kelibsiz!</h2>
            <div className={style.buttons}>
              <a href="/blog/1">
                <button className={style.button}>
                  <FontAwesomeIcon className={style.icon} icon={faBookOpen} />{' '}
                  Maqolani o'qish
                </button>
              </a>

              <a href="/post">
                <button className={style.button}>
                  <FontAwesomeIcon className={style.icon} icon={faSquarePlus} />{' '}
                  Maqola yaratish
                </button>
              </a>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
};

export default Index;
