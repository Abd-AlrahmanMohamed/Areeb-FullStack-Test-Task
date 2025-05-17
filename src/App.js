import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registering from "./Component/Authintication/RegistringComponent"; // Import Registering Component
import LoginComponent from "./Component/Authintication/LoginComponent"; // Import LoginComponent
import GetOneUser from "./Component/Authintication/GetOneUser";
import UpdateUser from "./Component/Authintication/UpdateUser";
import UserDetailsComponent from "./Component/Authintication/UserDetailsComponent";
import GetEventByIdComponent from "./Component/Event/GetEventByIdComponent";
import NavBar from "./NavBar";
import GetAllEventsComponent from "./Component/Event/GetAllEventsComponent";
import GetUserBookingsComponent from "./Component/Booking/GetUserBookingsComponent";
import GetAllUsersComponent from "./Component/Authintication/GetAllUsersComponent";
import AddEventComponent from "./Component/Event/AddEventComponent";
import UpdateEventComponent from "./Component/Event/UpdateEventComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/register" element={<Registering />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/user/:id" element={<GetOneUser />} />
          <Route path="/updateUser/:id" element={<UpdateUser />} />
          <Route path="/userDetails/:id" element={<UserDetailsComponent />} />
         
          <Route path="/allUsers" element={<GetAllUsersComponent />} />
          <Route path="/addEvent" element={<AddEventComponent />} />
          <Route path="editEvent/:id" element={<UpdateEventComponent />} />
          <Route path="/" element={<GetAllEventsComponent />} />
          <Route path="/event/:id" element={<GetEventByIdComponent />} />
          <Route path="/cart/:id" element={<GetUserBookingsComponent />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
