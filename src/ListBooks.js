import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BookShelf from './BookShelf';
import Book from './Book';


export default class ListBooks extends Component {
  
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }

  state = {
    shelves: [
      { name: 'currentlyReading', title: 'Currently Reading'},
      { name: 'wantToRead', title: 'Want to Read'},
      { name: 'read', title: 'Read'}
    ]
  }

  render() {

    const { books, onUpdateShelf } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div>
              {this.state.shelves.map( shelve => (
                <BookShelf 
                  key={shelve.name} 
                  name={shelve.title} 
                >
                {books.filter( (book) => book.shelf === shelve.name ).map( book => (
                  <Book 
                    key={book.id} 
                    book={book} 
                    shelves={this.state.shelves}
                    onUpdateBookShelf={onUpdateShelf}
                  />
                ))}
                </BookShelf>
              ))}
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
  
}