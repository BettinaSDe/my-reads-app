import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookScreen from './BookScreen';
import BookTrigger from './BookTrigger';
import './App.css';


//according to my mock-up (see "resources" in Github, the "App" components holds the global state.)



class App extends React.Component {
      constructor() {
        super();

this.state = {
books: []  
};
}     

shelfUpdated = (book,shelf) => {

BooksAPI.update(book, shelf).then(() => {
  BooksAPI.getAll().then((books) => {
    this.setState({ books: books });
  })
});
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

<Route exact Path="/my-reads-bettinasde/search" render={() => (
        <BookTrigger
        shelfUpdated={this.shelfUpdated}
        books={this.props.books}
        />         
      )} />

      <Route exact Path="/my-reads-bettinasde/" render={() => (
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
