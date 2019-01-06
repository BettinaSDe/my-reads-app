

import React, { Component } from 'react';





const shelves = [
  {
    title: 'Currently Reading',
    shelf: 'currentlyReading',
  },
  {
    title: 'Want to Read',
    shelf: 'wantToRead'
  },
  {
    title: 'Read',
    shelf: 'read',
  }
];





class BookShelf extends Component {

  render() {

    const { books, shelfChanger } = this.props;
    
    
  return (

   <div>
    <div className="bookshelf">
      <div className="bookshelf-title = CurrentlyReading">
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            shelves.map(book => (
             <li key = {book.id} className="book">

              <BookShelf
                books={books}
                title={book.title}
                shelf={book.shelf}
                shelfChanger={shelfChanger}
              />
              </li>
            ))
          }
        </ol>
      </div>
      </div>
      </div>  
   
               
               



    <div>           
    <div className="bookshelf">
      <div className="bookshelf-title = wantToRead">
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            shelves.map(book => (
             <li key = {book.id} className="book">

              <BookShelf
                books={books}
                title={book.title}
                shelf={book.shelf}
                shelfChanger={shelfChanger}
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
      <div className="bookshelf-title = Read">
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            shelves.map(book => (
             <li key = {book.id} className="book">

              <BookShelf
                books={books}
                title={book.title}
                shelf={book.shelf}
                shelfChanger={shelfChanger}
              />
              </li>
            ))
          }
        </ol>
      </div>
      </div>
      </div>  
      </div>
    </div>


       );
  }
}
      
    
        


export default BookShelf;



