import React from "react";

const ModuleThree = ({ data, handleAlert }) => {
  return (
    <div id="module-three-container">
      <h2>Exercise 3</h2>
      <h4>Fetched data from Github API:</h4>
      <ul>
        {data.map(repo => {
          return <li key={repo.id}>{repo.name}</li>;
        })}
      </ul>
      <div id="alert-div" onClick={handleAlert}>
        I am a div that alerts when clicked!
      </div>
    </div>
  );
};

export default ModuleThree;
