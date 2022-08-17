import React, { useEffect } from "react";
import { useRouter } from "next/router";
const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/blog/1");
  }, []);
  return <div></div>;
};

export default Index;
