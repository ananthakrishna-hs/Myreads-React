import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
  /*updateShelf(book, updateFunc, event) {
    BooksAPI.update(book, event.target.value);
    updateFunc(book);
  }*/
  state = {
    shelf: ''
  }

  componentWillMount() {
    BooksAPI.get(this.props.bookObject.id).then(res => {
      this.setState({shelf: res.shelf});
    })
  }
  render() {
    //console.log(this.props.bookObject.imageLinks)
    return (
      <li>
        <div className="book">
          <div className="book-top">
            {this.props.bookObject.imageLinks ? (<img src={this.props.bookObject.imageLinks.smallThumbnail} alt={"Image of " + this.props.bookObject.title} style={{ width: 128, height: 188}}></img>)
            : (<img alt={"Image Not Available"} style={{ width: 128, height: 188}}></img>)}
            
            <div className="book-shelf-changer">
              <select onChange={event => this.props.triggerUpdate(this.props.bookObject, event.target.value)} defaultValue='move'>
                <option value="move" disabled>Move to...</option>

                {this.state.shelf === 'currentlyReading' ? (<option value="currentlyReading" disabled>&#10004;Currently Reading</option>) :
                (<option value="currentlyReading">Currently Reading</option>)}

                {this.state.shelf === 'wantToRead' ? (<option value="wantToRead" disabled>&#10004;Want to Read</option>) :
                (<option value="wantToRead">Want to Read</option>)}

                {this.state.shelf === 'read' ? (<option value="read" disabled>&#10004;Read</option>) :
                (<option value="read">Read</option>)}

                {this.state.shelf === 'none' ? (<option value="none" disabled>&#10004;None</option>) :
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