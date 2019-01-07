
import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';
//import BookShelf from './components/BookShelf';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary'






class App extends React.Component {
    
state = {  
books: []
}     





async componentDidMount() {
  const books = await BooksAPI.getAll()
  this.setState({books: books})
}


shelfChanger = (book, shelf) => {
    BooksAPI.update(book, shelf);
    book.shelf = shelf;
  

  this.setState(state => ({
    books: state.books.filter(b => b.id !== book.id).concat(book)
        
  }));
  }



  render() {
   console.log(this.state.books);

    return (
      <div className="app">

<ErrorBoundary>
<Route path="/" exact render={() => (
        <MainPage 
        
    shelfChanger={this.shelfChanger}
    books = {this.state.books}
    bookshelf = {this.state.shelves}
    
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
    );
  }
}

export default App;




