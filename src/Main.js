import React, { Component } from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Main extends Component {
  state = {
    books: []
  }

  updateShelf = (book, shelfValue) => {
    BooksAPI.update(book, shelfValue).then(function(res) {
      BooksAPI.getAll().then((response) => {
        this.setState({books: response})
      })
    }.bind(this)); 
  }

  componentDidMount() {
    BooksAPI.getAll().then((response) => {
      this.setState({books: response})
      //response.forEach(element => {console.log(element)})  
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf shelfName="Currently Reading" bookArray={this.state.books.filter(element => element.shelf==='currentlyReading')} triggerUpdate={this.updateShelf} />
            <Shelf shelfName="Want to Read" bookArray={this.state.books.filter(element => element.shelf==='wantToRead')} triggerUpdate={this.updateShelf} />
            <Shelf shelfName="Read" bookArray={this.state.books.filter(element => element.shelf==='read')} triggerUpdate={this.updateShelf} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Main
