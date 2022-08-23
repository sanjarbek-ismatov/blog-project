// import React from "react";

// const me = ({ user }) => {
//   if (typeof window !== "undefined") {
//     console.log(user, localStorage.token);
//   }
//   return <div></div>;
// };

// export default me;
// export async function getServerSideProps() {
//   if (typeof window !== "undefined") {
//     const data = await fetch(
//       "https://blog-api-uz.herokuapp.com/api/profile/me",
//       {
//         method: "GET",
//         headers: {
//           ["x-token"]: localStorage.token,
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//     return {
//       props: {
//         user: data,
//       },
//     };
//   }
//   return {
//     props: {
//       user: "",
//     },
//   };
// }
// // const data = await axios.get(
// //     "https://blog-api-uz.herokuapp.com/api/profile/me",
// //     {
// //       headers: {
// //         ["x-token"]: localStorage.getItem("token"),
// //       },
// //     }
// //   );
// //   return {
// //     props: {
// //       user: data,
// //     },
// //   };
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getProfileMeThunk } from "../../state/thunks/getProfileMeThunk";
import { useRouter } from "next/router";
const Me = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((data) => data.getMe);
  useEffect(() => {
    dispatch(getProfileMeThunk(localStorage.getItem("token")));
  }, []);
  if (state && state.profile.length !== 0) {
    const { user } = state.profile.data;
    return <img src={user.profile} />;
  } else {
    return <h1>Siz Tizimga kirmagansiz</h1>;
  }
};

export default Me;
