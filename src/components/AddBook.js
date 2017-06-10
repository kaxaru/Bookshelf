import React, { Component } from 'react'
import './addBook.css'

class AddBook extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      desc: '',
      image: '',
      id: ''
    }
  }

  addBook () {
    let book = {
      id: this.state.id,
      title: this.bookName.value,
      author: this.bookAuthor.value,
      desc: this.bookDesc.value,
      img: this.bookLinkImage.value
    };

    console.log(book);

    (this.props.onAddBook !== undefined)
    ? this.props.onAddBook(book)
    : this.props.onEditBook(book)

    this.bookName.value = ''
    this.bookAuthor.value = ''
    this.bookDesc.value = ''
    this.bookLinkImage.value = ''
    this.props.history.goBack()
  }

  goBack (e) {
    e.preventDefault()
    this.props.history.goBack()
  }

  handleChange (e, param) {
    this.setState({[param]: e.currentTarget.value})
  }

  render () {
    return (
      <div className='addBook'>
        <div>
          <div className='title'>
            <span>Title: </span>
            <input type='text' className='bookName'
              value={this.state.title}
              onChange={evt => this.handleChange(evt, 'title')}
              ref={(input) => { this.bookName = input }} />
          </div>
          <div className="author">
            <span>Author: </span>
            <input type="text" className='bookAuthor'
              value={this.state.author}
              onChange={evt => this.handleChange(evt, 'author')}
              ref={(input) => { this.bookAuthor = input }} />
          </div>
          <div className="description">
            <span>Description: </span>
            <input type="text" className='bookDesc'
              value={this.state.desc}
              onChange={evt => this.handleChange(evt, 'desc')}
              ref={(input) => { this.bookDesc = input }} />
          </div>
          <div className="image">
            <span>Link on image: </span>
            <input type="text" className='bookLinkImage'
              value={this.state.image}
              onChange={evt => this.handleChange(evt, 'image')}
              ref={(input) => { this.bookLinkImage = input }} />
          </div>
          <button onClick={this.addBook.bind(this)}>
            {(this.props.onAddBook !== undefined) ? 'Add' : 'Edit' } book
          </button>
        </div>
        <button className='back' onClick={this.goBack.bind(this)}>Back</button>
      </div>
    )
  }
}

export default AddBook
