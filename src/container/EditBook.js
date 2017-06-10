import { connect } from 'react-redux'
import EditBook from '../components/EditBook'

const EditBookContainer = connect(
    (state) => (state),
    dispatch => ({
      onEditBook: (book) => {
        const payload = {
          id: book.id,
          title: book.title,
          author: book.author,
          image: book.img,
          description: book.desc,
          dateAdded: new Date().toLocaleDateString(),
          isEditable: false
        }
        dispatch({ type: 'EDIT_BOOK', payload: payload })
      }
    })
)(EditBook)

export default EditBookContainer
