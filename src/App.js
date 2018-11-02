import React, { Component } from 'react'
import Main from './Main'
import Search from './Search'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends Component {
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
