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


<Route exactPath="/my-reads-bettinasde/search" render={() => (
        <SearchPage
        shelfChanger={this.shelfChanger}
        books={this.props.books}
        />         
      )} />

      <Route exactPath="/my-reads-bettinasde/main" render={() => (
        <MainPage
    books={this.state.books}
    shelfChanger={this.shelfChanger}
    />
      )} />



 
      </div>
    )
  }
}

export default App;



