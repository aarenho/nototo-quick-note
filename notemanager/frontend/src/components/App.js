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

    const [note, setNote] = useState('')
    
    const onClick = (e) => {
        if(!note) {
            alert('Can\'t have an empty note!')
        }

        addNote({ note })
        setNote('')
    }

    const addNote = async (note) => {

        // const res = JSON.stringify(note)
        // console.log(note)
        // console.log(res)
        const res = await fetch('http://localhost:8000/api/notes/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(note)
        })
        
        const data = await res.json()
        console.log(data)
    }

    return (
        <div className="container"> 
            <div className="note-box">
                <textarea className="input-field" placeholder="Type note here..." value={note} onChange={(e) => setNote(e.target.value)}/>
            </div>
            <div className="submit-button" onClick={onClick}>
                SUBMIT
            </div>
        </div>
    )

}


ReactDOM.render(<App />, document.getElementById('app'));