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
      <Person person={people[1]}>
        Aliqua amet occaecat dolor elit excepteur consequat velit consequat
        excepteur commodo ipsum.
      </Person>
      <Person person={people[2]} />
    </section>
  );
};

const Person = props => {
  const { img, name, occupation } = props.person;
  const { children } = props;

  const url = `https://randomuser.me/api/portraits/thumb/women/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{occupation}</h4>
        {children}
      </div>
    </div>
  );
};

export default App;
