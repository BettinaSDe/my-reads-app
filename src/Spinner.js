


// https://medium.com/@chang_yan/a-bit-more-about-react-suspense-2e05cc4e9ef8

import React from 'react';
//import {createResource, createCache} from 'simple-cache-provider';
//import React, { Component } from 'react';



const cache = createCache()
const bookResource = createResource((_BooksAPI) => {
  return fetch('${BookID}/${bookId}')
})


class Spinner extends React.Component {


  render() {

  return (
    <React.Timeout ms={1000} fallback={<Spinner />}>
      <BookID bookId={1} />
    </React.Timeout>
  )

async function BookID({bookId}) {
  const book = await bookResource.read(cache, bookId)
  return (
    <div>{book.ID}</div>
  )
  }
}}

export default Spinner;