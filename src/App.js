import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <Switch>
      <Route exact path="/addmovie">
        <Header />
        <AddMovie />
      </Route>
      <Route path="/">
        <Header />
        <MovieLibrary movies={ movies } />
      </Route>
    </Switch>
  );
}

export default App;
