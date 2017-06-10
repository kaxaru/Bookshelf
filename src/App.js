import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import SearchBar from './container/SearchBar'
import Menu from './components/Menu'


class App extends Component {
  render () {
    console.log('app')
    let books = this.props.books
    console.log(this.props)
    return (      
      <div className='App'>
        <SearchBar />
        <Menu books={books} />
        {
        books.map(function (el, i) {
          return (
            <div className={'num' + el.id} key={el.id}>
              <div><Link to={{pathname: '/book/' + el.id}}>{el.title}</Link></div>
              <div>{el.author}</div>
              <img src={el.image} />
            </div>
          )
        })
      }
      </div>
    )
  }
}

export default connect(
  function (state) {
    if (state.filterReducer !== null) {
      return {books: state.filterReducer}
    }
    return {books: state.bookshelfReducer.Bookshelf.books}
  },

  dispatch => ({})
)(App)

