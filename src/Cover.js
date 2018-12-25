
import React, { Component } from 'react';
import './App.css'



// Cover.js
class Cover extends Component {
    render() {
        console.log(this.props.book); // log out the prop passed to this component
        return (
            <img className="Cover"
                src={this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''}
                alt={this.props.book.title}
            />
        );
    }
};

export default Cover;


{/*}
const Cover = props => <img src={props.book.imageLinks ? props.book.imageLinks.thumbnail : ''}
    alt={'imageLinks.whatEverIsInThere'} />

export default Cover;
*/}

