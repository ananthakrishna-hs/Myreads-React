import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  state = {
    books: [],
    shelfBooks: [],
    search: ''
  }

  componentDidMount() {
    this.getShelfBooks();
  }

  getShelfBooks() {
    BooksAPI.getAll().then(function(response) {
      let shelfArray = [];
      for(let i = 0;i < response.length;i++) {
        let shelfObject = {
          id: response[i].id,
          shelf: response[i].shelf
        };
        shelfArray.push(shelfObject);
      }
      this.setState({shelfBooks: shelfArray});
    }.bind(this));
  }

  searchFunction = (event) => {
    const searchExp = event.target.value.trim();
    this.searchBooks(searchExp);
  }

  searchBooks(searchExp) {
    this.setState({search: searchExp});
    if(searchExp)
      BooksAPI.search(searchExp).then(function(res) {
        if(Array.isArray(res)) {
          for(let i = 0;i < res.length;i++) {
            let temp = this.state.shelfBooks.find(function(element) {
              return element.id === res[i].id;
            });
            if(temp)
              res[i].shelf = temp.shelf;
            else
              res[i].shelf = 'none';
          }
          this.setState({books: res});

        }
        else
          this.setState({books: []});
      }.bind(this));
    else
      this.setState({books: []});
  }

  updateShelf = (book, shelfValue) => {
    BooksAPI.update(book, shelfValue).then(function(response) {
      this.setState({books: []});
      this.getShelfBooks();
      this.searchBooks(this.state.search);
      console.log(response);
    }.bind(this));
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" autoFocus placeholder="Search by title or author" onChange={this.searchFunction}/>
          </div>
        </div>
        <div className="search-books-results">
        {
          this.state.search ? (
            <div>
              <h2 className="results-title">Search Results</h2>
              <div className="results-books">
                <ol className="books-grid">
                {
                  this.state.books.map(book => (
                    <Book key={book.id} bookObject={book} triggerUpdate={this.updateShelf} />
                  ))
                }
                </ol>
              </div>
            </div> 
          ) : (
            <div>Empty field!</div>
          )
        }
        </div>
      </div>
    )
  }
}

export default Search