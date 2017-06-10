let findbook = function (books, name) {
  return {
    type: 'FIND_BOOK',
    filter: books.Bookshelf.books.filter(b => b.title.includes(name))
  }
}

let addBook = function (state, book) {
  state.Bookshelf.books.push(book)
  console.log(state)
  return {
    type: 'ADD_BOOK',
    state: Object.assign({}, state)
  }
}

let editBook = function (state, book) {
  let newState = state.Bookshelf.books.filter(b => b.id !== parseInt(book.id))
  newState.push(book)
  state.Bookshelf.books = newState
  return {
    type: 'EDIT_BOOK',
    state: Object.assign({}, state)
  }
}

let removeBook = function (state, id) {
  let newState = state.Bookshelf.books.filter(b => b.id !== parseInt(id))
  state.Bookshelf.books = newState
  return {
    type: 'REMOVE_BOOK',
    state: Object.assign({}, state)
  }
}


module.exports = {findbook, addBook, editBook, removeBook}




