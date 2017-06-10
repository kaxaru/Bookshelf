import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export default class Menu extends Component {
  render () {
    return (
      <div className='menu'>
        <ul>
          <li><Link to='/add'>Add</Link></li>
          <li><Link to='/random'>Random page</Link></li>
        </ul>
      </div>
    )
  }
}
