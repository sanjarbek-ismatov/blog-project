export const getServerUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:4000";
  }
  return "https://blog-project-haoi.onrender.com";
};
