import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS, VIEW_USERS } from "../GraphQL/ViewUsers";
import { Card, CardBody, CardHeader, CardSubtitle, Spinner } from "reactstrap";




import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import "./Home.css";


  
function User() {
  const [users, setUser] = useContext(UserContext);
  const getAllUsers = useQuery(GET_USERS);
  const userInfo = useQuery(VIEW_USERS, { variables: { id: "1" } });
 console.log("===============================")

  return (
    <div className="container">
      <Card>
        <CardHeader>Query - Displaying all data</CardHeader>
        <CardBody>
          <pre>{JSON.stringify(getAllUsers.data, null, 2)}</pre>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Query - Displaying data with args</CardHeader>
        <CardBody>
          <CardSubtitle>Viewing a user by id</CardSubtitle>
          <pre>{JSON.stringify(userInfo.data, null, 2)}</pre>
        </CardBody>
      </Card>
    </div>
  );
}

export default User;
