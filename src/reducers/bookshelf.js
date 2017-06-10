    import books from '../store/books'
    import { addBook, removeBook, editBook } from '../actions/booksCRUD'

    function bookshelf (state = books, action) {
      switch (action.type) {
        case 'ADD_BOOK':
          return addBook(state, action.payload).state
        case 'REMOVE_BOOK':
          return removeBook(state, action.payload).state
        case 'EDIT_BOOK':
          return editBook(state, action.payload).state
        default:
          return state
      }
    }
    export default bookshelf
