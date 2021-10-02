// implement AddMovie component here

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearchBar = this.onChangeSearchBar.bind(this);
    this.filterMovie = this.filterMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onChangeSearchBar({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  filterMovie() {
    const { movies } = this.props;
    const { searchText } = this.state;

    const filteredMovie = movies
      .filter((movie) => movie.title
        .toLowerCase()
        .includes(searchText.toLowerCase()));
    console.log('filteredMovie', filteredMovie);
    return filteredMovie;
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filteredMovie = this.filterMovie();

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onChangeSearchBar={ this.onChangeSearchBar }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList
          movies={ filteredMovie }
          searchText={ searchText }
          filterMovie={ this.filterMovie }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieLibrary;
