import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
  /*updateShelf(book, updateFunc, event) {
    BooksAPI.update(book, event.target.value);
    updateFunc(book);
  }*/

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <img src={this.props.bookObject.imageLinks.smallThumbnail} alt={"Image of " + this.props.bookObject.title} style={{ width: 128, height: 188}}></img>
            <div className="book-shelf-changer">
              <select onChange={event => this.props.triggerUpdate(this.props.bookObject, event.target.value)} defaultValue='move'>
                <option value="move" disabled>Move to...</option>

                {this.props.bookObject.shelf === 'currentlyReading' ? (<option value="currentlyReading" disabled>&#10004;Currently Reading</option>) :
                (<option value="currentlyReading">Currently Reading</option>)}

                {this.props.bookObject.shelf === 'wantToRead' ? (<option value="wantToRead" disabled>&#10004;Want to Read</option>) :
                (<option value="wantToRead">Want to Read</option>)}

                {this.props.bookObject.shelf === 'read' ? (<option value="read" disabled>&#10004;Read</option>) :
                (<option value="read">Read</option>)}

                {this.props.bookObject.shelf === 'none' ? (<option value="none" disabled>&#10004;None</option>) :
                (<option value="none">None</option>)}
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.bookObject.title}</div>
          {this.props.bookObject.authors.map(author => (
            <div className="book-authors" key={author}>{author}</div>
          ))}
        </div>
      </li>
    )
  }
}

export default Book