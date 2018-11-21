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

      <Link to="./my-reads/" className="close-search" >Close</Link>
      <div className="search-books-input-wrapper">
      
        

        <input 
        type="text" 
        placeholder="Search by title or author"        
        value={this.state.query}
        onChange={(e) => this.updateQuery(e.target.value)}
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

 
















