import React, { useState } from "react";
import { useParams } from "react-router-dom";
import GetUserBookingsHook from "../../Hooks/Booking/GetUserBookingsHook";
import { useDispatch } from "react-redux";
import deleteBooking from "../../api/Bookings/DeleteBooking";
import { Grid, Badge, Drawer, IconButton, Box } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { Button } from "react-bootstrap";

const GetUserBookingsComponent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, getAllUserBookings, error] = GetUserBookingsHook(id);

  const bookings = getAllUserBookings?.$values || [];

  const onDelete = (bookingId) => {
    dispatch(deleteBooking(bookingId));
  };

  if (isLoading) return <p>Loading bookings...</p>;
  if (error) return <p>Error loading bookings: {error.message}</p>;
  if (bookings.length === 0) return <p>No bookings found for this user.</p>;

  return (
    <div className="container mt-4">
      {/* Drawer toggle button */}
      <IconButton onClick={() => setIsDrawerOpen(true)} color="primary">
        <Badge badgeContent={bookings.length} color="error">
          <AddShoppingCart />
        </Badge>
      </IconButton>

      {/* MUI Drawer */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width="300px" role="presentation">
          <h4>Manage Bookings</h4>
          <p>You can manage bookings or show additional actions here.</p>
        </Box>
      </Drawer>

      {/* Bookings Grid */}
      <Grid container spacing={3}>
        {bookings.map((booking) => (
          <Grid item key={booking.id} xs={12} sm={6} md={4}>
            <div className="p-3 border rounded shadow-sm">
              <h5>Event: {booking.event?.name || "N/A"}</h5>
              <p>
                <strong>Booking Date:</strong>{" "}
                {booking.bookingDate
                  ? new Date(booking.bookingDate).toLocaleString()
                  : "N/A"}
              </p>
              <Button
                variant="danger"
                className="mt-2 w-100"
                onClick={() => onDelete(booking.id)}
              >
                Delete
              </Button>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GetUserBookingsComponent;
