import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MovieTitle from './MovieComponents/MovieTitle';
import MovieSubtitle from './MovieComponents/MovieSubtitle';
import MovieImage from './MovieComponents/MovieImage';
import MovieStoryLine from './MovieComponents/MovieStoryline';
import MovieRating from './MovieComponents/MovieRating';
import MovieGenre from './MovieComponents/MovieGenre';
import '../style/AddMovie.css';
import movies from '../data';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.clearAddMovieForm = this.clearAddMovieForm.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  componentDidMount() {
    window.onload = () => {
      document.querySelector('.movieTitle').focus();
    };

  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onClick(ev) {
    ev.preventDefault();
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const newMovie = { title, subtitle, imagePath, storyline, rating, genre };
    movies.push(newMovie);
    global.alert(`The Movie ${title} was added.`);

    this.clearAddMovieForm();
  }

  clearAddMovieForm() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: '',
      genre: '' });

    document.querySelector('.movieTitle').focus();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <>
        <form data-testid="add-movie-form" className="addMovie">
          <MovieTitle handleChange={ this.handleChange } value={ title } />
          <MovieSubtitle handleChange={ this.handleChange } value={ subtitle } />
          <MovieImage handleChange={ this.handleChange } value={ imagePath } />
          <MovieStoryLine handleChange={ this.handleChange } value={ storyline } />
          <MovieRating handleChange={ this.handleChange } value={ rating } />
          <MovieGenre handleChange={ this.handleChange } value={ genre } />

          <button
            type="button"
            data-testid="send-button"
            onClick={ this.onClick }
          >
            Adicionar filme
          </button>
        </form>
        <center>
          <Link to="/"> Voltar </Link>
        </center>
      </>
    );
  }
}

export default AddMovie;
