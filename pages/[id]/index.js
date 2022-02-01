import { useRouter } from "next/router";
import Meta from "../../compos/Meta";
import { server } from "../../config";
import styles from "../../styles/Layout.module.css";

const ArticlePage = ({ article }) => {
  const router = useRouter();
  return (
    <>
      <Meta title={article.title} />
      <div className={styles.container}>
        <main className={styles.main}>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <button onClick={() => router.push("/")}>GO home</button>
        </main>
      </div>
    </>
  );
};

export default ArticlePage;

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  const ids = articles.map((article) => ({
    params: { id: article.id.toString() },
  }));

  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
