import React from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import './App.css';

import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      this.setState({ books })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then( (res) => {
      console.log(res)
    })
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <ListBooks 
            books={this.state.books}
            onUpdateShelf={this.updateShelf}
          />
        )}/>

        <Route path="/search" render={({history}) => (
            <SearchBooks />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
