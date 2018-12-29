//import React from 'react';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import './App.css'






class App extends React.Component {
  
    

state = {
books: []  
}     

componentDidMount() {
BooksAPI.getAll().then((books) => {
  this.setState({ books: books })
})
}


shelfChanger = (book, shelf) => {
  BooksAPI.update(book, shelf);

  BooksAPI.getAll().then((books) => {
    this.setState({ books: books })
  })
}


  render() {
   console.log(this.state.books);

    return (
      <div className="app">


<Route path="/" exact render={() => (
        <MainPage 
        books={this.state.books}
    shelfChanger={this.shelfChanger}
          />
                
      )} />

      <Route path="/search" exact render={() => (
        <SearchPage 
      shelfChanger={this.shelfChanger}
      books={this.props.books}
          />
      )} />



 
      </div>
    )
  }
}

export default App;



