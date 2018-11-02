import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Shelf extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
    
  }
 
  /*updateShelf() {
    this.setState({update: this.state.update+1});
  }*/

  componentWillMount() {
    /*BooksAPI.getAll().then((response) => {
      //this.setState({books: response})
      switch(this.props.shelfName) {
        case 'Currently Reading': this.setState({books: response.filter(element => element.shelf==='currentlyReading')}); break;
        case 'Want to Read': this.setState({books: response.filter(element => element.shelf==='wantToRead')}); break;
        case 'Read': this.setState({books: response.filter(element => element.shelf==='read')}); break;
        default: alert("Invalid shelf name");
      }
    })*/
   
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.bookArray.map(book => (
              <Book key={book.id} bookObject={book} triggerUpdate={this.props.triggerUpdate} />//<Book key={book.id} {...book} />
              /*<li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <img src={book.imageLinks.smallThumbnail} alt={"Image of " + book.title} style={{ width: 128, height: 188}}></img>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  {book.authors.map(author => (
                    <div className="book-authors" key={author}>{author}</div>
                  ))}
                </div>
              </li>*/
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf