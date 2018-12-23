//import React from 'react';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import './App.css'



{/*
class Cover extends Component {
  render() {
    return (


      <img className="Cover"
        src={`url("${this.props.book.imageLinks ? this.props.book.cover.imageLinks.thumbnail : ''}")`}
        alt={this.props.book.imageLinks} />
    );
  }
};
*/}


export function Cover(props) {
  return (<div>
    <img className="Cover" src={`url("${props.book.imageLinks ? 
      props.book.imageLinks.thumbnail : ''}")`} 
      alt={'props.book.imageLinks'} />
  </div>);
}
;


class App extends React.Component {
  
    

state = {
books: []  
}     

componentDidMount() {
BooksAPI.getAll().then((books) => {
  this.setState({ books: books })
})
}


moveShelf = (book, shelf) => {
  BooksAPI.update(book, shelf);

  BooksAPI.getAll().then((books) => {
    this.setState({ books: books })
  })
}


  render() {
   console.log(this.state.books);

    return (
      <div className="app">


<Route exactPath="/my-reads-bettinasde/search" render={() => (
        <SearchPage
        moveShelf={this.moveShelf}
        books={this.props.books}
        />         
      )} />

      <Route exactPath="/my-reads-bettinasde/main" render={() => (
        <MainPage
    books={this.state.books}
    moveShelf={this.moveShelf}
    />
      )} />



 
      </div>
    )
  }
}

export default App;


/**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

