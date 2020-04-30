import React, {useState} from 'react';
import Main from "./components/main";

function App() {

    const [result, setResult] = useState({
        response: 'Hello, not from the API',
    });

    const talkToApi = async() => {
        try {
            const res = await fetch('/api', {
                method: 'GET'
            }).then(res => res.json());
            setResult({
                response: res.message
            })
        } catch (err) {
            alert(err);
        }
    };

    return (
         <div className="App">
            <header className="App-header">
                <p>
                    State Of Mind
                </p>
                <button onClick={talkToApi}>Talk to API</button>
                <div>{result.response}</div>
                <Main/>
            </header>
         </div>
    );
}

export default App;
