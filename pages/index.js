import ArticlesList from "../compos/ArticlesList";
import { server } from "../config/index";
import Meta from "../compos/Meta";

export default function Home({ articles }) {
  return (
    <div>
      <Meta />
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
