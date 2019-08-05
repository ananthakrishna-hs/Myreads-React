import React from 'react'

const Book = (props) => {
  return (
    <li className="books-list">
      <div className="book">
        <div className="book-top">
          {props.bookObject.imageLinks ? (<img src={props.bookObject.imageLinks.smallThumbnail} alt={props.bookObject.title + " book"} style={{ width: 128, height: 188 }}></img>)
            : (<img alt={"Not Available"} style={{ width: 128, height: 188 }}></img>)}

          <div className="book-shelf-changer">
            <select onChange={event => props.triggerUpdate(props.bookObject, event.target.value)} defaultValue='move'>
              <option value="move" disabled>Move to...</option>

              {props.bookObject.shelf === 'currentlyReading' ? (<option value="currentlyReading" disabled>Currently Reading&#10004;</option>) :
                (<option value="currentlyReading">Currently Reading</option>)}

              {props.bookObject.shelf === 'wantToRead' ? (<option value="wantToRead" disabled>Want to Read&#10004;</option>) :
                (<option value="wantToRead">Want to Read</option>)}

              {props.bookObject.shelf === 'read' ? (<option value="read" disabled>Read&#10004;</option>) :
                (<option value="read">Read</option>)}

              {props.bookObject.shelf === 'none' ? (<option value="none" disabled>None</option>) :
                (<option value="none">None</option>)}
            </select>
          </div>
        </div>
        <div className="book-title">{props.bookObject.title}</div>
        {
          props.bookObject.authors && props.bookObject.authors.map(author => (
            <div className="book-authors" key={author}>{author}</div>))
        }
      </div>
    </li>
  )
}

export default Book