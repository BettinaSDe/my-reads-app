import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import Book from './Book';
import * as BooksAPI from './BooksAPI';
//import {Provider as AlertProvider} from 'react-alert';
//import AlertTemplate from 'react-alert-template-basic';







class SearchPage extends Component {
  state = {
    query: '',
    searchedBooks: []
  }

  newSearch = (query) => {
    this.setState({
      query: query
    })
    this.newSearchedBooks(query);
  }
  
  newSearchedBooks = (query) => {
    if (query) {
  BooksAPI.search(query).then((searchedBooks) => {
    if (searchedBooks.error) {
      this.setState({ searchedBooks: [] });
      this.props.alert.show(<div style={{color: 'blue' }}>Title not found</div>)

    } else {
    this.setState({ searchedBooks: searchedBooks });
    }
  })
  } else {
    this.setState({ searchedBooks: [] });
  }
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
        onChange={(e) => this.newSearch(e.target.value)}
        />
      </div>

      </div>

    <div className="search-books-results">
      <ol className="books-grid">
     {
       
       this.state.searchedBooks.map(searchedBook => { 

         return (

     <li key={searchedBook.id}>
     <Book
     book={searchedBook}
     shelfChanger={this.props.shelfChanger}
     
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



export default SearchPage; 























