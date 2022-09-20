import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS } from "../graphql/index";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "./Home.css";

const Home = () => {
  const getAllUsers = useQuery(GET_USERS);
// const data = getAllUsers.data.getAllPerson;
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(getAllUsers);
    if (!!getAllUsers.data) {
      setData(getAllUsers.data.getAllPerson);
    }
  }, [getAllUsers]);
  

  return (
    <div>
      <Link to={"/Create/"}>
        <Button variant="primary">Create Person</Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.country}</td>
              <td>{user.Description}</td>
              <td>
                <Link to={"/Read/" + user._id}>
                  <Button className="action__btn" variant="success">
                    Read
                  </Button>
                </Link>
                <Link to={"/Edit/" + user._id}>
                  <Button className="action__btn" variant="info">
                    Edit
                  </Button>
                </Link>
                <Link to={"/Delete/" + user._id}>
                  <Button className="action__btn" variant="danger">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Home;
