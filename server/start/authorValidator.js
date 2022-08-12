module.exports = (id, user) => {
  const filter = user.posts.filter((e) => {
    return id.includes(e._id.toString());
  });
  console.log(filter);
  if (filter.length === 0) return false;
  return filter[0]._id;
};
