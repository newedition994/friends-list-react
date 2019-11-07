import React from "react";

import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 5,
      name: "Nancy",
      occupation: "developer"
    },
    {
      img: 35,
      name: "Loni",
      occupation: "designer"
    },
    {
      img: 15,
      name: "Adrianna",
      occupation: "solutions engineer"
    }
  ];

  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]} />
      <Person person={people[2]} />
    </section>
  );
};

const Person = () => {
  const url = "https://randomuser.me/api/portraits/thumb/women/5.jpg";
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>Name</h4>
        <h4>Occupation</h4>
      </div>
    </div>
  );
};

export default App;
