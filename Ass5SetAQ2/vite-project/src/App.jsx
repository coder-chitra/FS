import React, { useState } from "react";

function App() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Controlled Components Example</h2>

      <label>Username:</label>
      <br />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <label>Email:</label>
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h3>Entered Details</h3>

      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default App;