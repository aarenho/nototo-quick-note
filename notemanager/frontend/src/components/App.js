import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div className="container"> 
                <div className="note-box">
                    Type here...
                </div>
                <div className="submit-button">
                    SUBMIT
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));