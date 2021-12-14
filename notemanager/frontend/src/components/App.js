import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

// class App extends Component {
//     render() {
//         return (
//             <div className="container"> 
//                 <div className="note-box">
//                     <textarea className="input-field" placeholder="Type note here..." />
//                 </div>
//                 <div className="submit-button">
//                     SUBMIT
//                 </div>
//             </div>
//         )
//     }
// }

const App = () => {

    const [text, setText] = useState('')
    
    const onClick = (e) => {
        if(!text) {
            alert('Can\'t have an empty note!')
        }

        // onAdd({ text })
        setText('')
    }

    const addNote = async (note) => {
        console.log(note)
    }

    return (
        <div className="container"> 
            <div className="note-box">
                <textarea className="input-field" placeholder="Type note here..." value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="submit-button" onClick={onClick}>
                SUBMIT
            </div>
        </div>
    )

}


ReactDOM.render(<App />, document.getElementById('app'));