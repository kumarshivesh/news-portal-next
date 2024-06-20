import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ArticleCard from '../components/ArticleCard';
import '../styles/index.css'; // Import the index.css file

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleRemoveFromFavorites = (url) => {
    const updatedFavorites = favorites.filter(article => article.url !== url);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <Navbar />
      <h1 className="favorites-head">Favorites</h1>
      <div className="articles-list">
        {favorites.map((article) => (
          <ArticleCard
            key={article.url}
            article={article}
            onRemoveFromFavorites={handleRemoveFromFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
