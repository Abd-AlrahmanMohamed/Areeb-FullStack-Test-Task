import React, { useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import SubTitle from '../../Uitily/SubTitle';
import deleteEvent from '../../api/Events/DeleteEvent';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import GetOneUserHook from '../../Hooks/User/GetOneUserHook';
import GetOneEventByIdHook from '../../Hooks/Event/GetOneEventByIdHook';

const DeleteEventComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [user] = GetOneEventByIdHook(id);
  console.log(user);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    try {
      await dispatch(deleteEvent(id));
      localStorage.removeItem("token");
      setShow(false);
      navigate("/users");
    } catch (err) {
      console.error("Failed to delete user:", err);
    }
  };

  return (
    <>
      <Col sm={12} md={6} lg={4}>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete User</Modal.Title>
          </Modal.Header>
          <Modal.Body>are you sure you want to delete this user?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
      <Container className="mt-5">
        <Row>
          <SubTitle title="Event" />
          <Button
            variant="danger"
            onClick={handleShow}
            className="mt-3 p-2 w-auto"
          >
            Delete
          </Button>
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
}

export default DeleteEventComponent
