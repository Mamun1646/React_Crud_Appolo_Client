/* eslint-disable */
import React, { useState } from "react";
// import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Create.css";
import { CREATE_USER_MUTATION } from "../graphql/index";

const UserForm = () => {
   let navigate = useNavigate();
  const [addPerson] = useMutation(CREATE_USER_MUTATION);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [Description, setDescription] = useState("");

  const createName = (e) => {
    setName(e.target.value);
  };

  const createCountry = (e) => {
    setCountry(e.target.value);
  };
  const createDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (event) => {
   
    
    addPerson({
      variables: {
        createPersonDto: {
          name,
          country,
          Description,
        },
      },
    });

    event.preventDefault();
     navigate("/");
  };

  return (
    <div className="create">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={createName}
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            name="country"
            value={country}
            onChange={createCountry}
            placeholder="Enter Country"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="Description"
            value={Description}
            onChange={createDescription}
            placeholder="Enter Description"
          />
        </Form.Group>
        <Form.Group>
          <Button className="action_btn" variant="primary" type="submit">
            Create User
          </Button>
            <Link to="/">
            <Button className="action_btn" variant="info">
              Back to Home
            </Button>
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserForm;
