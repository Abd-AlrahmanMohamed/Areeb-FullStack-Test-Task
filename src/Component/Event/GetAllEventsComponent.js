import { Card, Col, Container, Row } from "react-bootstrap";
import GetAllEventsHook from "../../Hooks/Event/GetAllEventsHook";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import addBooking from "../../api/Bookings/AddBooking";
import deleteEvent from "../../api/Events/DeleteEvent";
import GetUserBookingsHook from "../../Hooks/Booking/GetUserBookingsHook";

const GetAllEventsComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const [getAllUserBookings] = GetUserBookingsHook(id);

  const bookings = getAllUserBookings?.$values || [];

  // const [userId, setUserId] = useState("");

  // useEffect(() => {
  //   const uId = localStorage.getItem("id");

  //   if (uId) {
  //     setUserId(uId);
  //   }
  // },[]);

  const [isLoading, getAll, error] = GetAllEventsHook();
  const roles = localStorage.getItem("roles");
  const addOneBooking = async (eventId) => {
    const userId = localStorage.getItem("id");
    if (!userId) {
      console.error("User ID not found in localStorage");
      return;
    }

    try {
      const res = await dispatch(addBooking({ userId, eventId }));
      console.log("Add Booking Response:", res);
    } catch (err) {
      console.error("Failed to add booking:", err);
    }
  };

  console.log("Fetched Events:", getAll);
  console.error("Error (if any):", error);

  const handleDelete = async (eventId) => {
    try {
      const res = await dispatch(deleteEvent(eventId));
      console.log("Delete Response:", res);
      navigate("/");
    } catch (err) {
      console.error("Failed to delete event:", err);
    }
  };

  const eventList = getAll?.$values || [];

  return (
    <Container className="mt-3">
      {isLoading && <p>Loading events...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {eventList.length > 0 ? (
        <Row>
          {eventList.map((event) => (
            <Col sm={12} md={6} lg={4} key={event.id}>
              <Card style={{ width: "18rem" }}>
                <Link to={`/editEvent/${event.id}`}>
                  <Card.Img
                    variant="top"
                    src={`data:image/jpeg;base64,${event.imageUrl}`}
                    alt={event.name}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{event.name}</Card.Title>
                  <Card.Text>{event.description}</Card.Text>
                  <h5>{event.date}</h5>
                  {roles.includes("User") ? (
                    bookings.eventId === eventList.id ? (
                      <Button variant="contained" color="success" fullWidth>
                        Booked
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => addOneBooking(event.id)}
                        fullWidth
                      >
                        Book Now
                      </Button>
                    )
                  ) : (
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(event.id)}
                      fullWidth
                    >
                      Delete
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        !isLoading && !error && <p>No events available at the moment.</p>
      )}
    </Container>
  );
};

export default GetAllEventsComponent;
