import React, { useEffect } from "react";
import style from "../../styles/Panigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePage from "./getPage";
const Panigation = () => {
  const { page, data } = usePage();
  console.log(page);
  const router = useRouter();
  const path = router.asPath.split("/")[2];

  const left = () => {
    if (path > 1) {
      router.push(`/blog/${path - 1}`);
    }
  };
  const right = () => {
    if (path < page) {
      router.push(`/blog/${parseInt(path) + 1}`);
    }
  };
  return (
    <div>
      {}
      <div className={style.panigation}>
        <ul className={style.ul}>
          <li>
            <a onClick={left}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
          </li>
          {data &&
            data.map((e, i) => {
              return (
                <li>
                  <Link href={"/blog/" + (i + 1)}>
                    <a className={path - 1 === i ? style.active : ""}>
                      {i + 1}
                    </a>
                  </Link>
                </li>
              );
            })}
          <li>
            <a onClick={right}>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Panigation;
