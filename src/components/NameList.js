import React from "react";
import Person from "./Person";

function NameList() {
  const people = [
    {
      id: 1,
      name: "a",
      age: 12,
    },
    {
      id: 2,
      name: "b",
      age: 15,
    },
    {
      id: 3,
      name: "c",
      age: 18,
    },
  ];
  // const names = ["a", "b", "c", "d"];
  // const nameList = names.map((name) => <h2>{name}</h2>);
  // return <div>{nameList}</div>;
  const personList = people.map((person, index) => (
    <Person key={index} index={index} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
