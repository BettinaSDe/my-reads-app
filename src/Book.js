
import React, { Component } from 'react';
//import App from './App';


class Book extends Component {
    render () {


      {/*let { book } = this.props;
      let thumbnail = (this.props.book.imageLinks && this.props.book.imageLinks.smallThumbnail)
      ? this.props.book.imageLinks.smallThumbnail
     : '';
    */}

     {/*let image = (this.props.book.imageLinks && this.props.book.imageLinks.smallThumbnail)
      ? this.props.book.imageLinks.smallThumbnail
     : ''; */}

      
      {/* let book={book};
      let coverImgURL = book.imageLinks
      ? book.imageLinks.smallThumbnail
      : "http://via.placeholder.com/128x190";
      : "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";


     //let displayedThumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '';

    */}
    
    
   
          return (
            
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${this.props.imageLinks ? this.props.imageLinks.thumbnail : ''}")`
                  }}></div>
   
   
   {/*<div className="book">
    <div className="book-top">
    <div className="book-cover" style={{ width: 128, height: 193, 
    backgroundImage: 'url("${thumbnail}")' }}></div>    */}
           
                 
           
      <div className="book-shelf-changer">
    
       <select 
        onChange={(event) => this.props.moveShelf(
          this.props.book, event.target.value
        )} 
        value={this.props.book.shelf}
                
        >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{this.props.book.title}</div>
    <div className="book-authors">{this.props.book.authors}</div>
  </div>
  
    );
  }
}

export default Book; 
