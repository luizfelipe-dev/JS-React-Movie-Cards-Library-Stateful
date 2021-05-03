import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
          <label htmlFor="search-text" data-testid="text-input-label" >Inclui o texto:
          <input 
              id="search-text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            /></label>

      </form>
    );
  }
}

export default SearchBar;
