import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div className="container"> 
                <div>
                    Text Area
                </div>
                <div>
                    Submit
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));