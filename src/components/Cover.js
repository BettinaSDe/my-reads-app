
import React, { Component } from 'react';
import '../App.css'
import ErrorBoundary from './ErrorBoundary';




class Cover extends Component {
    render() {

        console.log(this.props.book);
        
         // log out the prop passed to this component
        return (
            <ErrorBoundary>
            <img className="Cover"
                src={this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''}
                alt={this.props.book.title}
            />
            </ErrorBoundary>
        );
    }
};

export default Cover;



