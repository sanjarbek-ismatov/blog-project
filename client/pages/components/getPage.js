import { useEffect, useState } from "react";

const usePage = () => {
  const [page, setPage] = useState([]);
  const [data, setData] = useState();
  useEffect(() => {
    async function fetcher() {
      await fetch("https://blog-api-uz.herokuapp.com/api/get/post/")
        .then((res) => res.json())
        .then((datas) => {
          setData(datas);
          setPage((current) => datas.map((e, i) => current.push(i)));
        });
    }
    fetcher();
  }, []);
  return { data, page };
};
// (datas.length % 10) === 0 ? datas.length / 10 : (datas.length / 10) + 1
export default usePage;
