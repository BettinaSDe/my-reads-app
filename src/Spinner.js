


// I am trying to learn this from https://medium.com/@chang_yan/a-bit-more-about-react-suspense-2e05cc4e9ef8

import React from 'react';
import Book from './Book';
//import {createResource, createCache} from 'simple-cache-provider';
//import React, { Component } from 'react';



const cache = createCache()
const bookResource = createResource((book) => {
  return fetch('${book-cover}/${book-cover}')
})


class Spinner extends React.Component {


  render() {

  return (
    <React.Timeout ms={1000} fallback={<Spinner />}>
      <book-top book-top={1} />
    </React.Timeout>
  )

async function bookTop ({book}) {
  const bookhead = await book(cache, book)
  return (
    <div>{book}</div>
  )
  }
}}

export default Spinner;