import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState({});

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    let apiKey = "51035d71b84ac5cet75eof3fb55a84d0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}}&key=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);

    return (
      <div className="Dictionary">
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <Results results={results} />
      </div>
    );
  }
}
