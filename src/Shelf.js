import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.bookArray.map(book => (
              <Book key={book.id} bookObject={book} triggerUpdate={this.props.triggerUpdate} />//<Book key={book.id} {...book} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf