import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS } from "../graphql/index";
import { useNavigate } from "react-router-dom";

import { UPDATE_USER_MUTATION } from "../graphql/index";
import "./Edit.css";
import { useState } from "react";

const Edit = () => {
  //Route
  let navigate = useNavigate();
  const [updatePerson] = useMutation(UPDATE_USER_MUTATION);
  const { id } = useParams();

  // const mamun = mongoose.Types.ObjectId(id);
  // console.log(mamun);

  //   const user = users.filter((user) => user.id == id);
  const Users = useQuery(GET_USERS);
  // eslint-disable-next-line
  const user = Users.data.getAllPerson.filter((data) => data._id == id);
  const [name, setName] = useState(user[0].name);
  const [country, setCountry] = useState(user[0].country);
  const [Description, setDescription] = useState(user[0].Description);

  const editName = (e) => {
    setName(e.target.value);
    const edited_name = name;
    user[0].name = edited_name;
  };

  const editCountry = (e) => {
    setCountry(e.target.value);
    const edited_country = country;
    user[0].country = edited_country;
  };

  const editDescription = (e) => {
    setDescription(e.target.value);
    const edited_Description = Description;
    user[0].Description = edited_Description;
  };

  const HandleSubmit = (event) => {
    updatePerson({
      variables: {
        id: id,
        updatePersonDto: {
          name,
          country,
          Description,
        },
      },
    });
    navigate("/");
    event.preventDefault();
    alert("User info Successfully updated");
  };

  return (
    <div className="edit">
      <Form onSubmit={HandleSubmit}>
        <Form.Group>
          <Form.Label>
            <h1>ID NO:{user[0]._id}</h1>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={editName}
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Country </Form.Label>
          <Form.Control
            type="text"
            name="country"
            // value={position}
            onChange={editCountry}
            placeholder={user[0].country}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="Description"
            value={Description}
            onChange={editDescription}
            placeholder={user[0].Description}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Edit User
        </Button>
        <Link to="/">
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Edit;
