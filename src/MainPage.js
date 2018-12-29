import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';





class MainPage extends Component {
    render () {
      console.log(this.props.books);

        return (

        <div>
          <div className="open-search">
            <Link to="/search">Search / Add a book</Link>
          </div>
        
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
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
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
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
                </div>
              </div>
            </div>


            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
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
              </div>
            </div>
          </div>
        </div >
         
         
        );
      }
    }
   
          
                  
              
          
          
          export default MainPage; 
          




{/*
 I applied shorthand React.Fragment syntax as learned on: https://getstream.io/blog/react-fragments/ , 
but Udacity reviewer discouraged usage in this context, since I am not integrating additional HTML elements here. So I removed it. */} 

