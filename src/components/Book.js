import React, { PureComponent } from 'react';
import Cover from './Cover';
import ErrorBoundary from './ErrorBoundary';





function Title(props) {
  return (
    <div>{props.title}</div>
  )
};


function Authors(props) {
  return (
    <div>{props.authors}</div>
  )
};

function Changer(props) {
  
return (
<div>{props.shelfchanger}</div>
)
};



class Book extends PureComponent {
  
  render() {

      const bookObject = {

          imageLinks:

          {
          thumbnail:

            ((`${this.props.book.imageLinks.thumbnail}
          ? {this.props.book.imageLinks.thumbnail: ''}`)),


          smallThumbnail: 
          ((`${this.props.book.imageLinks.smallThumbnail}
          ? {this.props.book.imageLinks.smallThumbnail: ''}`))

        }
      }
        
    
   



    return (
      <ErrorBoundary>

      <div>
      <React.Fragment>
    

        <div className="book-title" />
          <Title title={this.props.book.title} />
     

        <div className="book-authors" />
          <Authors authors={this.props.book.authors} />
     

        <ErrorBoundary>
          <div className="book-cover" />
          <Cover book={bookObject} />
        </ErrorBoundary>
       
       

        <div className="book-shelf-changer" />
        <Changer shelfChanger={this.props.book.shelf.shelfchanger} />
         

            <select
             onChange = {(e) => this.props.shelfChanger(
                 this.props.book, e.target.value)
             }
             value = {this.props.book.shelf}
              
          >
            <option value="move">Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </React.Fragment>
      </div>
       </ErrorBoundary>

    );
  }
}


export default Book;





{/* 

// I learned this shorthand React.Fragment syntax on: https://getstream.io/blog/react-fragments/

  imageLink: 
  two ways: either use img element with src attribute, then img src has to be exact without any additional methods, 
  only ternary operator with literal. If one wants to use div element
  and set attribute style and object with {{cover: 'url....}}  literal here with ternary operator. 

  className="Cover"
          src={`url("${this.props.book.imageLinks ? this.props.book.cover.imageLinks.thumbnail : ''}")`}
          alt={this.props.book.imageLinks}


          imageLinks: {
        thumbnail: (`${this.props.book.imageLinks.thumbnail}`)
          ? this.props.book.cover.imageLinks.thumbnail : ''
    */}


{/* looking at the external API driving helps me to code this functionally 

(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
0:
allowAnonLogging: true
authors: ["Robert Galbraith"]
averageRating: 3.5
canonicalVolumeLink: "https://market.android.com/details?id=book-evuwdDLfAyYC"
categories: ["Fiction"]
contentVersion: "1.21.20.0.preview.2"
description: "A brilliant debut mystery in a classic vein: Detective Cormoran Strike investigates a supermodel's suicide. After losing his leg to a land mine in Afghanistan, Cormoran Strike is barely scraping by as a private investigator. Strike is down to one client, and creditors are calling. He has also just broken up with his longtime girlfriend and is living in his office. Then John Bristow walks through his door with an amazing story: His sister, thelegendary supermodel Lula Landry, known to her friends as the Cuckoo, famously fell to her death a few months earlier. The police ruled it a suicide, but John refuses to believe that. The case plunges Strike into the world of multimillionaire beauties, rock-star boyfriends, and desperate designers, and it introduces him to every variety of pleasure, enticement, seduction, and delusion known to man. You may think you know detectives, but you've never met one quite like Strike. You may think you know about the wealthy and famous, but you've never seen them under an investigation like this. Introducing Cormoran Strike, this is the acclaimed first crime novel by J.K. Rowling, writing under the pseudonym Robert Galbraith."
id: "evuwdDLfAyYC"
imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=evuwdDLfA…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=evuwdDLfA…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}
industryIdentifiers: (2) [{…}, {…}]
infoLink: "https://play.google.com/store/books/details?id=evuwdDLfAyYC&source=gbs_api"
language: "en"
maturityRating: "NOT_MATURE"
pageCount: 464
panelizationSummary: {containsEpubBubbles: false, containsImageBubbles: false}
previewLink: "http://books.google.com/books?id=evuwdDLfAyYC&printsec=frontcover&dq=rowling&hl=&cd=4&source=gbs_api"
printType: "BOOK"
publishedDate: "2013-04-30"
publisher: "Mulholland Books"f
ratingsCount: 3037
readingModes: {text: true, image: false}
shelf: "currentlyReading"
title: "The Cuckoo's Calling"



*/}
