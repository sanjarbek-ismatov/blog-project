import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../state/store";
import { DefaultSeo } from "next-seo";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="My Blog"
        description="MyBlog - foydalanuvchilar tomonidan maqola yaratuvchi bepul va foydali platforma"
        additionalLinkTags={[
          {
            rel: "shortcut icon",
            href: "https://i.ibb.co/1XTN2WY/icon.png",
          },
        ]}
        openGraph={{
          title: "My Blog",
          description:
            "MyBlog - foydalanuvchilar tomonidan maqola yaratuvchi bepul va foydali platforma",
          type: "website",
          images: [
            {
              url: "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
            },
          ],
        }}
      />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
