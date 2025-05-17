import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import GetAllUsersHook from "../../Hooks/User/GetAllUsersHook";

const GetAllUsersComponent = () => {
  const [isLoading, getAll, error] = GetAllUsersHook();

  return (
    <Container className="my-4">
      <Row>
        {isLoading && <p>Loading users...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        {Array.isArray(getAll?.$values) && getAll.$values.length > 0
          ? getAll.$values.map((user) => (
              <Col sm={12} md={6} lg={4} key={user.id} className="mb-3">
                <div className="p-3 border rounded shadow-sm h-100">
                  <Link
                    className="text-decoration-none fw-bold d-block mb-2"
                    to={`/userDetails/${user.id}`}
                  >
                    {user.firstName + user.lastName}
                  </Link>
                  <p className="mb-1">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="mb-0">
                  </p>
                </div>
              </Col>
            ))
          : !isLoading && <p>No users found.</p>}
      </Row>
    </Container>
  );
};

export default GetAllUsersComponent;
