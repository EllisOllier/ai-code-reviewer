import { useEffect, useState } from "react";

function App() {
    const [apiStatus, setApiStatus] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api-check")
            .then((res) => res.text()) // your backend returns plain text
            .then((data) => setApiStatus(data))
            .catch((err) => console.error("Error fetching backend:", err));
    }, []);

    return (
        <div id="root-container">
            <div id="header">
                <h1>AI Code Reviewer</h1>
                <p>
                    API Status:{" "}
                    {apiStatus ? (
                        <span id="online">{apiStatus}</span>
                    ) : (
                        <span id="offline">Offline</span>
                    )}
                </p>
            </div>

            <div id="code-editor-container">
                <div id="left-code-editor">
                  <div id="log-output">
                    <ul id="log-list">
                      <li><p>Dummy1</p></li>
                      <li><p>Dummy2</p></li>
                      <li><p>Dummy3</p></li>
                      <li><p>Dummy4</p></li>
                    </ul>
                  </div>
                </div>
                <div id="right-code-editor">
                    <div id="utility-container">
                        <button id="analyze-button" className="utility-button">
                            Analyze
                        </button>
                        <button id="dummy1-button" className="utility-button">
                            Dummy1
                        </button>
                        <button id="dummy2-button" className="utility-button">
                            Dummy2
                        </button>
                        <button id="dummy3-button" className="utility-button">
                            Dummy3
                        </button>
                        <button id="dummy4-button" className="utility-button">
                            Dummy4
                        </button>
                    </div>
                    <textarea id="code-editor"></textarea>
                </div>
            </div>
        </div>
    );
}

export default App;
