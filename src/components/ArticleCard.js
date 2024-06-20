import React from 'react';
import '../styles/index.css'; // Import the index.css file

const ArticleCard = ({ article, onSaveToFavorites, onRemoveFromFavorites }) => {
  if (
    article.title === '[Removed]' || 
    article.description === '[Removed]' || 
    !article.urlToImage
  ) {
    return null;
  }

  return (
    <div className="article-card">
      <img src={article.urlToImage} alt={article.title || 'No title'} />
      <h2>{article.title ? article.title.slice(0, 79) : 'No title available'}</h2>
      <p>{article.description ? article.description.slice(0, 109) : 'No description available'}</p>
      <div className="button-container">
        <a className="button" href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
        {onSaveToFavorites && (
          <button className="button save" onClick={() => onSaveToFavorites(article)}>Save to Favorites</button>
        )}
        {onRemoveFromFavorites && (
          <button className="button remove" onClick={() => onRemoveFromFavorites(article.url)}>Remove</button>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
