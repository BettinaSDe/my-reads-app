
import React, * as react from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
//import PropTypes from 'prop-types';
//import {Provider as AlertProvider} from 'react-alert';
//import AlertTemplate from 'react-alert-template-basic';




class SearchPage extends react.Component {
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
          this.props.alert.show(<div style={{ color: 'blue' }}>Title not found</div>)

        } else {
          this.setState({ searchedBooks: searchedBooks });
        }
      })
    } else {
      this.setState({ searchedBooks: [] });
    }
  }

  render() {


// I learned this shorthand React.Fragment syntax on: https://getstream.io/blog/react-fragments/ 
    return ( 
       <div>
      <React.Fragment>  
       <div className="search-books" />
        <div className="search-books-bar" />

          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper" />
      

      <div> 
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.newSearch(e.target.value)}
            />
            </div >
      </React.Fragment>
           
          
        
<React.Fragment>
        <div className="search-books-results" />
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
        
        </React.Fragment>
      </div>
    );
  }
}



export default SearchPage;







  {/*}

  render() {
    <React.Fragment>

    {<search-books src={search-books} />}
    {<search-books-bar src={search-books-bar} />}
    {<search-books-input-wrapper src={search-books-input-wrapper} />}
    {<search-books-result src={search-books-result} />}
    {<books-grid src={books-grid} />}
    </React.Fragment>
     }
      
       
    
    
      return() 
        {
          <React.Fragment> 
              
       <div>
        <p>search-books</p>
         <p>search-books-bar</p>

            <Link to="/" className="close-search" >Close</Link>
             <p>search-books-input-wrapper</p>


              <div>
                <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(e) => this.newSearch(e.target.value)}
              />
            </div>
              
            

        
      
          <div>
          <p search-books-results>
            <ol books-grid>
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
                }}
              
              
           
           </ol>
          </p>
          </div>

          </React.Fragment>
                };
    
    
            
               
    export default SearchPage;


              */}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
