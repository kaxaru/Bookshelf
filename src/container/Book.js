import  { connect } from 'react-redux'
import Book from '../components/Book'

const BookContainer = connect(
    (state) => (state),
    (dispatch) => ({
      onRemoveBook: (id) => {
        dispatch({type: 'REMOVE_BOOK', payload: id})
      }
    })
)(Book)

export default BookContainer
