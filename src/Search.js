import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  state = {
    books: [],
    search: '',
    update: []
  }

  searchFunction = (event) => {
    const searchExp = event.target.value.trim();
    this.setState({search: searchExp});
    
    if(searchExp)
      BooksAPI.search(searchExp).then(function(res) {
        if(Array.isArray(res)) {
         
          this.setState({books: res});
          
        }
        else
          this.setState({books: []});
      }.bind(this));
    else
      this.setState({books: []});
  }

  updateShelf = (book, shelfValue) => {
    BooksAPI.update(book, shelfValue).then(function(res) {
      BooksAPI.getAll().then((response) => {
        //this.setState({books: response})
      })
    }.bind(this)); 
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
            <div></div>
          )
        }
        </div>
      </div>
    )
  }
}

export default Search