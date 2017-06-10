import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './book.css'

export default class Book extends Component {
  constructor (props) {
    super(props)
    this.books = props.bookshelfReducer.Bookshelf.books
    this.id = props.match.params.id
    console.log(this.id)
    this.book = this.books.filter(b => b.id === parseInt(this.id))[0]
  }
  remove () {
    this.props.onRemoveBook(this.id)
    this.props.history.goBack()
  }

  render () {
    return (
      <div className="Book">
        <div>
          <div>{this.book.title}</div>
          <div>{this.book.author}</div>
          <img src={this.book.image} />
          <Link to={'/edit/' + this.id}><button> Edit </button></Link>
          <button onClick={this.remove.bind(this)}> Remove </button>
        </div>

        <Link to='/'><button>Go back</button></Link>
      </div>
    )
  }
}

