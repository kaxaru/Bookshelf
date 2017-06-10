import  { connect } from 'react-redux'
import AddBook from '../components/AddBook'


const AddBookContainer = connect(
    (state) => ({filters: state.bookshelfReducer
      .Bookshelf.books
      .filter(book => book.title.includes(state.filterReducer))}),
      dispatch => ({
        onAddBook: (book) => {
          const payload = {
            id: parseInt(Date.now().toString()),
            title: book.title,
            author: book.author,
            image: book.img,
            description: book.desc,
            dateAdded: new Date().toLocaleDateString(),
            isEditable: false
          }
          dispatch({ type: 'ADD_BOOK', payload: payload })
        }
      })
)(AddBook)

export default AddBookContainer

