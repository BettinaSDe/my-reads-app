import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'types/sort-by'
import ErrorBoundary from './ErrorBoundary'




class SearchPage extends Component {
static propTypes = {
searchedBooks: PropTypes.array.isRequired,
shelfChanger: PropTypes.func.isRequired
}

state = {
  query: ''
}

updateQuery = (query) => {
  this.setState({query: query.trim() })
}


render() {

    const { books, shelfChanger } = this.props
    const { query } = this.state 
    

 
    let searchedBooks 

  if (query) {
    const match = new RegExp(escapeRegExp(query), 'i')
    searchedBooks = books.filter((book) => match.test(book.id))

  } else {
    searchedBooks = <ErrorBoundary />
  }

  //searchedBooks.sort(sortBy('name'))



    return (
   
  
      <div className="search-books">
         <div className="search-books-input-wrapper">           
          <input         
           div handler="onChange"
            type="text" 
            placeholder="Search by title or author" 
            value={query}
            onChange={(event) => this.updateQuery(
              event.target.value)}
              />            
        </div>
        
        
      
             
       
     <div>
          <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.map(searchedBook => (<Book key={searchedBook.id} book={searchedBook} updateBookInfo={this.props.updateBookInfo} />))}
          </ol>
        </div>
        </div></div>
      
       
      
        
     
     
      )
    }
}



export default SearchPage

