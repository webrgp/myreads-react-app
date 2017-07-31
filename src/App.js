import React from 'react';
import { Route } from 'react-router-dom';

import CheckCircle from 'material-ui-icons/CheckCircle';
import WatchLater from 'material-ui-icons/WatchLater';
import LocalLibrary from 'material-ui-icons/LocalLibrary';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';

import * as BooksAPI from './BooksAPI';
import BookShelf from './components/BookShelf';
import BookList from './components/BookList';
import Book from './components/Book';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';



export default class BooksApp extends React.Component {
  
  state = {
    books: [],
    query: '',
    searchResuts: []
  }

  componentDidMount() {
    BooksAPI.getAll().then( books => {
      this.setState({books: books});
    })
  }

  updateBookShelf = (book, shelf) => {
    // console.log(shelf);
    
    BooksAPI.update(book, shelf).then(data => {
      this.setState(({ books, searchResuts }) => {
        
        // Check if book already in a shelf
        const isInShelf = books.find(b => (
          b.id === book.id
        ));

        // in shelf
        if (!! isInShelf) {
          return {
            books: books.filter(b =>
              b.id === book.id ? b.shelf = shelf : b
            )
          };
        }

        // put book in shelf
        return {
          books: books.concat(
            Object.assign({}, book, { shelf: shelf })
          )
        }
      });
    });
  }

  updateQuery = (query) => {

    this.setState({ query });
     
    // do not send an API request if query is empty
    if (query.trim().length > 0) {
      BooksAPI.search(query).then(response => {
        let searchResuts = [];

        // Check if is Array
        if (Array.isArray(response)) {
          
          // Sanitize searchResuts
          response.forEach((r, index, arr) => {
            arr[index].shelf = 'none';
          });

          this.state.books.forEach(b => {
            response.forEach((r, index, arr) => {
              if (r.id === b.id) {
                arr[index].shelf = b.shelf;
              }
            })
          });
          searchResuts = response;
        }
        this.setState({ searchResuts });
      })
    } else {
      this.setState({ searchResuts: [] });
    }
  }

  getShelfOptions = () => {
    return this.state.bookshelves.map( shelf => (
      { id: shelf.id, title: shelf.title }
    ))
  }

  render() {

    const { books } = this.state;

    const bookshelves = [
      { id: 'currentlyReading', title: 'Currently Reading', icon: <LocalLibrary /> },
      { id: 'wantToRead', title: 'Want to Read', icon: <WatchLater />},
      { id: 'read', title: 'Read', icon: <CheckCircle />},
      { id: 'none', title: 'None', icon: <ArrowDropDown />}
    ];

    return (
      <div className="app">
        <Route exact path="/" render={({history}) => (
          <ListBooks>
            {/* display all shelves except the last one ('none') */}
            {bookshelves.filter( (s, i, arr) => ( i !== arr.length-1) ).map( ( shelf ) => (
              <BookShelf 
                key={shelf.id} 
                name={shelf.title}
                icon={shelf.icon}
              >
                <BookList 
                  noBooksMsg='Add a book to this shelf!'
                >
                  {books.filter( book => book.shelf === shelf.id).map( book => (
                    <Book 
                      key={book.id} 
                      book={book} 
                      onUpdateBookShelf={this.updateBookShelf}
                      bookshelves={bookshelves}
                    >
                      <img src={book.imageLinks.thumbnail} alt={book.title} style={{ width: '100%' }}/>
                    </Book>
                  ))}
                </BookList>
              </BookShelf>
            ))}
          </ListBooks>
        )}/>

        <Route path="/search" onEnter={() => { this.setState({ searchResuts: [] }) }} render={({history}) => (
          <SearchBooks 
            books={books}
            onCancelSearch={() => { history.push('/') }}
            onSearchBooks={this.updateQuery}
          >
            <BookList>
              {this.state.searchResuts.map( book => (
                <Book 
                  key={book.id} 
                  book={book} 
                  onUpdateBookShelf={this.updateBookShelf}
                  bookshelves={bookshelves}
                >
                  <img src={book.imageLinks.thumbnail} alt={book.title} style={{ width: '100%', opacity: book.shelf === 'none' ? 1 : 0.5 }}/>
                </Book>
              ))}
            </BookList>
          </SearchBooks>
          )}
        />
      </div>
    )
  }
}
