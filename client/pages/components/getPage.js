import { useEffect, useState } from "react";

const usePage = () => {
  const [page, setPage] = useState([]);
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const [pageAll, setPageAll] = useState([]);
  async function fetcher() {
    await fetch("https://blog-api-uz.herokuapp.com/api/get/post/")
      .then((res) => res.json())
      .then((datas) => {
        setData(datas);
        setPage([]);
        datas.map((e, i) => {
          setPage((old) => [...old, parseInt(i) + 1]);
        });
        // prettier-ignore

        setCount(((datas.length % 10) === 0) ? datas.length / 10 : parseInt((datas.length / 10)) + 1)
      });
  }
  useEffect(() => {
    fetcher();
  }, []);
  useEffect(() => {
    setPageAll([]);
    page.map((e) => {
      if (parseInt(e) % 10 === 0) {
        setPageAll((old) => [...old, e / 10]);
      }
    });

    if (count > pageAll.length) {
      setPageAll((old) => [...old, count]);
    }
  }, [count]);

  return { data, pageAll };
};
// (datas.length % 10) === 0 ? datas.length / 10 : (datas.length / 10) + 1
export default usePage;
