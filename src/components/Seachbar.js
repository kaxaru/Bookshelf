import React, { Component } from 'react'
import './Searchbar.css'

class Seachbar extends Component {
  findBook () {
    this.props.onFindBook(!!arguments[0] ? this.findName.value : arguments[0])
  }

  render () {
    return (
      <div className='findBook App-header'>
        <input placeholder='search...' type='text' className='findName' ref={(input) => { this.findName = input }} />
        <button onClick={this.findBook.bind(this)}>Find book</button>
        <button onClick={this.findBook.bind(this, '')}>Show all</button>
      </div>
    )
  }
}


export default Seachbar
