import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookScreen from './BookScreen';
import BookTrigger from './BookTrigger';
import './App.css';
//import {createResource, createCache} from 'simple-cache-provider';
import Spinner from './Spinner';

class App extends React.Component {
  
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    

state = {
books: []  
}     


shelfUpdated = (book, shelf) => {
  BooksAPI.update(book, shelf);

  BooksAPI.getAll().then((books) => {
    this.setState({ books: books })
  })
}


componentDidMount() {
BooksAPI.getAll().then((books) => {
  this.setState({ books: books })
})
}









  render() {
   console.log(this.state.books);

    return (
      <div className="app">







<Route exactPath="/my-reads-bettinasde/search" render={() => (
        <BookTrigger
        shelfUpdated={this.shelfUpdated}
        books={this.props.books}
        />         
      )} />

      <Route exactPath="/my-reads-bettinasde/main" render={() => (
        <BookScreen
    books={this.state.books}
    shelfUpdated={this.shelfUpdated}
    />
      )} />



 
      </div>
    )
  }
}

export default App;
