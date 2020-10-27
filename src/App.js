import React, { useState } from "react";
import "./App.css";

function App() {
  const [oldAccount, setOldAccount] = useState("");
  const [newAccount, setNewAccount] = useState("");

  return (
    <div className="App">
      <span style={{ width: "500px", marginTop: "12px", marginBottom: "12px" }}>
        This page is to rectify your shortfuts premium purchase. You didn't
        follow instructions and didn't use the email address that's listed in
        your shortfuts app.{" "}
        <span style={{ backgroundColor: "lightblue" }}>
          This will only work for first-time buyers.
        </span>
      </span>
      <span style={{ width: "500px", marginBottom: "12px" }}>
        After you click "update" below, please wait <strong>15 minutes</strong>{" "}
        and then try checking shortfuts again. If you entered the correct email,
        you should be good to go!
      </span>
      <div className="box">
        <strong>contact email you used:</strong>
        <input
          value={oldAccount}
          onChange={(e) => setOldAccount(e.target.value)}
        />
        <p className="note">
          This is the email that received the shortfuts premium receipt.
        </p>
      </div>

      <div className="box">
        <strong>your shortfuts account:</strong>
        <input
          value={newAccount}
          onChange={(e) => setNewAccount(e.target.value)}
        />
        <p className="note">
          You can find this email on your shortfuts app (where you were supposed
          to find it before you purchased).
        </p>
      </div>
      <button
        style={{ marginTop: "6px" }}
        onClick={() => {
          fetch(
            `https://shortfuts-server.herokuapp.com/update-premium-user/${oldAccount}/${newAccount}`,
            // `http://localhost:3000/update-premium-user/${oldAccount}/${newAccount}`,
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
        <strong>update</strong>
      </button>
    </div>
  );
}

export default App;
