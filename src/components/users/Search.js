import React, { useState, useContext } from "react";

import githubContext from "../../context/github/githubContext";
import alertContext from "../../context/alert/alertContext";

const Search = () => {
  const gitHubContext = useContext(githubContext);
  const alertConText = useContext(alertContext);
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertConText.showAlert("Please enter something", "light");
    } else {
      gitHubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {gitHubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={gitHubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
