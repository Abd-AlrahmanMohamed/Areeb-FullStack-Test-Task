import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../Uitily/Use-Notificatation";
import { useNavigate } from "react-router-dom"; // Import useNavigate here
import getOneEvent from "../../api/Events/GetOneEvent";
import updateEvent from "../../api/Events/UpdateEvent";

const UpdateEventHook = (id) => {
  const navigate = useNavigate(); // Use the useNavigate hook here
  const dispatch = useDispatch();
  const oneEvent = useSelector((state) => state.getOneEventData.event);
  const updateOne = useSelector((state) => state.updateEventData.updateEvent);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(file);
      setImage(file);
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };
  const onChangeVenue = (e) => {
    setVenue(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const validationValues = () => {
    if (name === "") {
      notify("Name must be entered", "error");
      return;
    }
    if (description === "") {
      notify("Description must be entered", "error");
      return;
    }
    if (category === "") {
      notify("Category must be entered", "error");
      return;
    }
    if (date === "") {
      notify("Date must be entered", "error");
      return;
    }
    if (venue === "") {
      notify("Venue must be entered", "error");
      return;
    }
    if (price === "") {
      notify("Price must be entered", "error");
      return;
    }
  };

  const onSubmit = async () => {
    if (!validationValues()) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    const formattedDate = new Date(date).toISOString(); // returns ISO format
    formData.append("date", formattedDate);
    formData.append("venue", venue);
    formData.append("price", price);
    if (image) formData.append("imageUrl", image);
    console.log("Image data before update:", image);


    try {
      // const token = localStorage.getItem("token");
      console.log(id);

const res = await dispatch(
  updateEvent({
    id,
    data: {
      id, 
      name,
      description,
      category,
      date,
      venue,
      price,
      imageUrl: image, 
    }
  })
);


      if (res.status === 200) {
        notify("Event updated successfully", "success");
        setTimeout(() => {
          navigate("/"); 
        }, 2000);
      } else {
        notify("Failed to update event", "error");
      }
      console.log(res);
    } catch (error) {
      notify("Failed to update event", "error");
      console.error(error);
    }
  };

  

  useEffect(() => {
    const run = async () => {
      dispatch(getOneEvent(id));
      console.log(id);
    };
    run();
  }, [id, dispatch]);

  useEffect(() => {
    if (oneEvent) {
      setName(oneEvent.name);
      setDescription(oneEvent.description);
      setCategory(oneEvent.category);
      setDate(oneEvent.date);
      setVenue(oneEvent.venue);
      setPrice(oneEvent.price);
      setImage(oneEvent.imageURL);
    }
    console.log(oneEvent);
  }, [oneEvent]);

  return [
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
  ];
};

export default UpdateEventHook;
