import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Article.module.css';

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const article = useSelector((state) =>
    state.articles.articles.find((article) => article.url === decodeURIComponent(id))
  );

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <img src={article.urlToImage} alt={article.title} />
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default ArticlePage;
