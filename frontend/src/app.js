import React, { useEffect, useState } from "react";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then(res => res.json())
      .then(data => setResponse(data.message))
      .catch(err => setResponse("Error connecting to backend."));
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: "40px" }}>
      <h1>React Frontend</h1>
      <p>Backend says:</p>
      <pre
        style={{
          background: "#eee",
          padding: "10px",
          borderRadius: "5px",
          display: "inline-block"
        }}
      >
        {response}
      </pre>
    </div>
  );
}

export default App;
