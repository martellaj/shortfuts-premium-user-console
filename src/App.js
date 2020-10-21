import React, { useState } from "react";
import "./App.css";

function App() {
  const [oldAccount, setOldAccount] = useState("");
  const [newAccount, setNewAccount] = useState("");

  return (
    <div className="App">
      <div>
        <strong>old:</strong>
        <input
          style={{ marginLeft: "12px", marginBottom: "12px" }}
          value={oldAccount}
          onChange={(e) => setOldAccount(e.target.value)}
        />
      </div>

      <div>
        <strong>new:</strong>
        <input
          style={{ marginLeft: "12px", marginBottom: "12px" }}
          value={newAccount}
          onChange={(e) => setNewAccount(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          fetch(
            `https://shortfuts-server.herokuapp.com/update-premium-user/${oldAccount}/${newAccount}`,
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              referrer: "no-referrer",
            }
          )
            .then((response) => response.json())
            .then((jsonResponse) => {
              alert(jsonResponse.result);
            });
        }}
      >
        update
      </button>
    </div>
  );
}

export default App;
