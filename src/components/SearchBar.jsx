/* eslint-disable */

import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'
import '../style/SearchBar.css';

class SearchBar extends React.Component {
  
  render() {
    const { onChangeSearchBar, searchText, bookmarkedOnly, selectedGenre, favoriteClicked } = this.props;
    
    return (
      <form data-testid="search-bar-form" className="searchBar">
        <label
          className="label"
          id="text-input-label"
          htmlFor="inputSearchBar"
        >
          Filtrar por Título:{' '}
          <input
            className="input"
            name="searchText"
            type="text"
            value={ searchText }
            onChange={ onChangeSearchBar }
          />
        </label>
        {/* <label htmlFor="checkboxInput" data-testid="checkbox-input-label">
          Favorites {' '}
          <input
            name="bookmarkedOnly"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onChangeSearchBar }
          />
        </label> */}
        <label htmlFor="select-input" data-testid="select-input-label" className="label">
        Filtrar por Gênero: {' '}
        <br />
          <select
            className="select"
            id="selectedGenreInput"
            name="selectedGenre"
            value={ selectedGenre }
            onChange={ onChangeSearchBar }
          >
            <option value=''>All</option>
            <option value="ação" data-testid="select-option">ação</option>
            <option value="comédia" data-testid="select-option">comédia</option>
            <option value="drama" data-testid="select-option">drama</option>
            <option value="suspense" data-testid="select-option">suspense</option>
            <option value="guerra" data-testid="select-option">guerra</option>
            <option value="faroeste" data-testid="select-option">faroeste</option>
            <option value="ficção científica" data-testid="select-option">ficção científica</option>
        
          </select>
        </label>
        <Link to="/addmovie">+</Link>
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
