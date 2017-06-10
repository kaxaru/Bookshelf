import books from '../store/books'
import { findbook } from '../actions/booksCRUD'

function filterBook (state, action) {
  switch (action.type) {
    case 'FIND_BOOK':
      return findbook(books, action.payload).filter
  }

  return null
}

export default filterBook
