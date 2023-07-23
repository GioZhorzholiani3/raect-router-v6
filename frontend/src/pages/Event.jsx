import React from "react";
import { Link } from "react-router-dom";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Programming for everybody",
  },
  {
    id: "e2",
    title: "Programming for nobody",
  },
];

const Event = () => {
  return (
    <>
      <h1>Event</h1>
      <ul>
        {DUMMY_DATA.map((event) => {
          return (
            <li key={event.id}>
              <Link to={`${event.id}`}>{event.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Event;
