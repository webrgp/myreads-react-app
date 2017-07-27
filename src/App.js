import React from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import './App.css';

import BookShelf from './BookShelf';
import BookSearch from './BookSearch';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BookShelf />
        )}/>

        <Route path="/search" render={({history}) => (
            <BookSearch />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
