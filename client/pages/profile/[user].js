import React from "react";
import axios from "axios";
const User = ({ user }) => {
  return (
    <main>
      <img src={user.user.profile} />
    </main>
  );
};

export default User;
export async function getServerSideProps({ params }) {
  const data = await fetch(
    `https://blog-api-uz.herokuapp.com/api/profile/${params.user}`
  ).then((res) => res.json());
  return {
    props: {
      user: data,
    },
  };
}
