import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <br />
        <form data-testid="search-bar-form">
          <label htmlFor="input1" data-testid="text-input-label">
            Inclui o texto:
            <br />
            <input
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <br />
          <label htmlFor="inputCheck" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              type="checkbox"
              checked="bookmarkedOnly"
              value={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          <br />
          <label htmlFor="select" data-testid="select-input-label">
            Filtrar por gênero
            <select data-testid="select-input" value={ selectedGenre } onChange={ onSelectedGenreChange }>
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
