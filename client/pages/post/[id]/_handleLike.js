export async function handleLike(id, oldcount) {
  await fetch(`https://blog-api-uz.herokuapp.com/api/get/post/update/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      likeCount: 2,
    }),
    headers: new Headers({
      "x-token": "dfdfdsfsdfsfff",
      "Content-type": "application/json",
    }),
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
