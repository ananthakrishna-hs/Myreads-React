import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Main from './Main'
import Search from './Search'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    showSearchPage: false
  }
  
  

  searchFunction = (event) => {
    console.log(event.target.value);
  }
  /*state = {
    **
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     *
    showSearchPage: false,
    books: []
}*/

  

  render() {
    return (
      <div className="app">
          <Route path="/search" component={Search}/>
          <Route exact path="/" component={Main}/>
      </div>
    )
  }
}

export default BooksApp
