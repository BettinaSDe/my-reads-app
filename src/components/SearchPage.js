import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'types/sort-by'
import ErrorBoundary from './ErrorBoundary'




class SearchPage extends Component {
static propTypes = {
searchedBooks: PropTypes.array.isRequired,
//shelfChanger: PropTypes.func.isRequired
}

state = {
  query: '',
  searchedBooks: [],
  books: []
}

updateQuery = (query) => {
  this.setState({query: query.trim() })
}


 

componentDidMount() {
  BooksAPI.getAll().then(books => {
    this.setState({
      books
    })
  })
  this.searchedBooks = this.state.searchedBooks
}


render() {

    const { books } = this.props
    const { query } = this.state



    let searchedBooks
     if (query) {
    const match = new RegExp(escapeRegExp(query), 'i')
    searchedBooks = books.filter((book) => 
    match.test(book.id))
    
    
  } else {
    searchedBooks = <ErrorBoundary />
      }

  //searchedBooks.sort(sortBy('name'))




    return (
   
      
      <div className="search-books">

         <div className="search-books-input-wrapper">           
          <ErrorBoundary>
          <input  
                
            div handler="onChange"
            type="text" 
            placeholder="Search by title or author" 
            value={query}
            onChange={(event) => this.updateQuery(
              event.target.value)}
               
              />  
              </ErrorBoundary>
        </div>
       
        
        
        
      
             
       
     <div>
          <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks.map(searchedBook => {

              return (
            
            <ErrorBoundary>
            <li key={searchedBook.id}>
            <Book  
            book={searchedBook} 
            shelfChanger={this.props.shelfChanger}
             />
             </li>
             </ErrorBoundary>
             );
             })
            }
          </ol>
        </div>
        </div>
        </div>
            
         
      );
    }
}



export default SearchPage

