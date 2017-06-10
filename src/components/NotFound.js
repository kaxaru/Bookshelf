import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
  back () {
    this.props.history.goBack()
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            Страница не найдена. Вернуться на <Link to='/'>главную</Link>?
          </div>
          <button onClick={this.back.bind(this)} >Back</button>
        </div>
      </div>
    )
  }
}
