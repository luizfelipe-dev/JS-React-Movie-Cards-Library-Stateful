// Inicio do projeto jlfagundes
import React from 'react';
import Proptypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
// import movies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      moviesfiltered: movies,
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterSearchText = this.filterSearchText.bind(this);
    this.filterGenreFilms = this.filterGenreFilms.bind(this);
    this.filterFavoriteFilms = this.filterFavoriteFilms.bind(this);
    this.addFilm = this.addFilm.bind(this);
  }

  handleChange({ target }, cb = () => {}) {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { cb(); });
  }

  filterFavoriteFilms() {
    // const { moviesfiltered, searchText } = this.state;
    const { movies } = this.state;
    this.setState({
      moviesfiltered: movies.filter((movie) => movie.bookmarked === true),
    });
  }

  filterSearchText() {
    const { movies } = this.state;
    const { searchText } = this.state;
    this.setState({
      moviesfiltered: movies.filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)),
    });
  }

  filterGenreFilms() {
    const { movies } = this.state;
    const { selectedGenre } = this.state;
    this.setState({
      moviesfiltered: movies.filter((movie) => (selectedGenre === ''
        ? true : movie.genre === selectedGenre)),
    });
  }

  // Codigo feito com colaboração de Lucas Pedroso e Murilo Gonçalves
  addFilm(obj) {
    this.setState((oldState) => ({
      movies: [...oldState.movies, obj],
      moviesfiltered: [...oldState.moviesfiltered, obj],
    }));
  }

  render() {
    // const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre, moviesfiltered } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ (event) => {
            this.handleChange(event, this.filterSearchText);
          } }
          onSelectedGenreChange={ (event) => {
            this.handleChange(event, this.filterGenreFilms);
          } }
          onBookmarkedChange={ (event) => {
            this.handleChange(event, this.filterFavoriteFilms);
          } }
        />
        <MovieList
          movies={ moviesfiltered }
        />
        <AddMovie onClick={ this.addFilm } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  searchText: Proptypes.string,
  bookmarkedOnly: Proptypes.bool,
  selectedGenre: Proptypes.string,
  movies: Proptypes.array,
}.isRequired;
