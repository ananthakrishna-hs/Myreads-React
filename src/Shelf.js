import React from 'react'
import Book from './Book'

const Shelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.bookArray.map(book => (
            <Book key={book.id} bookObject={book} triggerUpdate={props.triggerUpdate} />//<Book key={book.id} {...book} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Shelf