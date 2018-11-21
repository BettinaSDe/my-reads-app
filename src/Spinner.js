
//I am trying to understand REACT SUSPENSE based on this: https://medium.com/@chang_yan/a-bit-more-about-react-suspense-2e05cc4e9ef8 


import React from 'react';
import {createResource, createCache} from './simple-cache-provider';





const cache = createCache();
const bookResource = createResource((book) => {
  return fetch('${thumbnail}/${thumbnail}');
});
const thumbnail = ('${thumbnail}');




class Spinner extends React.Component {


  render() {

  return (
    <React.Timeout ms={1000} fallback={<Spinner />}>
      <book-top book-top={1} />
    </React.Timeout>
  )


async function delay ({book}) {
  const bookhead = await thumbnail(cache, book)
  return (
    <div>{thumbnail}</div>
  )
  }
}}   

export default Spinner;
