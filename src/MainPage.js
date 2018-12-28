import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';



// I learned this shorthand React.Fragment syntax on: https://getstream.io/blog/react-fragments/ 

class MainPage extends Component {
    render () {
      console.log(this.props.books);
        return (

          <div>
          <div>
          <React.Fragment>
            <div className="list-books" />
            <div className="list-books-title" />
              <h1>MyReads</h1>
            
            
            <div className="list-books-content" />
              
                <div className="bookshelf" />
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books" />
                    <ol className="books-grid">
                    {
                      this.props.books
                      .filter(book => book.shelf === 'currentlyReading')
                      .map(book => (
                        <li key={book.id} >
                          <Book
                          book={book}
                          shelfChanger={this.props.shelfChanger}
                          shelfNow="currentlyReading"
                          />
                        </li>                        
                      ))
                      }
                    </ol>
                 
                </React.Fragment>
            </div>

            <div>
                <React.Fragment>
                <div className="bookshelf" />
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books" />
                    <ol className="books-grid">
                    {
                      this.props.books
                      .filter(book => book.shelf === 'wantToRead')
                      .map(book => (
                        <li key={book.id} >
                          <Book
                          book={book}
                          shelfChanger={this.props.shelfChanger}
                          shelfNow="wantToRead"
                          imageLinks={this.props.imageLinks}
                           />
                        </li>                        
                      ))
                      }
                     </ol>                 
                </React.Fragment>
            </div>

            <div>
                <React.Fragment>
                <div className="bookshelf" />
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books" />
                    <ol className="books-grid">
                      {
                      this.props.books
                      .filter(book => book.shelf === 'read')
                      .map(book => (
                        <li key={book.id} >
                          <Book
                          book={book}
                          shelfChanger={this.props.shelfChanger}
                          shelfNow="read"
                          />
                        </li>                        
                      ))
                      }
                    </ol>
                  </React.Fragment>
            </div>
             
             <div>
             <React.Fragment>
            <div className="open-search" />
              <Link to="/search">Add a book</Link>
            </React.Fragment>
          </div>
          </div>
        );
      }
  }
    

export default MainPage; 

