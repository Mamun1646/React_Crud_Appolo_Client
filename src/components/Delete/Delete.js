import React from "react";
import { DELETE_USER } from "./../graphql/index";
import { useMutation } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Delete.css";
export default function Delete() {
  let navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [deleteUser] = useMutation(DELETE_USER);
  const handleOnClick = () => {
    deleteUser({ variables: { id } });
    alert("Delete");
    navigate("/");
  };

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
            <Link to={"/"}>
          <Button className="delete__btn" variant="info">
            Cancel
          </Button>
</Link>
          <Button onClick={handleOnClick} variant="danger">
            Delete
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
