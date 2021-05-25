import React from 'react';
import { string, func, bool } from 'prop-types';

class Searchbar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form
        data-testid="search-bar-form"
        action=""
      >
        <label data-testid="text-input-label" htmlFor="text-name">
          Inclui o texto:
          <input
            id="text-name"
            onChange={ onSearchTextChange }
            data-testid="text-input"
            type="text"
            value={ searchText }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checked-name">
          Mostrar somente favoritos
          <input
            id="checked-name"
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
          />
        </label>
        <label data-testid="select-input-label" htmlFor="genero">
          Filtrar por gênero
          <select
            name="genero"
            id="genero"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
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

Searchbar.propTypes = {
  searchText: string,
  onSearchTextChange: func,
  bookmarkedOnly: bool,
  onBookmarkedChange: func,
  selectedGenre: string,
  onSelectedGenreChange: func,
}.isRequired;

export default Searchbar;
