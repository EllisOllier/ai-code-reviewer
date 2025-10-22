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
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <h1>AI Code Reviewer</h1>
            <p>API Status: {apiStatus ? apiStatus : "Offline" }</p>

            <div>
              <h2>Code Editor</h2>
              <textarea></textarea>
              <button id="analyze-button">Analyze</button>
            </div>
        </div>
    );
}

export default App;
