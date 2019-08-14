import React from "react";

import "../styles/App.css";

function App() {
  return (
    <header className="App-header">
      <div>How's the water</div>
      <div>
        <a href="https://testg301.auth.us-east-2.amazoncognito.com/login?response_type=token&client_id=65g3ii72skpsb08aggmq6a65fk&redirect_uri=http://localhost:3000/home">
          Login
        </a>
      </div>
    </header>
  );
}

export default App;
