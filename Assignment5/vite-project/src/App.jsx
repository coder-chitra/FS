import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome Message App</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Welcome, {name}</h3>
    </div>
  );
}

export default App;