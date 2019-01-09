import React,{Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import ErrorBoundary from './ErrorBoundary'





class SearchPage extends Component{
 

  state = {
    
    books:[],
    searchedBooks:[],
    query: ''
  }

    
    
   
  
render() {
  const {query} = this.state;
  const {searchedBooks} = this.props

let searchResults 
if (query) {
const match = new RegExp(escapeRegExp(query), 'i')
searchResults = searchedBooks.filter((book) => match.test(book.id)
)}
 


    searchResults = (query) => {
      if (query) {
        BooksAPI.search(query).then((searchedBooks) => {
         if (searchedBooks.error) {
         //tbd
            ; 
          
          } else {
            this.setState({
              searchedBooks: searchedBooks
            });
          }
        })
      } else {
        this.setState({
          searchedBooks: []
        });
      }
    }
      
      
    searchResults = (query) => {
      this.setState({
        query: query
      })

      this.updateSearchedBooks(query);
    }
      
    
 

    

    return(
     
      <div className="search-books">
      <ErrorBoundary>
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
           <input type="text" placeholder="Search by title or author" onChange={this.bookQuery}/>
            
          </div>
        </div>
        </ErrorBoundary>
        
       
       <ErrorBoundary>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks.map(searchedBook => {
              return (
              <Book key={searchedBook.id} book={searchedBook} shelfChanger={this.props.helfChanger} />
            );})}
          </ol>
        </div>
        </ErrorBoundary>
      </div>
      );
            }
      
      
            
    }

export default SearchPage;





