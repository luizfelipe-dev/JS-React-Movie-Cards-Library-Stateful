// implement AddMovie component here

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

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
    const { searchText, selectedGenre } = this.state;

    const filteredMovie = movies;

    if (selectedGenre === '') {
      return filteredMovie
        .filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()));
    }

    return filteredMovie.filter((movie) => movie.title
      .toLowerCase()
      .includes(searchText.toLowerCase())
      && movie.genre === selectedGenre);
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filteredMovie = this.filterMovie();

    return (
      <div>
        <SearchBar
          onChangeSearchBar={ this.onChangeSearchBar }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          movies={ movies }
        />
        <MovieList
          movies={ filteredMovie }
          searchText={ searchText }
          filterMovie={ this.filterMovie }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
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
