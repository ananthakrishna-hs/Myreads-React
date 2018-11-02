import React, { Component } from 'react'

class Book extends Component {
  render() {
    return (
      <li className="books-list">
        <div className="book">
          <div className="book-top">
            {this.props.bookObject.imageLinks ? (<img src={this.props.bookObject.imageLinks.smallThumbnail} alt={this.props.bookObject.title + " book"} style={{ width: 128, height: 188}}></img>)
            : (<img alt={"Not Available"} style={{ width: 128, height: 188}}></img>)}
            
            <div className="book-shelf-changer">
              <select onChange={event => this.props.triggerUpdate(this.props.bookObject, event.target.value)} defaultValue='move'>
                <option value="move" disabled>Move to...</option>

                {this.props.bookObject.shelf === 'currentlyReading' ? (<option value="currentlyReading" disabled>Currently Reading&#10004;</option>) :
                (<option value="currentlyReading">Currently Reading</option>)}

                {this.props.bookObject.shelf === 'wantToRead' ? (<option value="wantToRead" disabled>Want to Read&#10004;</option>) :
                (<option value="wantToRead">Want to Read</option>)}

                {this.props.bookObject.shelf === 'read' ? (<option value="read" disabled>Read&#10004;</option>) :
                (<option value="read">Read</option>)}

                {this.props.bookObject.shelf === 'none' ? (<option value="none" disabled>None</option>) :
                (<option value="none">None</option>)}
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.bookObject.title}</div>
          {
            this.props.bookObject.authors && this.props.bookObject.authors.map(author => (
              <div className="book-authors" key={author}>{author}</div>))
          }
        </div>
      </li>
    )
  }
}

export default Book