import React from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import './App.css';

import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  
  state = {
    books: [],
    bookshelves: [
      { id: 'currentlyReading', title: 'Currently Reading' },
      { id: 'wantToRead', title: 'Want to Read'},
      { id: 'read', title: 'Read' }
    ]
  }

  componentDidMount() {
    BooksAPI.getAll().then( this.updateState )
  }

  updateState = ( books ) => {
    this.setState({books: books});
  }

  updateBookShelf = (book, shelf) => {
    this.setState( (state) => ({
      books: state.books.map( b => {     
        if( b.id === book.id && b.shelf !== shelf) {
          b.shelf = shelf;
        }
        return b;
      })
    }))

    BooksAPI.update(book, shelf)
  }

  getShelfOptions = () => {
    return this.state.bookshelves.map( shelf => (
      { id: shelf.id, title: shelf.title }
    ))
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <ListBooks 
            bookshelves={this.state.bookshelves}
            books={this.state.books}
            onUpdateBookShelf={this.updateBookShelf}
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
