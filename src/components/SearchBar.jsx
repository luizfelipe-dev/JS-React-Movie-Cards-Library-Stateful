import propTypes from 'prop-types';
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { onChangeSearchBar, searchText, bookmarkedOnly, selectedGenre } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label
          id="text-input-label"
          htmlFor="inputSearchBar"
        >
          Inclui o texto
          <input
            name="searchText"
            type="text"
            value={ searchText }
            onChange={ onChangeSearchBar }
          />
        </label>
        <label htmlFor="checkboxInput" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            name="bookmarkedOnly"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onChangeSearchBar }
          />
        </label>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="selectedGenre"
            value={ selectedGenre }
            onChange={ onChangeSearchBar }
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
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
