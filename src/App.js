import React from 'react';
import { Route, Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import './App.css';

import BookShelf from './BookShelf';
import SearchBooks from './SearchBooks';

export default class BooksApp extends React.Component {
  
  state = {
    books: [],
    searchedBooks: []
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

  searchBooks = (query) => {
    BooksAPI.search(query, 12).then(books => {
      console.log(books);
      
      if( Array.isArray(books) ) {
        this.setState({searchedBooks: books});
      } else {
        this.setState({searchedBooks: []});
      }
      
    })
  }

  getShelfOptions = () => {
    return this.state.bookshelves.map( shelf => (
      { id: shelf.id, title: shelf.title }
    ))
  }

  render() {

    const { books } = this.state;

    const bookshelves = [
      { id: 'currentlyReading', title: 'Currently Reading' },
      { id: 'wantToRead', title: 'Want to Read'},
      { id: 'read', title: 'Read' }
    ];

    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div>
                  {bookshelves.map( ( shelf ) => (
                    <BookShelf 
                      key={shelf.id} 
                      name={shelf.title}
                      bookshelves={bookshelves}
                      books={books.filter( book => book.shelf === shelf.id)}
                      onUpdateBookShelf={this.updateBookShelf}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>

        <Route path="/search" render={({history}) => (
            <SearchBooks 
              bookshelves={this.state.bookshelves}
              onUpdateBookShelf={this.updateBookShelf}
              searchedBooks={this.state.searchedBooks}
              onBookSearch={this.searchBooks}
            />
          )}
        />
      </div>
    )
  }
}
