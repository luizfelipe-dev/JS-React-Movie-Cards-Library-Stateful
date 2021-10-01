import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, searchText } = this.props;

    const filteredMovie = movies
      .filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()));

    return (
      <div data-testid="movie-list" className="movie-list">
        { filteredMovie
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchText: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
