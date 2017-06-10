import AddBook from './AddBook'

export default class EditBook extends AddBook {
  componentWillMount () {
    console.log(this)
    const books = this.props.bookshelfReducer.Bookshelf.books
    const id = this.props.match.params.id
    const book = books.filter(b => b.id === parseInt(id))[0]
    if (book === undefined) {
      this.props.history.push('/notFound')
    } else {
      this.setState({
        title: book.title,
        author: book.author,
        desc: book.description,
        image: book.image,
        id: book.id
      })
    }
  }
}
