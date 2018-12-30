//import React from 'react';
import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import './App.css';
import ErrorBoundary from './ErrorBoundary'






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
  book.shelf = shelf;

  this.setState(state => ({
    books: state.books.filter(b =>b.id !== book.id).concat(book),
  }));
}


  render() {
   console.log(this.state.books);

    return (
      <div className="app">

<ErrorBoundary>
<Route path="/" exact render={() => (
        <MainPage 
        books={this.state.books}
    shelfChanger={this.shelfChanger}
          />
                
      )} />

  </ErrorBoundary>



<ErrorBoundary>
      <Route path="/search" exact render={() => (
        <SearchPage 
      shelfChanger={this.shelfChanger}
      books={this.props.books}
          />
      )} />

      </ErrorBoundary>



 
      </div>
    )
  }
}

export default App;



