import React from 'react';


const isLoading = this.props.book.imageLinks.thumbnail;
const error = null;

class Loading extends React.Component {
  constructor() {
    super();
    this.state = { isLoading, error };
  }


render() {

  
  

  if (error) {
  return <p>{error.message}</p>;
}

if (isLoading) {
  return <p>Loading ...</p>;
}
}
}

export default Loading;
