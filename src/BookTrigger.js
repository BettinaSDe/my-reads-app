import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import Book from './Book';
import * as BooksAPI from './BooksAPI';


class BookTrigger extends Component {
  state = {
    query: '',
    calledBooks: []
  }

 
  
  updateSearchedBooks = (query) => {
    if (query) {
  BooksAPI.search(query).then((calledBooks) => {
    if (calledBooks.error) {
      this.setState({ calledBooks: [] });
    } else {
    this.setState({ calledBooks: calledBooks });
    }
  })
  } else {
    this.setState({ calledBooks: [] });
  }
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateSearchedBooks(query);
  }
 
 
  render () {

      
    
        return (
    <div className="search-books">
    <div className="search-books-bar">

      <Link to="/" className="close-search" >Close</Link>
      <div className="search-books-input-wrapper">
      
        

        <input 
        type="text" 
        placeholder="Search by title or author"        
        value={this.state.query}
        onChange={(event) => this.updateQuery(event.target.value)}
        />
      </div>

      </div>

    <div className="search-books-results">
      <ol className="books-grid">
     {
       
       this.state.calledBooks.map(calledBook => { 

         return (

     <li key={calledBook.id}>
     <Book
     book={calledBook}
     shelfUpdated={this.props.shelfUpdated}
     
     />
     </li>
       );
       })
      }
      </ol>
</div>
</div>
    );
  }
}



export default BookTrigger; 

 /* NOTES: The search from BooksAPI is limited to a particular set of search terms.
          
//You can find these search terms here:
//https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

//However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
//you don't find a specific author or title. Every search is limited by search terms.
 */
























