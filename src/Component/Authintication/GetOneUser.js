import React from "react";
import { useParams } from "react-router-dom";
import GetOneUserHook from "../../Hooks/User/GetOneUserHook";
import { Col, Container, Row } from "react-bootstrap";
import SubTitle from "../../Uitily/SubTitle";

const GetOneUser = () => {
  const { id } = useParams();
  const [user] = GetOneUserHook(id);
  console.log(user);
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col className=" w-">
            <SubTitle
              title="User"
              btntitle="Edit"
              path={`/updateUser/${user.id}`}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <React.Fragment key={user.id}>
              <h1>
                Name: {user.firstName} {user.lastName}
              </h1>
              <h3>UserName: {user.userName}</h3>
              <h5>Email: {user.email}</h5>
              <h5>PhoneNumber: {user.phoneNumber}</h5>
            </React.Fragment>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GetOneUser;
