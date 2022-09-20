import React from "react";
import "./Read.css";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS } from "../graphql/index";
import { Button } from "react-bootstrap";
export default function Read() {
  const { id } = useParams();
  const Users = useQuery(GET_USERS);
  // eslint-disable-next-line
  const user = Users.data.getAllPerson.filter((data) => data._id == id);

  return (
    <div className="read">
      <h1>ID: {user[0]._id}</h1>
      <h1>Name: {user[0].name}</h1>
      <h1>Position: {user[0].country}</h1>
      <h1>Salary: {user[0].Description} /= </h1>

      <Link to="/">
        <Button variant="info">Back to Home</Button>
      </Link>
    </div>
  );
}
