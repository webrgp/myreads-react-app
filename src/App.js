import React from 'react';
import { Route } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import BookList from './BookList';
import Book from './Book';
import SearchBooks from './SearchBooks';

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
    console.log(shelf);
    
    BooksAPI.update(book, shelf).then(data => {
      this.setState(({ books }) => {
        
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
      { id: 'currentlyReading', title: 'Currently Reading' },
      { id: 'wantToRead', title: 'Want to Read'},
      { id: 'read', title: 'Read' }
    ];

    const fabStyle = {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    };

    return (
      <div className="app">
        <Route exact path="/" render={({history}) => (
          <div className="list-books">
            <AppBar 
              title="MyReads"
              showMenuIconButton={false}
            />
            {bookshelves.map( ( shelf ) => (
              <BookShelf 
                key={shelf.id} 
                name={shelf.title}
              >
                <BookList noBooksMsg='Add a book to this shelf!'>
                  {books.filter( book => book.shelf === shelf.id).map( book => (
                    <Book 
                      key={book.id} 
                      book={book} 
                      onUpdateBookShelf={this.updateBookShelf}
                      bookshelves={bookshelves}
                    />
                  ))}
                </BookList>
              </BookShelf>
            ))}
            <FloatingActionButton 
              secondary={true} 
              style={fabStyle}
              onTouchTap={() => { history.push('/search') }}
            ><ContentAdd /></FloatingActionButton>
          </div>
        )}/>

        <Route path="/search" render={({history}) => (
            <SearchBooks 
              books={books}
              onSearchBooks={this.updateQuery}
            >
              <BookList>
                {this.state.searchResuts.map( book => (
                  <Book 
                    key={book.id} 
                    book={book} 
                    onUpdateBookShelf={this.updateBookShelf}
                    bookshelves={bookshelves}
                  />
                ))}
              </BookList>
            </SearchBooks>
          )}
        />
      </div>
    )
  }
}
