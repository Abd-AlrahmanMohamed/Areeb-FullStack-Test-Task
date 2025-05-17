import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import GetOneEventByIdHook from "../../Hooks/Event/GetOneEventByIdHook";

const GetEventByIdComponent = () => {
  const rolesData = localStorage.getItem("roles") || "[]";
  const { id } = useParams();
  const [event] = GetOneEventByIdHook(id);
  console.log("Event ID from URL:", id);
  console.log("Event from backend:", event);

  // const event = events.find((event) => event.id === id);
  return (
    <>
      <Container>
        <Row>
          <Col key={event.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`data:image/jpeg;base64,${event.imageUrl}`}
              />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <div className="d-flex justify-content-between">
                  <h5>{event.category}</h5>
                  <h5>{event.venue}</h5>
                </div>
                <h5>{event.date}</h5>
                <h3>{event.price}</h3>
                {rolesData === "Admin" ? (
                  <Link to={`/editEvent/${event.id}`}>
                    <Button variant="primary">Edit</Button>
                  </Link>
                ) : (
                  <Button variant="success">Book Now</Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GetEventByIdComponent;
