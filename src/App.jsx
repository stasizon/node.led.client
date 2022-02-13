import {HexColorPicker} from "react-colorful";
import './App.css'

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

function setColor(color) {
    fetch("/set/color", {
        method: 'POST',
        body: JSON.stringify({"color": color}),
        headers: myHeaders
    })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function App() {
    return (
        <div className="App">
            <HexColorPicker color={'#ff0000'} onChange={color => setColor(color)}/>
        </div>
    )
}

export default App
