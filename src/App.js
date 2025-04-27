import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <main>
          <Dictionary />
          <footer className="App-footer">
            <small>Coded by Paula Malimba</small>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
