import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../../Uitily/Use-Notificatation";
import addEvent from "../../api/Events/AddEvent";

const AddEventHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const event = useSelector((state) => state.addEventData.addEvent);

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
      notify("name must be enterd", "error");
      return;
    }
    if (description === "") {
      notify("description must be enterd", "error");
      return;
    }
    if (category === "") {
      notify("category must be enterd", "error");
      return;
    }
    if (date === "") {
      notify("date must be enterd ", "error");
      return;
    }
    if (venue === "") {
      notify("venue must be enterd ", "error");
      return;
    }
    if (price === "") {
      notify("price must be enterd ", "error");
      return;
    }
  };

  const onSubmit = async () => {
    if (validationValues()) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    const formattedDate = new Date(date).toISOString(); // returns ISO format
    formData.append("date", formattedDate);
    formData.append("venue", venue);
    formData.append("price", price);
    if (image) formData.append("imageURL", image);

    try {
      const token = localStorage.getItem("token");
      const res = await dispatch(addEvent({ userData: formData, token }));
      if (res.meta.requestStatus === "fulfilled") {
        notify("Event added successfully", "success");
        setTimeout(() => {
          navigate(`/`);
        }, 2000);
      }else{
        notify("Failed to add event", "error");
      }

      console.log(res);
    } catch (error) {
      notify("Failed to add event", "error");
      console.error(error);
    }
  };

 

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
  ];
};

export default AddEventHook;
