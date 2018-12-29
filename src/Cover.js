
import React, { Component } from 'react';
import './App.css'



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



