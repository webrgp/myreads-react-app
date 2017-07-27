import React from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import './App.css';

import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  
  state = {
    bookshelves: [
      { id: 'currentlyReading', title: 'Currently Reading', books: [] },
      { id: 'wantToRead', title: 'Want to Read', books: []},
      { id: 'read', title: 'Read', books: [] }
    ]
  }

  componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      let bookshelves = this.state.bookshelves;
      bookshelves.forEach( shelf => {
        shelf.books = books.filter( book => book.shelf === shelf.id)
      })
      this.setState({bookshelves: bookshelves});
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then( (res) => {
      console.log(res)
    })
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
            onUpdateShelf={this.updateShelf}
            getShelfOptions={this.getShelfOptions}
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
