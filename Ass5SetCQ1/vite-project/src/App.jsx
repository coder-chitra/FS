import React, { useState } from "react";

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const validUser = "admin";
    const validPassword = "12345";

    if (
      username === validUser &&
      password === validPassword
    ) {
      setMessage("Login Successful");
    } else {
      setMessage("Invalid Username or Password");
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>Login Form</h2>

      <form onSubmit={handleLogin}>

        <label>Username:</label>
        <br />
        <input
          type="text"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <br /><br />

        <label>Password:</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

      <h3>{message}</h3>

    </div>
  );
}

export default App;