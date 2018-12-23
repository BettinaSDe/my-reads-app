
import React, { Component } from 'react';
import Cover from './Cover';
import * as BooksAPI from './BooksAPI'



//const bookObject = Cover;
const bookObject = {
  
  imageLinks: {
    thumbnail: 'http://via.placeholder.com/128x190'
  }
}




function Title(props) {
  // make sure to return JSX
  return (
    <div>{props.title}</div>
    /* translates to <div>bar</div> */
  )
};


function Authors(props) {
  return (
    <div>{props.authors}</div>
  )
};


// calling the component
class Book extends Component {
    render() {
    return (

      
      <div>

        <div>
          <Title title={this.props.book.title} /> 
         </div>

        <div>
          <Authors authors={this.props.book.authors} /> 
        </div>

        <div>
          <h2>{bookObject.cover}</h2>
          <Cover book={bookObject} />
        </div> 

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

    

    );
    

  }
};




export default Book; 


{/* commment from co-student: 
  two ways: either use img element with src attribute, then img src has to be exact without any additional methods, only ternary operator with literal. Uff. If you want to use div element
  and set attribute style and object with {{cover: 'url....}}  literal here with ternary operator. 

    */}

{/*}
class Book extends Component {
  render() {
    return (
      <div>
        <h2>{bookObject.title}</h2>
        <Cover book={bookObject} />
      </div>
    )
  }
}

      
      

{/*<div>
<Cover cover={this.props.book.cover} />   
</div> /}

</div>

   

{/*<div>
  <Cover 
        img
        className="Cover"
            src={`url("${this.props.book.imageLinks ? this.props.book.cover.imageLinks.thumbnail : ''}")`}
            alt={this.props.book.imageLinks}
          
          />

  </div>
  
 {/*} cover={
          <img
            src={`url("${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''}")`}
            // alt={props.book.imageLinks}
          />}
</div>


 */}
    {/*}
        <div> 
          <img src=
       {{Cover:`url("${this.props.book.imageLinks.thumbnail ? this.props.book.imageLinks.thumbnail : ''}")`
        }}/>
        </div>   
      */}

{/*imageLinks:
'`url("${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : "")`'








{/*
        <div className="Cover" style={{
       
        backgroundImage: `url("${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''}")`
           }} />    

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



{/*function book-shelf-changer(props) -- > write another eventlistener method */}








{/*
class Book extends Component {
   render () {

          return (
            
              
                <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{
                    width: 128,
                    height: 193,}}> 
                   {/*} backgroundImage: `url("${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''}")` }}></div>  */}
                 
                 {/*  backgroundImage={ backgroundImage } </div>

                  book-title={bookTitle}
                  book-authors={bookAuthors}
                  
                  */}

 
     
             
      {/* 
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
   
        */}