import Head from "next/head";
import ArticlesList from "../compos/ArticlesList";
import { server } from "../config/index";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Traversy next</title>
      </Head>
      <h1>Welcome to the next application</h1>
      <ArticlesList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
