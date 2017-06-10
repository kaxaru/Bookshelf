import  { connect } from 'react-redux'
import SearchBar from '../components/Seachbar'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) =>
                    ({ onFindBook: (name) => {
                      dispatch({type: 'FIND_BOOK', payload: name})
                    }})

const SeachBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar)

export default SeachBarContainer
