

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

const { books, shelfChanger } = this.props;




class BookShelf extends Component {

  render() {

    
  return (

    <div>
    <div className="bookshelf">
      <div className="bookshelf-title" />
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            shelves.map(item => (

              <BookShelf
                books={books}
                title={item.title}
                shelf={item.shelf}
                shelfChanger={shelfChanger}
              />
            ))
          }
        </ol>
      </div>
      </div>
      </div>   
                   
       );
  }
}
      
    
        


export default BookShelf;



