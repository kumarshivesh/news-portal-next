import React, { useState } from 'react';
import Link from 'next/link';
import '../styles/index.css'; // Import the index.css file

const Navbar = ({ onCategoryChange, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <nav>
      <div className="logo-favorites">
        <h1 className="logo-text">Next.js News Portal</h1>
        <Link href="/favorites" legacyBehavior>
          <a className="favorites">Favorites</a>
        </Link>
      </div>
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">All</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="entertainment">Entertainment</option>
      </select>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search articles..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
