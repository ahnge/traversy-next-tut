import styles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticlesList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => {
        return <ArticleItem article={article} key={article.id} />;
      })}
    </div>
  );
};

export default ArticlesList;
