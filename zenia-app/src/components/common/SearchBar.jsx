import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import "./styles/SearchBar.css";

const SearchBar = React.memo(function SearchBar({ 
  onSearch, 
  placeholder = "Buscar...", 
  initialValue = "",
  ariaLabel = "Buscador"
}) {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  }, [onSearch]);

  const handleClear = useCallback(() => {
    setSearchTerm("");
    if (onSearch) {
      onSearch("");
    }
  }, [onSearch]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  }, [onSearch, searchTerm]);

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <div className="search-bar-container">
        <svg 
          className="search-icon" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
          aria-label={ariaLabel}
        />
        
        {searchTerm && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={handleClear}
            aria-label="Limpiar búsqueda"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>
    </form>
  );
});

SearchBar.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  initialValue: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default SearchBar;

