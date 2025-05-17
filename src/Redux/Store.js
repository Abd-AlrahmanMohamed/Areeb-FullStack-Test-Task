import { configureStore } from "@reduxjs/toolkit";
//user
import registeringReducer from "./Slice/AuthiticationSlice/RegisteringSlice";
import loginReducer from "./Slice/AuthiticationSlice/LoginSlice";
import getAllUsersReducer from "./Slice/AuthiticationSlice/GetAllUsersSlice";
import { getOneUserReducer } from "./Slice/AuthiticationSlice/GetOneUserSlice";
import { updateUserReducer } from "./Slice/AuthiticationSlice/UpdateUserSlice";
import deleteUserReducer from "./Slice/AuthiticationSlice/DeleteUserSlice";
//event
import { addEvetReducer } from "./Slice/Event/AddEventSlice";
import getAllEventsReducer from "./Slice/Event/GetAllEventsSlice";
import { getOneEventReducer } from "./Slice/Event/GetEventByIdSlice";
import { updateEventReducer } from "./Slice/Event/UpdateEventSlice";
import deleteEventReducer from "./Slice/Event/DeleteEventSlice";
//booking
import { addBookingReducer } from "./Slice/Booking/AddBookingSlice";
import { userBookingsReducer } from "./Slice/Booking/GetUserBookingsSlice";
import deleteBookingReducer from "./Slice/Booking/DeleteBookingSlice";

// Create the Redux store using configureStore
const store = configureStore({
  reducer: {
    //user
    registeringData: registeringReducer,
    loginData: loginReducer,
    getAllUsersData: getAllUsersReducer,
    getOneUserData: getOneUserReducer,
    updatUserData: updateUserReducer,
    deleteUserData: deleteUserReducer,
    //event
    addEventData: addEvetReducer,
    getAllEventsData: getAllEventsReducer,
    getOneEventData: getOneEventReducer,
    updateEventData: updateEventReducer,
    deleteEventData: deleteEventReducer,
    //booking
    addBookingData: addBookingReducer,
    getUserBookingsData: userBookingsReducer,
    deleteBoodingData: deleteBookingReducer,
  },
  devTools: true
});

export default store;
