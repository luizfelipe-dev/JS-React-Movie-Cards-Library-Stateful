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
          data-testid="text-input-label"
        >
          Inclui o texto
          <input
            name="searchText"
            type="text"
            data-testid="text-input"
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
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
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
  searchTextProps: propTypes.string.isRequired,
  onChangeSearchBarProps: propTypes.func.isRequired,
  bookmarkedOnlyProps: propTypes.bool.isRequired,
  selectedGenreProps: propTypes.string.isRequired,
};

export default SearchBar;
