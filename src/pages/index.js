import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../store/articlesSlice';
import Navbar from '../components/Navbar';
import ArticleCard from '../components/ArticleCard';
import Pagination from '../components/Pagination';
import styles from '../styles/Home.module.css';
import '../styles/index.css'; // Import the index.css file

export default function Home() {
  const dispatch = useDispatch();
  const { articles, loading, error, totalResults } = useSelector((state) => state.articles);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchArticles({ category, page: currentPage, searchTerm }));
  }, [dispatch, category, currentPage, searchTerm]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSaveToFavorites = (article) => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = [...savedFavorites, article];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const totalPages = Math.ceil(totalResults / 10); // Assuming 10 articles per page

  return (
    <div>
      <Navbar onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
      {loading && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      <div className="articles-list">
        {articles
          .filter(article => article.title && article.description && article.urlToImage)
          .map((article) => (
            <ArticleCard key={article.url} article={article} onSaveToFavorites={handleSaveToFavorites} />
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
