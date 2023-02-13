import style from "../styles/Panigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const Panigation = ({ data }) => {
  const pageAll = ~~(data.length / 10) + (data.length % 10 !== 0 ? 1 : 0);
  const router = useRouter();
  const path = router.asPath.split("/")[2];
  const left = () => {
    if (path > 1) {
      router.push(`/blog/${path - 1}`);
    }
  };
  const right = () => {
    if (path < pageAll.length) {
      router.push(`/blog/${parseInt(path) + 1}`);
    }
  };

  return (
    <div>
      {}
      <div className={style.panigation}>
        <ul className={style.ul}>
          <li>
            <a className={style.li} onClick={left}>
              {"<"}
            </a>
          </li>
          {data &&
            Array.from({ length: pageAll }, (_, i) => i + 1).map((e, i) => {
              return (
                <li key={i}>
                  <Link href={"/blog/" + (i + 1)}>
                    <a className={path - 1 === i ? style.active : style.li}>
                      {i + 1}
                    </a>
                  </Link>
                </li>
              );
            })}
          <li>
            <a className={style.li} onClick={right}>
              {">"}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Panigation;
