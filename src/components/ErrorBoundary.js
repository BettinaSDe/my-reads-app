
// code below primarily from reactjs.org/docs/error-boundaries.html with my adaptions 
// reactiflux: timeout - > Don't set it in render, set it where you set this.state.errorInfo

import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        errorInfo: null
      };
    }

    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }

  
  render() {
    if (this.state.errorInfo) {
      // Error path
      


      return ( <div>
        'error'
      
        <h2> Book not found. Return to Search via Refresh page </h2> 
        
        < details style = {
            {
              whiteSpace: 'pre-wrap'
            }
          } >
          {this.state.error && this.state.error.toString()} 
          <br/>

          setTimeout(() => {
            this.componentWillUpdate
          }, 4000) {

            this.state.errorInfo.componentStack


          } </details>


        
          
       
       
         
        </div>
        
      );
     
    }
    return this.props.children      
  }
  }

  

export default ErrorBoundary










