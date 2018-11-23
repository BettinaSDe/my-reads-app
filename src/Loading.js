import React from 'react';


const isLoading = null;
const error = null;

class Loading extends React.Component {
  constructor() {
    super();
    this.state = { isLoading, error };
  }


render() {

  console.log(this.props.book.imageLinks.thumbnail);
      
  

  if (error) {
  return <p>{error.message}</p>;
}

if (isLoading) {
  return <p>Loading ...</p>;
}
}
}

export default Loading;
