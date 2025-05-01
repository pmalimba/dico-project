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
            <small>
              This project was coded by Paula Malimba, and is{" "}
              <a href="https://github.com/pmalimba/dictionary-project">
                open-sourced on GitHub
              </a>
              , and is{" "}
              <a href="https://dico-project.netlify.app/">hosted on Netlify</a>
            </small>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
