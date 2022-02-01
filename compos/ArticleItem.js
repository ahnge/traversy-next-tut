import Link from "next/link";
import styles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/${article.id}`}>
      <a className={styles.card}>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.body}>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
