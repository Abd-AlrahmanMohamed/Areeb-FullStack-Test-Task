import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  CssBaseline,
  Card,
  CardContent,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import UpdateEventHook from "../../Hooks/Event/UpdateEventHook";

const UpdateEventComponent = () => {
  const { id } = useParams();
  const [
    name,
    description,
    category,
    date,
    venue,
    price,
    image,
    onChangeImage,
    onSubmit,
    onChangeName,
    onChangeDescription,
    onChangeCategory,
    onChangeDate,
    onChangeVenue,
    onChangePrice,
    oneEvent,
  ] = UpdateEventHook(id);

  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <CssBaseline />
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom align="center">
              Update Event
            </Typography>

            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 2,
              }}
            >
              <TextField
                label="Event Name"
                value={name}
                onChange={onChangeName}
                fullWidth
                required
              />
              <TextField
                label="Description"
                value={description}
                onChange={onChangeDescription}
                fullWidth
                required
              />
              <TextField
                label="Category"
                value={category}
                onChange={onChangeCategory}
                fullWidth
                required
              />
              <TextField
                label="Date & Time"
                type="datetime-local"
                value={date ? date.slice(0, 16) : ""}
                onChange={onChangeDate}
                InputLabelProps={{ shrink: true }}
                fullWidth
                required
              />
              <TextField
                label="Venue"
                value={venue}
                onChange={onChangeVenue}
                fullWidth
                required
              />
              <TextField
                label="Price"
                value={price}
                onChange={onChangePrice}
                fullWidth
                required
              />

              <Button variant="outlined" component="label">
                Upload Image
                <input type="file" hidden accept="image/*" onChange={onChangeImage} />
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={onSubmit}
                fullWidth
              >
                Submit
              </Button>
            </Box>
          </CardContent>
        </Card>
        <ToastContainer />
      </Container>
    </>
  );
};

export default UpdateEventComponent;
