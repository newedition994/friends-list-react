import React from "react";

import "./App.css";

const Person = () => {
  return <div>Person Component</div>;
};

const PersonList = () => {
  return <Person />;
};

const App = () => <PersonList />;

export default App;
