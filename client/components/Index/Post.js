import Link from "next/link";
import Image from "next/image";
import style from "styles/Blog.module.css";
export default function Post({ element, date }) {
  return (
    <Link href={`/post/${element.title.toLowerCase().replace(/ /g, "-")}`}>
      <a>
        <div data-aos="fade-up" className={style.post}>
          <Image
            loader={() => element.image}
            src={element.image}
            className={style.image}
            width={1000}
            height={600}
            alt="blog image"
          />
          <div className={style.desc}>
            <h2>{element.title}</h2>
            <p>
              {date(element.date).toDateString()},{" "}
              {date(element.date).toLocaleTimeString()}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
