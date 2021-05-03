import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import data from './data'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
      searchText={'string'}
      onSearchTextChange={console.log}
      bookmarkedOnly={true}
      onBookmarkedChange={console.log}
      selectedGenre={'string'}
      onSelectedGenreChange={console.log}
      />
      <MovieList movies={data} />
    </div>
  );
}

export default App;
