import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
// import './styles/SearchContainer.css';

function SearchContainer() {
  return (
    <div className="SearchContainer">
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default SearchContainer;
