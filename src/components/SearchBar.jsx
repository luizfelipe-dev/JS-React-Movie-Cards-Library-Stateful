/* eslint-disable */

import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'
import '../style/SearchBar.css';

class SearchBar extends React.Component {
  
  render() {
    const { onChangeSearchBar, searchText, bookmarkedOnly, selectedGenre } = this.props;
    
    return (
      <form data-testid="search-bar-form" className="searchBar">
        <label
          id="text-input-label"
          htmlFor="inputSearchBar"
        >
          Filter by Title:{' '}
          <input
            name="searchText"
            type="text"
            value={ searchText }
            onChange={ onChangeSearchBar }
          />
        </label>
        <label htmlFor="checkboxInput" data-testid="checkbox-input-label">
          Favorite only {' '}
          <input
            name="bookmarkedOnly"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onChangeSearchBar }
          />
        </label>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filter by Genre {' '}
          <select
            id="selectedGenreInput"
            name="selectedGenre"
            value={ selectedGenre }
            onChange={ onChangeSearchBar }
          >
            <option value=''>All</option>
            <option value="action" data-testid="select-option">Action</option>
            <option value="comedy" data-testid="select-option">Comedy</option>
            <option value="thriller" data-testid="select-option">Thriller</option>
            <option value="fantasy" data-testid="select-option">Fantasy</option>
          </select>
        </label>
        <Link to="/addmovie">Add Movie</Link>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: propTypes.string.isRequired,
  onChangeSearchBar: propTypes.func.isRequired,
  bookmarkedOnly: propTypes.bool.isRequired,
  selectedGenre: propTypes.string.isRequired,
};

export default SearchBar;
