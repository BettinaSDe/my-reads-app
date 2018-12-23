
import React, { Component } from 'react';





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



{/*}

import React, { Component } from 'react';
import Book from './Book';





class Cover extends Component {
    constructor(props)
    {
        super(props);

        this.cover = Book.imageLinks;
        this.state = [];
    }

    render() {
        return (

  
    <img className="Cover" 
                src={`url("${this.props ? this.props.book.imageLinks.thumbnail : ''}")`}
    alt={'this.props.book.imageLinks'} />
        );
    }
}

export default Cover; 





{/*


export function Cover(props) {
    return (<div>
        <img className="Cover" src={`url("${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''}")`} alt={this.props.book.imageLinks} />
    </div>);
}
;

*/}