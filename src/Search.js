import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  state = {
    books: [],
    search: ''
  }

  searchFunction = (event) => {
    const searchExp = event.target.value.trim();
    this.setState({search: searchExp});
    if(searchExp)
      BooksAPI.search(searchExp).then(function(res) {
        if(Array.isArray(res)) 
          this.setState({books: res});
        else
          this.setState({books: []});
      }.bind(this));
    else
      this.setState({books: []});
  }

  updateShelf = (book, shelfValue) => {
    BooksAPI.update(book, shelfValue);
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.searchFunction}/>
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