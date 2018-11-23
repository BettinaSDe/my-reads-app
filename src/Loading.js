import React, { Component } from 'react';




class Loading extends React.Component {

render() {

  let result = this.props.book.imageLinks.thumbnail;
  const { isLoading, error } = this.state;

  if (error) {
  return <p>{error.message}</p>;
}

if (isLoading) {
  return <p>Loading ...</p>;
}
}
}

export default Loading;
